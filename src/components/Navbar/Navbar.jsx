import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import "animate.css";
import loginImg from "../../assets/user.png";
import {AuthContext} from "../../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/help">How to Help</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar  bg-base-100  rounded-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 space-x-2 text-blue-900 font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl text-blue-800 font-bold animate__animated animate__heartBeat"
          >
            Winter Donation
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 text-blue-900 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <div>
            {user && user?.email ? (
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <img src={loginImg} alt="" />
            )}
          </div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn bg-red-500 text-white">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn bg-purple-600 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
