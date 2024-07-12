import Home from "./home";
import Login from "./login";
import React from "react";
import { useRoutes } from "react-router-dom";

export default function Router() {
  const routes = useRoutes([
    {
      path: "",
      element: <Login />,
      index: true,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return routes;
}
