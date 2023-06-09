import React from "react";
import Hero from "./sections/Hero";
import PopularMovies from "./sections/PopularMovies";
import ActionMovies from "./sections/ActionMovie";
import SciFiMovies from "./sections/SciFiMovies";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularMovies />
      <ActionMovies />
      <SciFiMovies />
    </>
  );
}
