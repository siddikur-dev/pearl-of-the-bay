import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import Button from "../shared/Button";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <NavLink to="/destination" className="hover:text-yellow-400">
        Destination
      </NavLink>
      <NavLink to="/blogs" className="hover:text-yellow-400">
        Blogs
      </NavLink>
      <NavLink to="/contact" className="hover:text-yellow-400">
        Contact
      </NavLink>
      {user && (
        <>
          <NavLink to="/dashboard" className="hover:text-yellow-400">
            Dashboard
          </NavLink>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="w-full text-white bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-center gap-36 md:gap-12">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="w-24"
          />
          {/* <span className="text-xl font-bold">Travel <span className="text-yellow-400">Guru</span></span> */}
        </div>

        {/* Search Box (hidden on mobile) */}
        <div className="flex-1 mx-6 max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-full px-4 py-2 rounded-lg text-white border-white outline-none focus:border-yellow-400 border-2"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 ">
          {links}
          {user ? (
            <Button onClick={handleLogout} label="Log Out" />
          ) : (
            <Link to="/auth/login">
              <Button label="login" />
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 py-4 space-y-3">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-full px-4 text-white py-2 rounded-lg  outline-none border-2 "
          />
          <div className="grid gap-2">{links}</div>
          {user ? (
            <Button onClick={handleLogout} label="Log Out" />
          ) : (
            <Link to="/auth/login">
              <Button label="login" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
