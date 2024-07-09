import { useRoutes } from "react-router-dom";
import Login from "./login";
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
