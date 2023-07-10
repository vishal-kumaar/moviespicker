"use client";

import React, { useContext } from "react";
import VideoPlayerContext from "@/contexts/videoplayer/VideoPlayerContext";
import YoutubePlayer from "./YoutubePlayer";
import abbreviateNumber from "@/utils/abbreviateNumber";
import formatDate from "@/utils/formatDate";
import getTrailer from "@/utils/getTrailer";
import getDirectorName from "@/utils/getDirectorName";
import formatTime from "@/utils/formatTime";
import stringOfGenres from "@/utils/stringOfGenres";
import getCreatorsName from "@/utils/getCreatorsName";
import Image from "next/image";

export default function ShowHero({ showType, show }) {
  const { toggleVideoPlayer } = useContext(VideoPlayerContext);
  const videoId = show && show.videos && getTrailer(show.videos.results);
  return (
    <main>
      {
        <div
          className="h-full w-full text-white bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: show.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${show.backdrop_path}) `
              : "transparent",
          }}>
          {videoId && <YoutubePlayer videoId={videoId} id="trailer" />}
          <div
            className="h-full w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center py-12 px-6 md:px-14"
            style={{
              background:
                "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)",
            }}>
            <Image
              height={450}
              width={300}
              src={
                show.poster_path
                  ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${show.poster_path}`
                  : "/images/image_placeholder.svg"
              }
              alt="poster"
              className="w-80 h-[30rem] rounded-xl"
            />
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl font-bold font-signika text-center lg:text-left mt-0 lg:mt-10">
                {showType === "movie" ? show.title : show.name}
                <span className="font-medium font-poppins text-2xl sm:text-3xl text-gray-300">
                  {showType === "movie"
                    ? show.release_date &&
                      ` (${show.release_date.split("-")[0]})`
                    : show.first_air_date &&
                      ` (${show.first_air_date.split("-")[0]})`}
                </span>
              </h1>
              <p className="font-firasans text-base text-gray-100 mt-1 mb-4 text-center lg:text-left">
                <span>
                  {showType === "movie"
                    ? formatDate(show.release_date)
                    : formatDate(show.first_air_date)}
                </span>
                {show.genres && (
                  <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
                    {stringOfGenres(show.genres)}
                  </span>
                )}
                {show.runtime ? (
                  <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
                    {formatTime(show.runtime)}
                  </span>
                ) : (
                  ""
                )}
              </p>
              <div className="flex items-center gap-10 font-firasans font-extralight text-base tracking-wide mb-4 w-fit mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 mt-1">
                  <Image
                    height={16}
                    width={16}
                    src="/icons/ratting.svg"
                    alt=""
                    className="w-4 mb-[4px]"
                  />
                  <p className="text-base">
                    {show.vote_average ? (
                      <>
                        {show.vote_average.toFixed(1)}/10
                        <span className="text-gray-300">
                          {" "}
                          ({abbreviateNumber(show.vote_count)})
                        </span>
                      </>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
                {videoId && (
                  <button
                    className="flex items-center gap-1.5"
                    onClick={() => toggleVideoPlayer("trailer")}>
                    <Image
                      height={12}
                      width={12}
                      src="/icons/play.svg"
                      alt=""
                      className="invert w-3 mb-[2px]"
                    />
                    <p className="">Play Trailer</p>
                  </button>
                )}
              </div>
              {show.tagline && (
                <p className="text-[#BDB5B0] italic font-roboto text-base tracking-wide font-medium mb-4">
                  {show.tagline}
                </p>
              )}
              <div className="mb-3 font-roboto text-white">
                {show.number_of_seasons && `${show.number_of_seasons} Seasons`}
                {show.number_of_episodes &&
                  ` | ${show.number_of_episodes} Episodes`}
              </div>
              <div>
                <h2 className="font-roboto tracking-wide font-bold text-lg mb-1">
                  Overview
                </h2>
                <p className="font-poppins text-sm mb-4">
                  {show.overview ? show.overview : "N/A"}
                </p>
              </div>
              <div>
                {showType === "movie" ? (
                  <p className="font-signika font-bold text-lg">
                    <span>Directed by: </span>
                    <span className="font-roboto tracking-wide font-medium cursor-pointer ml-1">
                      {show.credits
                        ? getDirectorName(show.credits.crew)
                        : "N/A"}
                    </span>
                  </p>
                ) : (
                  <p className="font-signika font-bold text-lg">
                    <span>Created by: </span>
                    <span className="font-roboto tracking-wide font-medium cursor-pointer ml-1">
                      {show.created_by && show.created_by.length > 0
                        ? getCreatorsName(show.created_by)
                        : "N/A"}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  );
}
