import React from "react";
import addCommasToNumber from "../../../utils/addCommasToNumber";
import getLanguageByCode from "../../../utils/getLanguageByCode";

export default function MovieInfo({ movie }) {
  return (
    <section className="px-6 mb-10 lg:mb-4 lg:px-0 w-52 flex flex-col gap-2">
      <hr />
      <div>
        <h1 className="font-firasans font-bold text-sm">Status</h1>
        <p className="font-firasans text-sm">
          {movie.status ? movie.status : "Unknown"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Original Language</h1>
        <p className="font-firasans text-sm">
          {getLanguageByCode(movie.original_language)}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Budget</h1>
        <p className="font-firasans text-sm">
          {movie.budget ? `$${addCommasToNumber(movie.budget)}` : "Unknown"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Revenue</h1>
        <p className="font-firasans text-sm">
          {movie.revenue ? `$${addCommasToNumber(movie.revenue)}` : "Unknown"}
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
          "Unknown"
        )}
      </div>
      <hr />
    </section>
  );
}
