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

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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
          <MovieHero movie={movie} />
          <div className="flex flex-col xl:flex-row xl:items-center justify-center">
            {movie.credits.cast && (
              <Casts
                casts={
                  movie.credits.cast.length > 10
                    ? movie.credits.cast.slice(0, 10)
                    : movie.credits.cast
                }
              />
            )}
            <MovieInfo movie={movie} />
          </div>
          {movie.videos.results && (
            <VideoCarousel
              videos={
                movie.videos.results.length > 10
                  ? movie.videos.results.slice(0, 10)
                  : movie.videos.results
              }
            />
          )}
          <Collection />
          <RecommendMovies />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
