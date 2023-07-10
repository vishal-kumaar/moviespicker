"use client";

import React, { useEffect, useState, useContext } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getShowByGenre from "@/apis/getShowByGenre";
import getTrendingShow from "@/apis/getTrendingShow";
import ShowCarousel from "@/components/ShowCarousel";

export default function MoviesCatagories() {
  const { stopLoading } = useContext(LoadingContext);

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [actionMovies, setActionMovies] = useState(null);
  const [scifiMovies, setScifiMovies] = useState(null);
  const [romanticMovies, setRomanticMovies] = useState(null);
  const [horrorMovies, setHorrorMovies] = useState(null);

  const handleMovies = async () => {
    const res1 = await getTrendingShow("movie", 1);
    if (res1.success) {
      setTrendingMovies(res1.data.results);
    }

    const res2 = await getShowByGenre("movie", 28, 1);
    if (res2.success) {
      setActionMovies(res2.data.results);
    }

    const res3 = await getShowByGenre("movie", 878, 1);
    if (res3.success) {
      setScifiMovies(res3.data.results);
    }

    const res4 = await getShowByGenre("movie", 10749, 1);
    if (res4.success) {
      setRomanticMovies(res4.data.results);
    }

    const res5 = await getShowByGenre("movie", 27, 1);
    if (res5.success) {
      setHorrorMovies(res5.data.results);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleMovies();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <ShowCarousel
        heading="Top 20 Today's Trending Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        bgImage="bg-[url(/images/pattern.svg)]"
        bgPosition="bg-bottom"
        shows={trendingMovies}
        showType="movie"
      />
      <ShowCarousel
        heading="Top 20 Action Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-blue-900/60"
        bgImage="bg-[url(/images/action_cover_image.jpg)]"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
        shows={actionMovies}
        showType="movie"
      />
      <ShowCarousel
        heading="Top 20 Sci-Fi Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        shows={scifiMovies}
        showType="movie"
      />
      <ShowCarousel
        heading="Top 20 Romantic Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-sky-900/60"
        bgImage="bg-[url(/images/romantic_cover_image.jpg)]"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
        shows={romanticMovies}
        showType="movie"
      />
      <ShowCarousel
        heading="Top 20 Horror Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        shows={horrorMovies}
        showType="movie"
      />
    </>
  );
}
