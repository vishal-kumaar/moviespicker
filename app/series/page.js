"use client";

import React, { useContext, useEffect } from "react";
import Hero from "@/components/Hero";
import SeriesCatagories from "./sections/SeriesCatagories";
import MoreButton from "@/components/MoreButton";
import LoadingContext from "@/contexts/loading/LoadingContext";
import addSeo from "@/utils/addSeo";
import Series from "./[seriesId]/page";

export default function SeriesPage() {
  const {startLoading} = useContext(LoadingContext);

  useEffect(() => {
    startLoading();
    addSeo(`Tv Series | Movies Picker`, Series.description);

  }, 
  // eslint-disable-next-line
  [])
  return (
    <>
      <Hero tab="Series" bgImage="bg-[url(/images/tv_shows_cover_image.jpg)]" />
      <SeriesCatagories />
      <MoreButton tab="Series" />
    </>
  );
}
