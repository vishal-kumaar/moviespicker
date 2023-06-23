import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Filterpage from "./pages/Filterpage";
import Moviepage from "./pages/Moviepage";
import Castpage from "./pages/Castpage";
import Personpage from "./pages/Personpage";
import Videopage from "./pages/Videopage";
import Errorpage from "./pages/Errorpage";
import Seriespage from "./pages/Seriespage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/tv",
      element: <Seriespage />,
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
      path: "/movie/:movieId",
      element: <Moviepage />,
    },
    {
      path: "/movie/:movieId/cast",
      element: <Castpage />,
    },
    {
      path: "/movie/:movieId/videos",
      element: <Videopage />,
    },
    {
      path: "/person/:personId",
      element: <Personpage />,
    },
    {
      path: "*",
      element: <Errorpage />,
    },
  ]);

  return routes;
}
