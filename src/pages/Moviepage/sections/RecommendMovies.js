import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";

export default function RecommendMovies() {
  return (
    <MoviesCarousel
      heading="Recommendations"
      textColor="text-white"
      textBefore="before:bg-white"
      bgImage="bg-sky-900/80"
      bgPosition="bg-bottom"
    />
  );
}
