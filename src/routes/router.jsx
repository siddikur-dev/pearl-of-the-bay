import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Blogs from "../pages/blog/blogs";
import Destination from "../pages/destination/destination";
import Contact from "../pages/contact/Contact";
import Home from "../components/Home";
import Login from "../pages/login/Login";
import Booking from "../pages/booking/Booking";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/destination", Component: Destination },
      { path: "/blogs", Component: Blogs },
      { path: "/contact", Component: Contact },
      { path: "/login", Component: Login },
      { path: "/profile", Component: Profile },
      { path: "/register", Component: Register },
      { path: "/booking", Component: Booking },
    ],
    // private routes
  },
]);

export default router;
