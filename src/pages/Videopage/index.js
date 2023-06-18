import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab";
import MovieHeader from "../../components/MovieHeader";
import VideoList from "./sections/VideoList";
import NotFound from "../../components/NotFound";
import { useParams, useSearchParams } from "react-router-dom";
import getMovieById from "../../apis/getMovieById";
import getVideoByType from "../../utils/getVideoByType";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Videopage() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState(null);
  const [searchParam] = useSearchParams();
  const { movieId } = useParams();

  let activeTab = searchParam.get("activeTab");
  if (!activeTab) {
    activeTab = "Trailer";
  }

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

  if (!movie) {
    return <NotFound />;
  }

  const options = [
    {
      name: "Trailer",
      count: getVideoByType(movie.videos.results, "Trailer").length,
    },
    {
      name: "Teaser",
      count: getVideoByType(movie.videos.results, "Teaser").length,
    },
    {
      name: "Clips",
      count: getVideoByType(movie.videos.results, "Clips").length,
    },
    {
      name: "Behind the Scenes",
      count: getVideoByType(movie.videos.results, "Behind the Scenes").length,
    },
    {
      name: "Bloopers",
      count: getVideoByType(movie.videos.results, "Bloopers").length,
    },
    {
      name: "Featurettes",
      count: getVideoByType(movie.videos.results, "Featurettes").length,
    },
  ];

  return (
    <>
      <MovieHeader movie={movie} />
      <Tab heading="Videos" options={options} />
      {options.some((option) => option.name === activeTab) ? (
        <VideoList videos={getVideoByType(movie.videos.results, activeTab)} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
