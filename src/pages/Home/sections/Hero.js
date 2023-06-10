import React from "react";

export default function Hero() {
  return (
    <main className="bg-coverImage h-full w-full bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="bg-black/60 h-full w-full px-10 sm:px-14 md:px-20 lg:px-32 py-28 md:py-40">
        <div>
          <h1 className="text-white text-7xl font-bold font-signika mb-3">
            Hi! Welcome,
          </h1>
          <p className="text-white text-2xl font-poppins">
            Discover, Delight, and Dive into a World of Cinematic Brilliance -
            Where Every Movie Choice Becomes an Unforgettable Journey of
            Entertainment and Emotion.
          </p>
        </div>
        <div className="bg-white flex rounded-3xl mt-12">
          <input
            type="text"
            placeholder="Search for movies..."
            className="bg-transparent py-3.5 md:py-2.5 px-5 placeholder:font-firasans rounded-3xl outline-none w-full"
          />
          <button className="rounded-3xl font-signika px-8 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
