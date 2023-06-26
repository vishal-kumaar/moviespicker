import React from "react";
import formatDate from "../../../utils/formatDate";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";

export default function SeasonsList({ seasons, desc }) {
  if (!seasons) {
    return null;
  }
  return (
    <div className="flex flex-col gap-6">
      {seasons.length > 0 ? (
        seasons.map((season, index) => (
          <div
            key={index}
            className="flex items-start gap-5 border border-black/10 rounded-2xl shadow-xl pr-2"
          >
            <img
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w220_and_h330_face${season.poster_path}`
                  : imagePlaceholder
              }
              alt=""
              className="w-32 h-48 rounded-l-2xl"
            />
            <div className="my-3">
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {season.name}
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                {season.air_date && formatDate(season.air_date)}
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                Season {season.season_number} | {season.episode_count} Episodes
              </p>
              <p className={`${desc === "short" && "line-clamp-4"} max-w-full text-black font-medium font-poppins text-sm mt-2`}>
                {season.overview
                  ? season.overview
                  : "This season don't have any description"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>We don't find any seasons related to this series.</div>
      )}
    </div>
  );
}
