import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-9xl font-extrabold text-red-500">404</h1>
          <h2 className="text-4xl font-bold mt-4 text-gray-700">
            Oops! Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, the page you are looking for does not exist or was moved.
          </p>
          <Link to="/">
            <button className="btn bg-purple-600 text-white mt-6">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
