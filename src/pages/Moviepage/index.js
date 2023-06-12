import React from "react";
import MovieHero from "./sections/MovieHero";
import Casts from "./sections/Casts";
import MovieInfo from "./sections/MovieInfo";

export default function Movie() {
  return (
    <>
      <MovieHero />
      <div className="flex flex-col xl:flex-row xl:items-center justify-center">
        <Casts />
        <MovieInfo />
      </div>
    </>
  );
}
