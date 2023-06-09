import React from "react";
import Hero from "./sections/Hero";
import PopularMovies from "./sections/PopularMovies";
import ActionMovies from "./sections/ActionMovie";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularMovies />
      <ActionMovies />
    </>
  );
}
