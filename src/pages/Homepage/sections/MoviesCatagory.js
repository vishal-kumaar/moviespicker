import React from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";

export default function MoviesCatagory() {
  return (
    <>
      <MoviesCarousel
        heading="Top 20 Popular Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        bgImage="bg-pattern"
        bgPosition="bg-bottom"
      />
      <MoviesCarousel
        heading="Top 20 Action Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-blue-900/60"
        bgImage="bg-actionImage"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
      />
      <MoviesCarousel
        heading="Top 20 Sci-Fi Movies"
        textColor="text-black"
        textBefore="before:bg-black"
      />
      <MoviesCarousel
        heading="Top 20 Romantic Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-sky-900/60"
        bgImage="bg-romantic"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
      />
      <MoviesCarousel
        heading="Top 20 Horror Movies"
        textColor="text-black"
        textBefore="before:bg-black"
      />
    </>
  );
}
