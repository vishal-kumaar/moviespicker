import React from "react";
import rattingIcon from "../assets/icons/ratting.svg";
import formatDate from "../utils/formatDate";
import imagePlaceholder from "../assets/images/image_placeholder.svg";
import getGenresFromId from "../utils/getGenresFromId";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoResultFound from "./NoResultFound";
import Pagination from "./Pagination";

export default function MoviesList({ data }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!query) {
    return (
      <div className="text-center font-firasans text-gray-600 text-lg py-16">
        Search for any movie to see results here.
      </div>
    );
  }

  if (!data || !data.results.length) {
    return <NoResultFound query={query} queryType="movies" />;
  }

  const movies = data.results;

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
        <Pagination page={page} totalPages={data.total_pages} />
    </div>
  );
}
