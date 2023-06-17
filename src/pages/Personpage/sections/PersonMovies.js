import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";
import { useState } from "react";
import getMoviesByPersonId from "../../../apis/getMoviesByPersonId";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PersonMovies() {
  const [movies, setMovies] = useState(null);
  const { personId } = useParams();

  const handleMovie = async (personId) => {
    const res = await getMoviesByPersonId(personId);
    if (res.success === true) {
      setMovies(res.data);
    }
  };

  useEffect(() => {
    handleMovie(personId);
  }, [personId]);
  return (
    <>
      {movies && (
        <>
          <hr className="mt-10 mx-6 md" />
          <div className="pl-2">
            <MoviesCarousel
              heading="Known for movies"
              textColor="black"
              textBefore="before:bg-black"
              movies={movies.results}
            />
          </div>
        </>
      )}
    </>
  );
}
