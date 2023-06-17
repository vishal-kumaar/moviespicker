import React, { useEffect, useState } from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";
import getRecommendation from "../../../apis/getRecommendation";

export default function RecommendMovies({ movieId }) {
  const [movies, setMovies] = useState(null);

  const handleRecommendation = async (movieId) => {
    const res = await getRecommendation(movieId);
    if (res.success === true) {
      setMovies(res.data.results);
    }
  };

  useEffect(() => {
    handleRecommendation(movieId);
  }, [movieId]);
  return (
    <>
      {movies && (
        <MoviesCarousel
          heading="Recommended Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          movies={movies.results}
        />
      )}
    </>
  );
}
