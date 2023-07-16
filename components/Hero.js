import SearchArea from "@/components/SearchArea";
import React from "react";

export default function Hero({ bgImage, tab }) {
  return (
    <main
      className={`${bgImage} h-[40rem] w-full bg-fixed bg-no-repeat bg-cover mb-6`}>
      <div className="bg-black/60 h-[40rem] w-full px-8 sm:px-14 md:px-20 lg:px-32 py-28 md:py-40">
        <div>
          <h1 className="text-white text-7xl font-bold font-signika mb-3">
            Hi! Welcome,
          </h1>
          <p className="text-white text-xl font-poppins">
            Discover, Delight, and Dive into a World of Cinematic Brilliance -
            Where Every Movie/Series Choice Becomes an Unforgettable Journey of
            Entertainment and Emotion.
          </p>
        </div>
        <SearchArea
          isRedirect={true}
          placeholder={`Search for ${tab.toLowerCase()}...`}
          tab={tab}
        />
      </div>
    </main>
  );
}
