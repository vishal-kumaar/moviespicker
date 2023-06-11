import React from "react";
import SearchArea from "../../../components/SearchArea";

export default function Hero() {
  return (
    <main className="bg-coverImage h-full w-full bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="bg-black/60 h-full w-full px-10 sm:px-14 md:px-20 lg:px-32 py-28 md:py-40">
        <div>
          <h1 className="text-white text-7xl font-bold font-signika mb-3">
            Hi! Welcome,
          </h1>
          <p className="text-white text-xl font-poppins">
            Discover, Delight, and Dive into a World of Cinematic Brilliance -
            Where Every Movie Choice Becomes an Unforgettable Journey of
            Entertainment and Emotion.
          </p>
        </div>
        <SearchArea />
      </div>
    </main>
  );
}