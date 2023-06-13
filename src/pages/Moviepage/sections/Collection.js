import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";

export default function Collection() {
  return (
    <MoviesCarousel
      heading="John Wick Collection"
      textColor="text-white"
      textBefore="before:bg-white"
      bgImage="bg-[url(https://image.tmdb.org/t/p/w1440_and_h320_multi_faces/fSwYa5q2xRkBoOOjueLpkLf3N1m.jpg)]"
      bgPosition="bg-center"
      bgSize="bg-cover"
      bgColor="bg-black/80"
      bgAttachment="bg-fixed"
    />
  );
}
