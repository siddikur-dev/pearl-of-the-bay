import React from "react";
import { Outlet } from "react-router";
import authImage from "../../../assets/Project/authImage.png";
import Navbar from "../../Pages/shared/NavBar";
const AuthLayout = () => {
  return (
    <div className="  ">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
