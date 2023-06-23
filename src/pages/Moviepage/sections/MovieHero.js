import React, { useContext } from "react";
import rattingIcon from "../../../assets/icons/ratting.svg";
import playIcon from "../../../assets/icons/play.svg";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";
import videoPlayerContext from "../../../states/videoplayer/VideoPlayerContext";
import stringOfGenres from "../../../utils/stringOfGenres";
import formatTime from "../../../utils/formatTime";
import getDirectorName from "../../../utils/getDirectorName";
import getTrailer from "../../../utils/getTrailer";
import YoutubePlayer from "../../../components/YoutubePlayer";
import formatDate from "../../../utils/formatDate";

export default function MovieHero({ movie }) {
  const { toggleVideoPlayer } = useContext(videoPlayerContext);
  const videoId = getTrailer(movie.videos.results);
  return (
    <main
      className="h-full w-full text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}) `
          : "transparent",
      }}
    >
      {videoId && <YoutubePlayer videoId={videoId} id="trailer" />}
      <div
        className="h-full w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center py-12 px-5 md:px-14"
        style={{
          background:
            "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)",
        }}
      >
        <img
          src={
            movie.poster_path
              ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
              : imagePlaceholder
          }
          alt="poster"
          className="w-80 h-[30rem] rounded-xl"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold font-signika text-center lg:text-left mt-0 lg:mt-10">
            {movie.title}{" "}
            <span className="font-medium font-poppins text-2xl sm:text-3xl text-gray-300">
              {movie.release_date
                ? ` (${movie.release_date.split("-")[0]})`
                : ""}
            </span>
          </h1>
          <p className="font-firasans text-base text-gray-100 mt-1 mb-4 text-center lg:text-left">
            <span>
              {formatDate(movie.release_date)}
            </span>
            {movie.genres && (
              <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
                {stringOfGenres(movie.genres)}
              </span>
            )}
            {movie.runtime ? (
              <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
                {formatTime(movie.runtime)}
              </span>
            ) : (
              ""
            )}
          </p>
          <div className="flex items-center gap-10 font-firasans font-extralight text-base tracking-wide mb-4 w-fit mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 mt-1">
              <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
              <p className="">
                {movie.vote_average
                  ? `${movie.vote_average.toFixed(1)}/10`
                  : "N/A"}
              </p>
            </div>
            {videoId && (
              <button
                className="flex items-center gap-1.5"
                onClick={() => toggleVideoPlayer("trailer")}
              >
                <img src={playIcon} alt="" className="invert w-3 mb-[2px]" />
                <p className="">Play Trailer</p>
              </button>
            )}
          </div>
          {movie.tagline && (
            <p className="text-[#BDB5B0] italic font-roboto text-base tracking-wide font-medium mb-4">
              {movie.tagline}
            </p>
          )}
          <div>
            <h2 className="font-roboto tracking-wide font-bold text-lg mb-1">
              Overview
            </h2>
            <p className="font-poppins text-sm mb-4">
              {movie.overview ? movie.overview : "N/A"}
            </p>
          </div>
          <div>
            <p className="font-signika font-bold text-lg">
              <span>Directed by: </span>
              <span className="font-roboto tracking-wide font-medium cursor-pointer ml-1">
                {movie.credits ? getDirectorName(movie.credits.crew) : "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
