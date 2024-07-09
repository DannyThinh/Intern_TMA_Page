import { useRoutes } from "react-router-dom";
import Login from "./temp";
import React from "react";

export default function Router() {
  const routes = useRoutes([
    {
      path: "",
      element: <Login />,
      index: true,
    },
  ]);

  return routes;
}
