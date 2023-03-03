import React from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CompanyPage from "../pages/CompanyPage";
import UserPage from "../pages/UserPage";

export const RouteRender = () => {
  const routesRoot: RouteObject[] = [
    {
      path: "/",
      element: <HomeLayout />,
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
