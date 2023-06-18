import React, { useEffect, useState } from "react";
import MovieHero from "./sections/MovieHero";
import Casts from "./sections/Casts";
import MovieInfo from "./sections/MovieInfo";
import RecommendMovies from "./sections/RecommendMovies";
import VideoCarousel from "./sections/VideoCarousel";
import Collection from "./sections/Collection";
import NotFound from "../../components/NotFound";
import getMovieById from "../../apis/getMovieById";
import { useParams } from "react-router-dom";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Movie() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const handleMovie = async (movieId) => {
    startLoading();
    const res = await getMovieById(movieId);
    if (res.success === true) {
      setMovie(res.data);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleMovie(movieId);
    },
    // eslint-disable-next-line
    [movieId]
  );
  return (
    <>
      {movie ? (
        <>
          <MovieHero movie={movie} />
          <div className="flex flex-col xl:flex-row xl:items-center justify-between">
            {movie.credits.cast.length > 0 && (
              <Casts casts={movie.credits.cast} />
            )}
            <MovieInfo movie={movie} />
          </div>
          {movie.videos.results.length > 0 && (
            <VideoCarousel videos={movie.videos.results} />
          )}
          {movie.belongs_to_collection && (
            <Collection collectionInfo={movie.belongs_to_collection} />
          )}
          <RecommendMovies movieId={movie.id} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
