import React, { useContext } from "react";
import rattingIcon from "../../../assets/icons/ratting.svg";
import playIcon from "../../../assets/icons/play.svg";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";
import videoPlayerContext from "../../../states/videoplayer/VideoPlayerContext";
import stringOfGenres from "../../../utils/stringOfGenres";
import getTrailer from "../../../utils/getTrailer";
import YoutubePlayer from "../../../components/YoutubePlayer";
import formatDate from "../../../utils/formatDate";
import getCreatorsName from "../../../utils/getCreatorsName";

export default function SeriesHero({ series }) {
  const { toggleVideoPlayer } = useContext(videoPlayerContext);
  const videoId = getTrailer(series.videos.results);
  if (series.first_air_date) {
    console.log("yes");
  }
  return (
    <main
      className="h-full w-full text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: series.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${series.backdrop_path}) `
          : "transparent",
      }}
    >
      {videoId && <YoutubePlayer videoId={videoId} id="seriesTrailer" />}
      <div
        className="h-full w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center py-12 px-6 md:px-14"
        style={{
          background:
            "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)",
        }}
      >
        <img
          src={
            series.poster_path
              ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${series.poster_path}`
              : imagePlaceholder
          }
          alt="poster"
          className="w-80 h-[30rem] rounded-xl"
        />
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl font-bold font-signika text-center lg:text-left mt-0 lg:mt-10">
            {series.name}{" "}
            <span className="font-medium font-poppins text-2xl sm:text-3xl text-gray-300">
              {series.first_air_date
                ? ` (${series.first_air_date.split("-")[0]})`
                : ""}
            </span>
          </h1>
          <p className="font-firasans text-base text-gray-100 mt-2 mb-4 text-center lg:text-left">
            <span>
              {series.first_air_date
                ? formatDate(series.first_air_date)
                : "Unknown Release Date"}
            </span>
            {series.genres && (
              <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
                {stringOfGenres(series.genres)}
              </span>
            )}
          </p>
          <div className="flex items-center gap-10 font-firasans font-extralight text-base tracking-wide mb-4 w-fit mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 mt-1">
              <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
              <p className="">
                {series.vote_average
                  ? `${series.vote_average.toFixed(1)}/10`
                  : "N/A"}
              </p>
            </div>
            {videoId && (
              <button
                className="flex items-center gap-1.5"
                onClick={() => toggleVideoPlayer("seriesTrailer")}
              >
                <img src={playIcon} alt="" className="invert w-3 mb-[2px]" />
                <p className="">Play Trailer</p>
              </button>
            )}
          </div>
          {series.tagline && (
            <p className="text-[#BDB5B0] italic font-roboto text-base tracking-wide font-medium mb-4">
              {series.tagline}
            </p>
          )}
          <div className="mb-3 font-roboto text-white">
            {series.number_of_seasons && `${series.number_of_seasons} Seasons`}
            {series.number_of_episodes &&
              ` | ${series.number_of_episodes} Episodes`}
          </div>
          <div>
            <h2 className="font-roboto tracking-wide font-bold text-lg mb-1">
              Overview
            </h2>
            <p className="font-poppins text-sm mb-4">
              {series.overview ? series.overview : "N/A"}
            </p>
          </div>
          <div>
            <p className="font-signika font-bold text-lg">
              <span>Created by: </span>
              <span className="font-roboto tracking-wide font-medium cursor-pointer ml-1">
                {series.created_by.length > 0
                  ? getCreatorsName(series.created_by)
                  : "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
