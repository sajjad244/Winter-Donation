import React, {useContext} from "react";
import {FaGoogle} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  // ! createNewUser
  const {createNewUser, setUser} = useContext(AuthContext);
  //! for navigate path
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //? get from data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // ! createNewUser
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Thank you! For your Registration");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="p-5 ">
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Registration Your Account
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Photo url */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Photo</span>
              </label>
              <input
                type="name"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Forget Password */}
            <div className="text-right mb-4">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="form-control mb-4">
              <button className="btn btn-primary w-full">Registration</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Login */}
          <div className="form-control mb-4">
            <button className="btn btn-outline  w-full flex items-center justify-center border-white">
              <FaGoogle className="w-5 h-5 mr-2 text-green-500" /> Continue with
              Google
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-sm">Already have an account? </span>
            <Link
              to="/auth/login"
              className="text-sm text-red-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
