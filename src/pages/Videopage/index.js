import React from "react";
import Tab from "./sections/Tab";
import MovieHeader from "../../components/MovieHeader";
import VideoList from "./sections/VideoList";

export default function Videopage() {
  return (
    <>
      <MovieHeader />
      <Tab />
      <VideoList />
    </>
  );
}
