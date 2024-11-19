import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
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
