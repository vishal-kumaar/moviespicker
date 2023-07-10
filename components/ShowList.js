"use client";

import React from "react";
import Pagination from "./Pagination";
import formatDate from "@/utils/formatDate";
import getGenresFromId from "@/utils/getGenresFromId";
import NoResultFound from "./NoResultFound";
import abbreviateNumber from "@/utils/abbreviateNumber";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ShowList({ showType, data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!data || (data.results && data.results.length === 0)) {
    return <NoResultFound query={query} queryType={showType} />;
  }

  const shows = data.results;

  const handleOnClick = (show, showType) => {
    if (showType === "series") {
      router.push(`/series/${show.id}-${show.name.replaceAll(" ", "-")}`);
    } else {
      router.push(`/movie/${show.id}-${show.title.replaceAll(" ", "-")}`);
    }
  };

  return (
    <section
      className={`flex flex-col gap-6 mt-12 ${
        data.length === 0 ? "h-[281.5rem]" : ""
      }`}>
      {shows &&
        shows.map((show, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => {
              handleOnClick(show, showType);
            }}>
            <Image
              height={330}
              width={220}
              src={
                show.poster_path
                  ? `https://image.tmdb.org/t/p/w220_and_h330_face${show.poster_path}`
                  : "/images/image_placeholder.svg"
              }
              alt=""
              className="w-32 h-48 rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {showType === "series" ? show.name : show.title}
              </h2>
              <p className="font-roboto font-medium text-sm text-gray-400 mb-2">
                {showType === "series"
                  ? formatDate(show.first_air_date)
                  : formatDate(show.release_date)}
              </p>
              <p className="font-firasans font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold">Genre: </span>
                {show.genre_ids.length > 0
                  ? getGenresFromId(show.genre_ids)
                  : "Unknown"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Image
                  width={16}
                  height={16}
                  src="/icons/ratting.svg"
                  alt=""
                  className="w-4 mb-[4px]"
                />
                <p className="font-firasans font-extralight text-sm text-black tracking-wide">
                  {show.vote_average ? (
                    <>
                      {show.vote_average.toFixed(1)}/10
                      <span className="text-sm text-gray-500">
                        {" "}
                        ({abbreviateNumber(show.vote_count)})
                      </span>
                    </>
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>
              <p className="line-clamp-3 max-w-full text-black font-medium font-poppins text-sm mt-2">
                {show.overview
                  ? show.overview
                  : `This ${showType} don't have any description`}
              </p>
            </div>
          </div>
        ))}
      <Pagination page={page} totalPages={data.total_pages} />
    </section>
  );
}
