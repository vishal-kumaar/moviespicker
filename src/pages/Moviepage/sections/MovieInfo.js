import React from "react";
import addCommasToNumber from "../../../utils/addCommasToNumber";
import getLanguageByCode from "../../../utils/getLanguageByCode";

export default function MovieInfo({ movie }) {
  return (
    <section className="px-6 mb-10 w-full lg:mb-4 md:px-14 xl:px-0 xl:w-52 flex flex-col gap-2">
      <hr />
      <div>
        <h1 className="font-firasans font-bold text-sm">Status</h1>
        <p className="font-firasans text-sm">
          {movie.status ? movie.status : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Original Language</h1>
        <p className="font-firasans text-sm">
          {movie.original_language
            ? getLanguageByCode(movie.original_language)
            : "Unknown"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Budget</h1>
        <p className="font-firasans text-sm">
          {movie.budget ? `$${addCommasToNumber(movie.budget)}` : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Revenue</h1>
        <p className="font-firasans text-sm">
          {movie.revenue ? `$${addCommasToNumber(movie.revenue)}` : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Website</h1>
        {movie.homepage ? (
          <a
            href={movie.homepage}
            target="_blank"
            rel="noreferrer"
            className="font-firsans text-sm line-clamp-1 text-blue-600 w-fit"
          >
            Click Here
          </a>
        ) : (
          "_"
        )}
      </div>
      <hr />
    </section>
  );
}
