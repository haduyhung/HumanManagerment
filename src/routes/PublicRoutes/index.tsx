import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const checkingLogin = localStorage.getItem("token");
  const a = checkingLogin && JSON.parse(checkingLogin);
  return <>{a ? <Navigate to="/users" replace={true} /> : <Outlet />}</>;
};

export default PublicRoutes;
