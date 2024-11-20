import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRoute;
