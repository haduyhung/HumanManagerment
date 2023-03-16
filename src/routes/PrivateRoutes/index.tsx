import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const checkingLogin = localStorage.getItem("token");
  const a = checkingLogin && JSON.parse(checkingLogin);
  return <>{!a ? <Navigate to="/login" replace={true} /> : <Outlet />}</>;
};

export default PrivateRoutes;
