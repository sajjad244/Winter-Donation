import React, {useContext} from "react";
import {FaGoogle} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {userLogIn, setUser} = useContext(AuthContext);
  //! for navigate path
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    //? get from data
    const email = e.target.email.value;
    const password = e.target.password.value;
    // ! login user
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Thank you! For your Login");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin}>
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
            <button className="btn btn-primary w-full">Login</button>
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
          <span className="text-sm">Don't have an account? </span>
          <Link
            to="/auth/registration"
            className="text-sm text-red-600 font-semibold hover:underline"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
