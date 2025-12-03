import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Authentication/Login";
import MyProfile from "../Pages/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentFailed from "../Pages/Dashboard/Payment/PaymentFailed";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";

import Profile from "../Pages/Dashboard/Profile/Profile";
import Destination from "../Pages/Destination/Destination";

import Contact from "../Pages/Contact";
import Booking from "../Pages/Booking/Booking";
import Blogs from "../Pages/Blogs/Blogs";
import AllBookings from "../Pages/Dashboard/AllBookings/AllBookings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: Contact,
      },

      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            {" "}
            <MyProfile />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "booking",
        element: (
          <PrivateRoutes>
            {" "}
            <Booking />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/destination",
        Component: Destination,
      },
    ],
  },
  // Auth
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
  // Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-profile",
        Component: Profile,
      },
      {
        path: "all-bookings",
        Component: AllBookings,
      },

      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentFailed,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
