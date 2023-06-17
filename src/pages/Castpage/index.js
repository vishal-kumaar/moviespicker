import React from "react";
import MovieHeader from "../../components/MovieHeader";
import CastAndCrew from "./sections/CastAndCrew";
import getMovieById from "../../apis/getMovieById";
import NotFound from "../../components/NotFound";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Castpage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const handleMovie = async (movieId) => {
    const res = await getMovieById(movieId);
    if (res.success === true) {
      setMovie(res.data);
    }
  };

  useEffect(() => {
    handleMovie(movieId);
  }, [movieId]);
  return (
    <>
      {movie ? (
        <>
          <MovieHeader movie={movie} />
          {Object.keys(movie.credits).length && (
            <CastAndCrew credits={movie.credits} />
          )}
        </>
      ) : 
      <NotFound />
      }
    </>
  );
}
