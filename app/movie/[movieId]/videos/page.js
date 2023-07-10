"use client";

import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import ShowHeader from "@/components/ShowHeader";
import Tab from "@/components/Tab";
import VideoList from "@/components/VideoList";
import getVideoByType from "@/utils/getVideoByType";
import addSeo from "@/utils/addSeo";
import { movieVideosPage } from "@/utils/getSeo";

export default function MovieVideos() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState([]);
  const searchParam = useSearchParams();
  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  let activeTab = searchParam.get("activeTab");
  if (!activeTab) {
    activeTab = "Trailer";
  }

  const handleMovie = async (id) => {
    startLoading();
    const res = await getShowById("movie", id);
    if (res.success) {
      setMovie(res.data);
      router.replace(
        `/movie/${id}-${res.data.title.replaceAll(" ", "-")}/videos`
      );
      addSeo(`Videos | ${res.data.title} | Movies Picker`, movieVideosPage.description);

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
      <ShowHeader show={movie} type="movie" />
      <Tab heading="Videos" options={options} />
      {options.some((option) => option.name === activeTab) ? (
        <VideoList videos={getVideoByType(movie.videos.results, activeTab)} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
