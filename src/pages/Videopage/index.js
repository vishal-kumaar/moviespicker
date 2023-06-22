import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab";
import MovieHeader from "../../components/MovieHeader";
import VideoList from "./sections/VideoList";
import NotFound from "../../components/NotFound";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import getMovieById from "../../apis/getMovieById";
import getVideoByType from "../../utils/getVideoByType";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Videopage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState([]);
  const [searchParam] = useSearchParams();
  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  let activeTab = searchParam.get("activeTab");
  if (!activeTab) {
    activeTab = "Trailer";
  }

  const handleMovie = async (movieId) => {
    startLoading();
    const res = await getMovieById(movieId);
    if (res.success) {
      setMovie(res.data);
      navigate(
        `/movie/${movieId}-${res.data.title.replaceAll(" ", "-")}/videos`,
        { replace: true }
      );
    } else {
      setMovie(null);
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

  if (movie && movie.length === 0) {
    return null;
  }
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
      name: "Clip",
      count: getVideoByType(movie.videos.results, "Clip").length,
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
      name: "Featurette",
      count: getVideoByType(movie.videos.results, "Featurette").length,
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
