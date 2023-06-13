import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";

export default function RecommendMovies() {
  return (
    <MoviesCarousel
      heading="Recommendations"
      textColor="text-black"
      textBefore="before:bg-black"
    />
  );
}
