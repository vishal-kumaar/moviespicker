import React from "react";
import nextIcon from "../../../assets/icons/next.svg";

export default function RomanticMovies() {
  const movies = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="mb-16 bg-romantic bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="pt-16 bg-sky-900/60">
        <h1 className="relative text-white font-signika text-3xl px-12 before:absolute before:w-16 before:h-1.5 before:bg-white before:-top-3 before:left-12">
          Romantic Movies
        </h1>
        <div className="mt-6 pb-10 flex flex-nowrap overflow-x-auto gap-6 px-12">
          {movies &&
            movies.map((movie) => (
              <div className="flex-grow-0 flex-shrink-0 flex-auto cursor-pointer">
                <div className="relative">
                  <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="" className="w-44 h-60 rounded-xl" />
                  <div className="bg-black w-fit p-px rounded-[50%] absolute -bottom-4 left-3">
                    <div
                      className="flex justify-center items-center w-9 h-9 rounded-[50%] text-white text-xs font-bold"
                      style={{
                        background:
                          "radial-gradient(closest-side, black 79%, transparent 80% 100%), conic-gradient(rgb(0,255,0, 1) 75%, rgba(0, 255, 0, 0.5) 0)",
                      }}
                    >
                      80 <sup className="mt-1.5">%</sup>
                      <progress
                        value="75"
                        min="0"
                        max="100"
                        className="invisible h-0 w-0 bg-transparent"
                      ></progress>
                    </div>
                  </div>
                </div>
                <h1 className="font-signika text-base mt-6 text-white">
                  John Wick: Chapter 4
                </h1>
                <p className="font-poppins text-sm text-white">24 March 2023</p>
              </div>
            ))}
            <img src={nextIcon} alt="" className="w-10 mb-16 -mr-5 cursor-pointer invert" />
        </div>
      </div>
    </section>
  );
}
