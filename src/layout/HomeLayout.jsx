import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

import {Toaster} from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div>
      <Toaster />
      {/* navbar */}
      <Navbar></Navbar>
      {/* outlet */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
