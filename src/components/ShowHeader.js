import React from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../assets/images/image_placeholder.svg";

export default function ShowHeader({ show, type }) {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-5 px-6 md:px-14 bg-black/80 text-white py-4 mx-auto md:mx-0">
      <img
        src={
          show.poster_path
            ? `https://www.themoviedb.org/t/p/w58_and_h87_face${show.poster_path}`
            : imagePlaceholder
        }
        alt="show-poster"
        className="w-[58px] h-[87px]"
      />
      <div>
        <h1 className="font-signika text-xl md:text-3xl">
          {type === "series" ? show.name : show.title}
          <span className="font-poppins text-lg md:text-2xl">
            {type === "movie"
              ? show.release_date
                ? ` (${show.release_date.split("-")[0]})`
                : ""
              : show.first_air_date
              ? ` (${show.first_air_date.split("-")[0]})`
              : ""}
          </span>
        </h1>
        <button
          onClick={() =>
            navigate(
              `/${type}/${show.id}-${
                type === "series"
                  ? show.name.replaceAll(" ", "-")
                  : show.title.replaceAll(" ", "-")
              }`
            )
          }
          className="font-poppins font-bold text-sm md:text-base mt-1 text-gray-300 hover:text-gray-400"
        >
          ← Back to main
        </button>
      </div>
    </section>
  );
}
