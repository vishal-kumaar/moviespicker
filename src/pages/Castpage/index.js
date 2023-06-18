import React from "react";
import MovieHeader from "../../components/MovieHeader";
import CastAndCrew from "./sections/CastAndCrew";
import getMovieById from "../../apis/getMovieById";
import NotFound from "../../components/NotFound";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Castpage() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const handleMovie = async (movieId) => {
    startLoading();
    const res = await getMovieById(movieId);
    if (res.success === true) {
      setMovie(res.data);
    }
    stopLoading();
  };

  useEffect(() => {
    handleMovie(movieId);
  }, 
  // eslint-disable-next-line
  [movieId]);
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
