"use client";

import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import ShowHero from "@/components/ShowHero";
import { useParams, useRouter } from "next/navigation";
import CastCarousel from "@/components/CastCarousel";
import ShowInfo from "@/components/ShowInfo";
import VideoCarousel from "@/components/VideoCarousel";
import Collection from "./sections/Collection";
import ShowCarousel from "@/components/ShowCarousel";
import getRecommendation from "@/apis/getRecommendation";
import addSeo from "@/utils/addSeo";
import { movieDetailPage } from "@/utils/getSeo";

export default function Movie() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState({});
  const [recommendMovies, setRecommendMovies] = useState(null);

  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  const handleMovie = async (movieId) => {
    startLoading();
    const res1 = await getShowById("movie", movieId);
    if (res1.success) {
      setMovie(res1.data);
      router.replace(
        `/movie/${movieId}-${res1.data.title.replaceAll(" ", "-")}`
      );
      addSeo(`${res1.data.title} | Movies Picker`, movieDetailPage.description);
    } else {
      setMovie(null);
    }

    const res2 = await getRecommendation(movieId, "movie");
    if (res2.success) {
      setRecommendMovies(res2.data.results);
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

  return (
    <>
      <ShowHero showType="movie" show={movie} />
      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        {movie &&
          movie.credits &&
          movie.credits.cast &&
          movie.credits.cast.length > 0 && (
            <CastCarousel castFor="movie" casts={movie.credits.cast} />
          )}
        <ShowInfo showType="movie" show={movie} />
      </div>
      {movie &&
        movie.videos &&
        movie.videos.results &&
        movie.videos.results.length > 0 && (
          <VideoCarousel videos={movie.videos.results} type="movie" />
        )}
      {movie && movie.belongs_to_collection && (
        <Collection collectionInfo={movie.belongs_to_collection} />
      )}

      {recommendMovies && (
        <ShowCarousel
          heading="Recommended Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          shows={recommendMovies}
          showType="movie"
        />
      )}
    </>
  );
}
