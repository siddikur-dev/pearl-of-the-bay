import React from "react";
import { Link, Outlet, useLocation } from "react-router";
import Navbar from "../../Pages/shared/NavBar";

const DashboardLayout = () => {
  const location = useLocation();

  const menuItems = [
    // { name: "Home", path: "/dashboard", icon: HomeIcon },
    { name: "My Profile", path: "/dashboard/my-profile", icon: UserIcon },
    // { name: "Payments", path: "/dashboard/payment-history", icon: WalletIcon },
    { name: "Bookings", path: "/dashboard/all-bookings", icon: BookingIcon },
    // { name: "Settings", path: "/dashboard/settings", icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content ">
      <Navbar />

      <div className=" px-4 lg:px-12 py-4">
        <div className="flex">
          {/* Fixed Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:flex lg:flex-col w-72 bg-base-200 h-[calc(100vh-6rem)] shadow-xl border-r border-base-300 fixed left-0 top-24 z-40 container mx-w-[1240px]">
            {/* Logo Area */}
            <div className="p-6 border-b border-base-300">
              <h2 className="text-2xl font-bold text-primary">Travel Guru</h2>
              <p className="text-sm text-base-content/70">Dashboard Panel</p>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2 container mx-auto">
                {menuItems.map(({ name, path, icon: Icon }) => {
                  const isActive = location.pathname === path;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive
                          ? " shadow-md"
                          : "hover:bg-primary/20"
                          }`}
                      >
                        <Icon />
                        <span>{name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>


          </aside>

          {/* Main Content */}
          <div className="flex-1 lg:ml-72">
            {/* Mobile Drawer */}
            <div className="drawer lg:hidden">
              <input
                id="dashboard-drawer"
                type="checkbox"
                className="drawer-toggle"
              />

              <div className="drawer-content flex flex-col">
                {/* Mobile Header */}
                <div className="bg-base-200 p-4 rounded-lg mb-6 shadow-sm flex items-center gap-2">
                  <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-square btn-ghost drawer-button"
                  >
                    <MenuIcon />
                  </label>
                  <h2 className="text-xl font-semibold mx-auto">
                    Travel Guru Dashboard
                  </h2>
                </div>

                {/* Content */}
                <div className="bg-base-100 p-6 rounded-xl shadow-inner min-h-[75vh]">
                  <Outlet />
                </div>
              </div>

              {/* Mobile Sidebar Drawer */}
              <div className="drawer-side z-50">
                <label
                  htmlFor="dashboard-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <aside className="w-72 min-h-full bg-base-200 shadow-xl border-r border-base-300">
                  {/* Mobile Logo Area */}
                  <div className="p-6 border-b border-base-300">
                    <h2 className="text-2xl font-bold text-primary">
                      Travel Guru
                    </h2>
                    <p className="text-sm text-base-content/70">
                      Dashboard Panel
                    </p>
                  </div>

                  {/* Mobile Menu */}
                  <ul className="menu p-4 space-y-2">
                    {menuItems.map(({ name, path, icon: Icon }) => {
                      const isActive = location.pathname === path;
                      return (
                        <li key={path}>
                          <Link
                            to={path}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive
                              ? "bg-primary text-white shadow-md"
                              : "hover:bg-primary/20"
                              }`}
                            onClick={() =>
                              document
                                .getElementById("dashboard-drawer")
                                .click()
                            }
                          >
                            <Icon />
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Mobile User Profile */}
                  <div className="p-4 border-t border-base-300">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <UserIcon />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-base-content/60">
                          Premium Member
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {/* Desktop Content (without mobile drawer) */}
            <div className="hidden lg:block">
              {/* Content */}
              <div className="bg-base-100 p-6 rounded-xl shadow-inner min-h-[75vh]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Icons */
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);


const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21c0-4 3-7 6-7s6 3 6 7" />
  </svg>
);

const BookingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);


export default DashboardLayout;