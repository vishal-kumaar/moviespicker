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
import Tvseriespage from "./pages/Tvseriespage";
import Seriespage from "./pages/Seriespage";
import Seriescastpage from "./pages/Seriescastpage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/movie",
      element: <Homepage />,
    },
    {
      path: "/series",
      element: <Tvseriespage />,
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
      path: "/series/:seriesId",
      element: <Seriespage />,
    },
    {
      path: "/movie/:movieId/cast",
      element: <Castpage />,
    },
    {
      path: "/series/:seriesId/cast",
      element: <Seriescastpage />,
    },
    {
      path: "/:show/:id/videos",
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
