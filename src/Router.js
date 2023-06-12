import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import FilterPage from "./pages/Filterpage";
import Moviepage from "./pages/Moviepage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/search",
      element: <Searchpage />,
    },
    {
      path: "/filter",
      element: <FilterPage />,
    },
    {
      path: "/movie/:id",
      element: <Moviepage />,
    },
  ]);

  return routes;
}
