import React, {useState, useEffect, useContext} from "react";

import toast from "react-hot-toast";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const {resetPassword} = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide a valid email!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((error) => {
        toast.error(`Failed to send reset email: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleResetPassword}>
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Reset Password Button */}
          <div className="form-control mb-4">
            <button type="submit" className="btn btn-primary w-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
