import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../utils";

export default function MovieHeader() {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-5 px-6 md:px-14 bg-black/80 text-white py-4 mx-auto md:mx-0">
      <img
        src="https://www.themoviedb.org/t/p/w58_and_h87_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
        alt="movie-poster"
      />
      <div>
        <h1 className="font-signika text-xl md:text-3xl">John Wick: Chapter 4 <span className="font-poppins text-lg md:text-2xl">(2023)</span></h1>
        <button
          onClick={() => {
            navigate("/movie/id");
            scrollToTop();
          }}
          className="font-poppins font-bold text-sm md:text-base mt-1 text-gray-300 hover:text-gray-400"
        >
          ← Back to main
        </button>
      </div>
    </section>
  );
}
