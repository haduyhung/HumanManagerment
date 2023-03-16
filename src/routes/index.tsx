import React from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import ProfilePage from "../features/auth/pages/ProfilePage";
import CompanyPage from "../features/company/pages";
import UserPage from "../features/user/pages";
import HomeLayout from "../layouts/HomeLayout";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const RouteRender = () => {
  const routesRoot: RouteObject[] = [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <PublicRoutes />,
          children: [
            {
              path: "login",
              element: <LoginPage />,
            },
          ],
        },
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "users",
              element: <UserPage />,
            },
            {
              path: "companies",
              element: <CompanyPage />,
            },
            {
              path: "profile",
              element: <ProfilePage />,
            },
          ],
        },

        {
          path: "*",
          element: <div>404 page! Làm đ j có trang này??</div>,
        },
      ],
    },
  ];
  const route = useRoutes(routesRoot);
  return route;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouteRender />
    </BrowserRouter>
  );
};

export default AppRoutes;
