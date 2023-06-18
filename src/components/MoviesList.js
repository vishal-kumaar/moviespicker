import React from "react";
import rattingIcon from "../assets/icons/ratting.svg";
import forwardIcon from "../assets/icons/forward.svg";
import formatDate from "../utils/formatDate";
import imagePlaceholder from "../assets/images/image_placeholder.svg";
import getGenresFromId from "../utils/getGenresFromId";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoResultFound from "./NoResultFound";

export default function MoviesList({ data }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const query = searchParams.get("query");

  if (!query) {
    return (
      <div className="text-center font-firasans text-gray-600 text-lg py-16">
        Search any movie to show results here.
      </div>
    );
  }

  if (!data || !data.results.length) {
    return <NoResultFound />;
  }

  const movies = data.results;

  const handlePage = (move) => {
    if (move === "prev") {
      searchParams.set("page", Number(page) - 1);
    } else if (move === "next") {
      searchParams.set("page", Number(page) + 1);
    }
    setSearchParams(searchParams);
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="flex flex-col gap-6 mt-12">
      {movies &&
        movies.map((movie, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                  : imagePlaceholder
              }
              alt=""
              className="w-32 h-48 rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {movie.title}
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                {movie.release_date && formatDate(movie.release_date)}
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold">Genre: </span>
                {movie.genre_ids.length > 0
                  ? getGenresFromId(movie.genre_ids)
                  : "Unknown"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
                <p className="font-firasans font-extralight text-sm text-black tracking-wide">
                  {movie.vote_average
                    ? `${movie.vote_average.toFixed(1)}/10`
                    : "N/A"}
                </p>
              </div>
              <p className="line-clamp-2 max-w-full text-black font-medium font-poppins text-sm mt-2">
                {movie.overview
                  ? movie.overview
                  : "This movie don't have any description"}
              </p>
            </div>
          </div>
        ))}
      <div className="flex items-center mt-10 mb-16">
        <button
          className={`rounded-3xl py-2 shadow-md font-signika gap-2 flex items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white ${
            Number(page) === 1 ? "invisible" : "visible"
          }`}
          onClick={() => handlePage("prev")}
        >
          <img src={forwardIcon} alt="" className="invert w-2.5 rotate-180" />
          <p>Previous</p>
        </button>
        <button
          className={`rounded-3xl py-2 shadow-md font-signika flex gap-2 items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white w-fit ml-auto ${
            data.total_pages === Number(page) ? "invisible" : "visible"
          }`}
          onClick={() => handlePage("next")}
        >
          <p>Next</p>
          <img src={forwardIcon} alt="" className="invert w-2.5" />
        </button>
      </div>
    </div>
  );
}
