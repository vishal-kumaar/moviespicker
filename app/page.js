"use client";

import React, { useContext, useEffect } from "react";
import MoviesCatagories from "./sections/MoviesCatagories";
import MoreButton from "@/components/MoreButton";
import Hero from "@/components/Hero";
import LoadingContext from "@/contexts/loading/LoadingContext";
import addSeo from "@/utils/addSeo";
import { moviesPage } from "@/utils/getSeo";

export default function Home() {
  const { startLoading } = useContext(LoadingContext);

  useEffect(() => {
    startLoading();
    addSeo("Movies | Movie Picker", moviesPage.description);
  }, 
  // eslint-disable-next-line
  []);
  return (
    <>
      <Hero tab="movie" bgImage="bg-[url(/images/cover_image.jpg)]" />
      <MoviesCatagories />
      <MoreButton tab="Movie" />
    </>
  );
}
