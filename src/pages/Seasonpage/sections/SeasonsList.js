import React from "react";
import formatDate from "../../../utils/formatDate";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";

export default function SeasonsList({ seasons }) {
  return (
    <section className="px-6 md:px-16 mb-20">
    <h1 className="font-bold font-signika text-3xl mt-16">All Seasons</h1>
    <hr className="border mt-2 border-black/10" />
    <div className="flex flex-col gap-6 mt-12">
      {seasons &&
        seasons.map((season, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl"
          >
            <img
              src={
                season.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${season.poster_path}`
                  : imagePlaceholder
              }
              alt=""
              className="w-32 h-48 rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {season.name}
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                {season.air_date && formatDate(season.air_date)}
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                Season {season.season_number} | {season.episode_count} Episodes
              </p>
              <p className="line-clamp-2 max-w-full text-black font-medium font-poppins text-sm mt-2">
                {season.overview
                  ? season.overview
                  : "This season don't have any description"}
              </p>
            </div>
          </div>
        ))}
    </div>
    </section>
  );
}
