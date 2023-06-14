import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";

export default function PersonMovies() {
  return (
    <>
      <hr className="mt-10 mx-6 md" />
      <div className="pl-2">
        <MoviesCarousel
          heading="Known for movies"
          textColor="black"
          textBefore="before:bg-black"
        />
      </div>
    </>
  );
}