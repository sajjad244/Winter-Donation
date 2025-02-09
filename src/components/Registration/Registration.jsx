import React, {useContext, useState} from "react";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  // ! createNewUser
  const {createNewUser, setUser, googleLogIn, updateUserProfile} =
    useContext(AuthContext);
  const [error, setError] = useState("");
  //! show password eye
  const [showPassword, setShowPassword] = useState(false);

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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least 6 characters, including uppercase and lowercase letters."
      );
      return;
    } else {
      setError("");
    }

    // ! createNewUser
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        updateUserProfile({displayName: name, photoURL: photo})
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            alert(err.code);
          });
        toast.success("Thank you! For your Registration");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // ! google login
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast.success(
          `Welcome ${user.displayName}! You have successfully logged in.`
        );
      })
      .catch((err) => {
        toast.error(`Google Login Failed: ${err.message}`);
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
            <div className="form-control mb-4 relative">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              {/* eye */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute right-4 top-12 "
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              {/* Show Password Error */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Login Button */}
            <div className="form-control mb-4">
              <button className="btn bg-purple-600 text-white w-full">
                Registration
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Login */}
          <div className="form-control mb-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline  w-full flex items-center justify-center border-white"
            >
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
