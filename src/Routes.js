import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Filterpage from "./pages/Filterpage";
import Moviepage from "./pages/Moviepage";
import Castpage from "./pages/Castpage";
import Personpage from "./pages/Personpage";
import Videopage from "./pages/Videopage";

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
      element: <Filterpage />,
    },
    {
      path: "/movie/:id",
      element: <Moviepage />,
    },
    {
      path: "/movie/:id/cast",
      element: <Castpage />,
    },
    {
      path: "/movie/:id/videos",
      element: <Videopage />,
    },
    {
      path: "/person/:id",
      element: <Personpage />,
    },
  ]);

  return routes;
}
