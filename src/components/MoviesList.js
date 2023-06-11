import React from "react";
import rattingIcon from "../assets/icons/ratting.svg";

export default function MoviesList() {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="mb-20">
      {movies &&
        movies.map((movie, index) => (
          <div
            key={index}
            className="flex items-center gap-5 mt-8 border border-black/10 rounded-2xl shadow-xl"
          >
            <img
              src="https://www.themoviedb.org/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              alt=""
              className="w-32 rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                John Wick: Chapter 4
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                March 22, 2023
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold">Genre:</span> Action, Crime,
                Thriller
              </p>
              <div className="flex items-center gap-1 mt-1">
                <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
                <p className="font-firasans font-extralight text-sm text-black tracking-wide">
                  7.9/10
                </p>
              </div>
              <p className="line-clamp-2 max-w-full text-black font-medium font-poppins text-sm mt-2">
                Over many missions and against impossible odds, Dom Toretto and
                his family have outsmarted, out-nerved and outdriven every foe
                in their path. Now, they confront the most lethal opponent
                they've ever faced: A terrifying threat emerging from the
                shadows of the past who's fueled by blood revenge, and who is
                determined to shatter this family and destroy everything—and
                everyone—that Dom loves, forever.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
