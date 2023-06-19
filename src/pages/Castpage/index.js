import React from "react";
import MovieHeader from "../../components/MovieHeader";
import CastAndCrew from "./sections/CastAndCrew";
import getMovieById from "../../apis/getMovieById";
import NotFound from "../../components/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Castpage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState();
  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  const handleMovie = async (movieId) => {
    startLoading();
    const res = await getMovieById(movieId);
    if (res.success === true) {
      setMovie(res.data);
      navigate(`/movie/${movieId}-${res.data.title.replaceAll(" ", "-")}/cast`,{replace: true});
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
