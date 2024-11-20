import React from "react";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-transparent">
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
