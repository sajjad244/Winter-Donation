import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Welcome, {user?.displayName || "User"}!
      </h2>

      <div className="space-y-4">
        <div className="flex items-center flex-col space-x-4 space-y-4">
          <img
            src={user?.photoURL && user.photoURL}
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <p className="text-xl font-medium space-y-3">
              Name: {user?.displayName || "N/A"}
            </p>
            <p className="text-xl font-medium">Email: {user?.email || "N/A"}</p>
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="mt-6">
          <Link
            to="/dashboard/updateProfile"
            className="btn bg-purple-600 w-full text-white"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
