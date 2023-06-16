import React from "react";
import Tab from "../../components/Tab";
import MovieHeader from "../../components/MovieHeader";
import VideoList from "./sections/VideoList";
import NotFound from "../../components/NotFound";
import { useSearchParams } from "react-router-dom";

export default function Videopage() {
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("activeTab");

  const options = [
    {
      name: "Trailer",
      count: 2,
    },
    {
      name: "Teaser",
      count: 2,
    },
    {
      name: "Clips",
      count: 2,
    },
    {
      name: "Behind the Scenes",
      count: 2,
    },
    {
      name: "Bloopers",
      count: 2,
    },
    {
      name: "Featurettes",
      count: 2,
    },
  ];

  return (
    <>
      <MovieHeader />
      <Tab heading="Videos" options={options} />
      {options.some((option) => option.name === activeTab) || !activeTab ? (
        <VideoList />
      ) : (
        <NotFound />
      )}
    </>
  );
}
