import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? React.cloneElement(children) : <Navigate to="/" />;
};

export default PrivateRoute;
