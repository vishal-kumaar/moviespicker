import React from "react";
import rattingIcon from "../assets/icons/ratting.svg";
import formatDate from "../utils/formatDate";
import imagePlaceholder from "../assets/images/image_placeholder.svg";
import getGenresFromId from "../utils/getGenresFromId";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoResultFound from "./NoResultFound";
import Pagination from "./Pagination";

export default function SeriesList({ data, desc }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!data || (data.results && data.results.length === 0)) {
    return <NoResultFound query={query} queryType="series" />;
  }

  const seriesObj = data.results;

  return (
    <div className="flex flex-col gap-6 mt-12">
      {seriesObj &&
        seriesObj.map((series, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer pr-2"
            onClick={() =>
              navigate(
                `/series/${series.id}-${series.name.replaceAll(" ", "-")}`
              )
            }
          >
            <img
              src={
                series.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${series.poster_path}`
                  : imagePlaceholder
              }
              alt=""
              className="w-32 h-48 rounded-l-2xl"
            />
            <div className="my-3">
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {series.name}
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                {series.first_air_date && formatDate(series.first_air_date)}
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold">Genre: </span>
                {series.genre_ids.length > 0
                  ? getGenresFromId(series.genre_ids)
                  : "Unknown"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
                <p className="font-firasans font-extralight text-sm text-black tracking-wide">
                  {series.vote_average
                    ? `${series.vote_average.toFixed(1)}/10`
                    : "N/A"}
                </p>
              </div>
              <p
                className={`line-clamp-4 max-w-full text-black font-medium font-poppins text-sm mt-2`}
              >
                {series.overview
                  ? series.overview
                  : "This series don't have any description"}
              </p>
            </div>
          </div>
        ))}
      <Pagination page={page} totalPages={data.total_pages} />
    </div>
  );
}
