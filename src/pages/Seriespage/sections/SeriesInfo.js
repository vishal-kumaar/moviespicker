import React from "react";
import getLanguageByCode from "../../../utils/getLanguageByCode";

export default function SeriesInfo({ series }) {
  return (
    <section className="px-6 mb-10 w-full lg:mb-4 md:px-14 xl:px-4 xl:w-64 flex flex-col gap-2">
      <hr />
      <div>
        <h1 className="font-firasans font-bold text-sm">Status</h1>
        <p className="font-firasans text-sm">
          {series.status ? series.status : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Original Language</h1>
        <p className="font-firasans text-sm">
          {series.original_language
            ? getLanguageByCode(series.original_language)
            : "Unknown"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Type</h1>
        <p className="font-firasans text-sm">
          {series.type ? series.type : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Network</h1>
        {
            series.networks.length > 0 ? <img src={`https://image.tmdb.org/t/p/h30${series.networks[0].logo_path}`} alt={series.networks[0].name} className="h-4" /> : "_"
        }
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Website</h1>
        {series.homepage ? (
          <a
            href={series.homepage}
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
