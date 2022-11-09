import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { myContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(myContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-6xl">Loading....</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
