"use client";

import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import { useParams, useRouter } from "next/navigation";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import ShowHeader from "@/components/ShowHeader";
import Cast from "@/components/Cast";
import Crew from "@/components/Crew";
import addSeo from "@/utils/addSeo";
import { movieCastPage } from "@/utils/getSeo";

export default function MovieCast() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [movie, setMovie] = useState([]);
  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  const handleData = async (movieId) => {
    startLoading();
    const res = await getShowById("movie", movieId);
    if (res.success) {
      setMovie(res.data);
      router.replace(
        `/movie/${movieId}-${res.data.title.replaceAll(" ", "-")}/cast`
      );
      addSeo(`Cast | ${res.data.title} | Movies Picker`, movieCastPage.description);
    } else {
      setMovie(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleData(movieId);
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

  return (
    <>
      <ShowHeader show={movie} type="movie" />
      {movie.credits ? (
        <section className="flex flex-col gap-5 sm:gap-0 sm:flex-row px-6 md:px-14 my-8">
          <Cast castFor="movie" cast={movie.credits.cast} />
          <Crew crewFor="movie" crew={movie.credits.crew} />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
