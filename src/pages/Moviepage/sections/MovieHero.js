import React, { useContext } from "react";
import rattingIcon from "../../../assets/icons/ratting.svg";
import playIcon from "../../../assets/icons/play.svg";
import videoPlayerContext from "../../../states/videoplayer/VideoPlayerContext";

export default function MovieHero() {
  const {toggleVideoPlayer} = useContext(videoPlayerContext);
  return (
    <main className="h-full w-full text-white bg-[url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/h8gHn0OzBoaefsYseUByqsmEDMY.jpg)] bg-fixed bg-cover bg-center">
      <div
        className="h-full w-full flex flex-col lg:flex-row gap-8 items-center justify-center py-12 px-5 md:px-14"
        style={{
          background:
            "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)",
        }}
      >
        <img
          src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
          alt=""
          className="w-80 h-[30rem] rounded-xl"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold font-signika text-center lg:text-left">
            John Wick: Chapter 4{" "}
            <span className="font-medium font-poppins text-2xl sm:text-3xl text-gray-300">
              (2023)
            </span>
          </h1>
          <p className="font-firasans text-base text-gray-100 mb-4 text-center lg:text-left">
            <span>03/24/2023 (US)</span>
            <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
              <span className="cursor-pointer">Action</span>, <span className="cursor-pointer">Thriller</span>, <span className="cursor-pointer">Crime</span>
            </span>
            <span className="relative ml-5 before:absolute before:top-[7.8px] before:-left-3 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
              2h 50m
            </span>
          </p>
          <div className="flex items-center gap-10 font-firasans font-extralight text-base tracking-wide mb-4 w-fit mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 mt-1">
              <img src={rattingIcon} alt="" className="w-4 mb-[4px]" />
              <p className="">7.9/10</p>
            </div>
            <button className="flex items-center gap-1.5" onClick={toggleVideoPlayer}>
              <img src={playIcon} alt="" className="invert w-3 mb-[2px]" />
              <p className="">Play Trailer</p>
            </button>
          </div>
          <p className="text-[#BDB5B0] italic font-roboto text-base tracking-wide font-medium mb-4">
            No way back, one way out.
          </p>
          <div>
            <h2 className="font-roboto tracking-wide font-bold text-lg mb-1">
              Overview
            </h2>
            <p className="font-poppins text-sm line-clamp-3 mb-4">
              With the price on his head ever increasing, John Wick uncovers a
              path to defeating The High Table. But before he can earn his
              freedom, Wick must face off against a new enemy with powerful
              alliances across the globe and forces that turn old friends into
              foes.
            </p>
          </div>
          <div>
            <p className="font-signika font-bold text-lg">
              <span>Directed by: </span>
              <span className="font-roboto tracking-wide font-medium cursor-pointer ml-1">
                Chad Stahelski
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
