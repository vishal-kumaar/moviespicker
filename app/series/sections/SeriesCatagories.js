"use client";

import React, { useEffect, useState, useContext } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getTrendingShow from "@/apis/getTrendingShow";
import getShowByGenre from "@/apis/getShowByGenre";
import ShowCarousel from "@/components/ShowCarousel";

export default function SeriesCatagories() {
  const { stopLoading } = useContext(LoadingContext);

  const [trendingSeries, setTrendingSeries] = useState(null);
  const [actionSeries, setActionSeries] = useState(null);
  const [scifiSeries, setScifiSeries] = useState(null);
  const [romanticSeries, setRomanticSeries] = useState(null);
  const [realitySeries, setRealitySeries] = useState(null);

  const handleSeries = async () => {
    const res1 = await getTrendingShow("series", 1);
    if (res1.success) {
      setTrendingSeries(res1.data.results);
    }

    const res2 = await getShowByGenre("series", 10759, 1);
    if (res2.success) {
      setActionSeries(res2.data.results);
    }

    const res3 = await getShowByGenre("series", 10765, 1);
    if (res3.success) {
      setScifiSeries(res3.data.results);
    }

    const res4 = await getShowByGenre("series", 10749, 1);
    if (res4.success) {
      setRomanticSeries(res4.data.results);
    }

    const res5 = await getShowByGenre("series", 10764, 1);
    if (res5.success) {
      setRealitySeries(res5.data.results);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleSeries();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <ShowCarousel
        heading="Top 20 Today's Trending TV Series"
        textColor="text-black"
        textBefore="before:bg-black"
        bgImage="bg-[url(/images/pattern.svg)]"
        bgPosition="bg-bottom"
        shows={trendingSeries}
        showType="series"
      />
      <ShowCarousel
        heading="Top 20 Action TV Series"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-blue-900/60"
        bgImage="bg-[url(/images/action_series_cover_image.jpg)]"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
        shows={actionSeries}
        showType="series"
      />
      <ShowCarousel
        heading="Top 20 Sci-Fi TV Series"
        textColor="text-black"
        textBefore="before:bg-black"
        shows={scifiSeries}
        showType="series"
      />
      <ShowCarousel
        heading="Top 20 Romantic TV Series"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-sky-900/60"
        bgImage="bg-[url(/images/romantic_series_cover_image.jpg)]"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
        shows={romanticSeries}
        showType="series"
      />
      <ShowCarousel
        heading="Top 20 Reality TV Series"
        textColor="text-black"
        textBefore="before:bg-black"
        shows={realitySeries}
        showType="series"
      />
    </>
  );
}
