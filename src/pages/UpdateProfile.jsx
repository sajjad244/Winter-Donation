import React, {useState, useContext} from "react";

import toast from "react-hot-toast";
import {AuthContext} from "../provider/AuthProvider";
import {useNavigate} from "react-router-dom";

const UpdateProfile = () => {
  const {user, updateUserProfile} = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    //! Update user profile
    updateUserProfile({displayName: name, photoURL})
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Failed to update profile: " + err.message);
      });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Update Your Profile
      </h2>

      <form onSubmit={handleUpdate}>
        <div className="form-control mb-4">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Profile Picture URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn bg-purple-600 w-full text-white">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
