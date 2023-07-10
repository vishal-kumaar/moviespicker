"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function CastCarousel({ castFor, casts }) {
  const router = useRouter();
  const param = useParams();
  let id;

  if (castFor === "movie") {
    id = param.movieId;
  } else {
    id = param.seriesId;
  }

  if (!casts) {
    return null;
  }

  let topCasts = casts.length > 10 ? casts.slice(0, 10) : casts;

  const handleOnClick = () => {
    if (castFor === "movie") {
      router.push(`/movie/${id}/cast`);
    } else {
      router.push(`/series/${id}/cast`);
    }
  };

  return (
    <section className="my-10 ">
      <h1 className="font-signika font-bold text-3xl text-black mb-4 px-6 md:px-14">
        Cast
      </h1>
      <div className="flex items-center flex-nowrap overflow-x-auto gap-6 pb-10 w-full px-6 md:pl-14 md:pr-4">
        {topCasts.map((cast, index) => (
          <div
            key={index}
            className="border cursor-pointer flex-none border-black/20 shadow-xl rounded-lg max-w-[9.8rem]"
            onClick={() => {
              router.push(
                `/person/${cast.id}-${cast.name.replaceAll(" ", "-")}`
              );
            }}>
            <Image
              height={138}
              width={175}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`
                  : "/images/image_placeholder.svg"
              }
              alt=""
              className="rounded-t-lg h-44 w-[9.8rem]"
            />
            <div className="px-2 pt-2 pb-4">
              <p className="font-signika text-black text-base line-clamp-1">
                {cast.name}
              </p>
              <p className="font-roboto tracking-wide text-black text-[13px] -mt-[2px] line-clamp-1">
                {castFor === "movie"
                  ? cast.character
                  : cast.roles.length > 0 && cast.roles[0].character}
              </p>
            </div>
          </div>
        ))}
        {casts.length > 10 && (
          <Image
            width={40}
            height={40}
            src="/icons/next.svg"
            alt="next"
            className="w-10 h-fit cursor-pointer"
            onClick={handleOnClick}
          />
        )}
      </div>
      <button
        className="mt-5 font-firasans font-bold px-6 md:px-14"
        onClick={handleOnClick}>
        Full Cast & Crews →
      </button>
    </section>
  );
}
