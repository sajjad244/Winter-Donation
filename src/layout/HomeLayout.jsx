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
      <div className="min-h-[calc(100vh-300px)] py-12">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
