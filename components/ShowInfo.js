import React from "react";
import addCommasToNumber from "@/utils/addCommasToNumber";
import getLanguageByCode from "@/utils/getLanguageByCode";
import Image from "next/image";

export default function ShowInfo({ showType, show }) {
  return (
    <section className="px-6 mb-10 w-full lg:mb-4 md:px-14 lg:px-4 xl:w-64 flex flex-col gap-2">
      <hr />
      <div>
        <h1 className="font-firasans font-bold text-sm">Status</h1>
        <p className="font-firasans text-sm">
          {show.status ? show.status : "_"}
        </p>
      </div>
      <hr />
      <div>
        <h1 className="font-signika text-sm">Original Language</h1>
        <p className="font-firasans text-sm">
          {show.original_language
            ? getLanguageByCode(show.original_language)
            : "Unknown"}
        </p>
      </div>
      <hr />
      {showType === "movie" && (
        <>
          <div>
            <h1 className="font-signika text-sm">Budget</h1>
            <p className="font-firasans text-sm">
              {show.budget ? `$${addCommasToNumber(show.budget)}` : "_"}
            </p>
          </div>
          <hr />
          <div>
            <h1 className="font-signika text-sm">Revenue</h1>
            <p className="font-firasans text-sm">
              {show.revenue ? `$${addCommasToNumber(show.revenue)}` : "_"}
            </p>
          </div>
        </>
      )}
      {showType === "series" && (
        <>
          <div>
            <h1 className="font-signika text-sm">Type</h1>
            <p className="font-firasans text-sm">
              {show.type ? show.type : "_"}
            </p>
          </div>
          <hr />
          <div>
            <h1 className="font-signika text-sm">Network</h1>
            {show.networks && show.networks.length > 0 ? (
              <Image
                height={30}
                width={30}
                src={`https://image.tmdb.org/t/p/h30${show.networks[0].logo_path}`}
                alt={show.networks[0].name}
                className="h-4"
              />
            ) : (
              "_"
            )}
          </div>
        </>
      )}
      <div>
        <h1 className="font-signika text-sm">Website</h1>
        {show.homepage ? (
          <a
            href={show.homepage}
            target="_blank"
            rel="noreferrer"
            className="font-firsans text-sm line-clamp-1 text-blue-600 w-fit">
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
