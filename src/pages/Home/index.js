import React from "react";
import Hero from "./sections/Hero";
import PopularMovies from "./sections/PopularMovies";
import ActionMovies from "./sections/ActionMovie";
import SciFiMovies from "./sections/SciFiMovies";
import RomanticMovies from "./sections/RomanticMovies";
import moreIcon from "../../assets/icons/more.svg";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularMovies />
      <ActionMovies />
      <SciFiMovies />
      <RomanticMovies />
      <div className="mx-auto w-fit mb-10">
        <button className="text-[#ff8478] hover:bg-[#FFF0EF] font-bold font-poppins rounded-2xl px-6 py-1 flex flex-col items-center">
          <p className="text-base">More movies</p>
          <img src={moreIcon} alt="" className="w-5" />
        </button>
      </div>
    </>
  );
}
