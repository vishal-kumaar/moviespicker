"use client";

import React, { useContext } from "react";
import VideoPlayerContext from "@/contexts/videoplayer/VideoPlayerContext";
import YoutubePlayer from "./YoutubePlayer";
import formatDate from "@/utils/formatDate";
import Image from "next/image";

export default function VideoList({ videos }) {
  const { toggleVideoPlayer } = useContext(VideoPlayerContext);

  if (videos.length === 0) {
    return (
      <div className="text-center font-firasans text-lg py-20">
        Not found any video releted to this catagory.
      </div>
    );
  }

  return (
    <section className="px-4 md:px-14 my-12">
      <div className="max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <div key={index}>
            <YoutubePlayer videoId={video.key} id={video.id} />
            <div className="flex border shadow-md shadow-gray-400 rounded-lg mb-10 flex-col md:flex-row">
              <div
                className="w-[calc(100vw-40px)] h-[calc((100vw-40px)/1.79)] md:h-[197px] md:w-[720px] lg:w-[550px] bg-center bg-no-repeat bg-cover flex items-center justify-center rounded-l-md cursor-pointer"
                style={{
                  backgroundImage: video.key
                    ? `url(https://i.ytimg.com/vi/${video.key}/hqdefault.jpg)`
                    : "/images/image_placeholder.svg",
                }}
                onClick={() => toggleVideoPlayer(video.id)}>
                <button className="bg-black/60 rounded-full h-14 w-14 hover:bg-black/60">
                  <div className="h-full w-full rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-200">
                    <Image
                      height={16}
                      width={16}
                      src="/icons/play.svg"
                      alt=""
                      className="invert w-4"
                    />
                  </div>
                </button>
              </div>
              <div className="flex flex-col justify-between pt-2 w-full">
                <div>
                  <h1 className="font-signika font-bold text-lg pl-6 line-clamp-1">
                    {video.name}
                  </h1>
                  <p className="font-firasans text-sm text-black mb-4 text-left pl-6">
                    <span>{video.type}</span>
                    <span className="relative ml-5 before:absolute before:top-1.5 before:-left-3 before:w-[5px] before:h-[5px] before:bg-black before:rounded-full">
                      {formatDate(video.published_at)}
                    </span>
                  </p>
                </div>
                <div className="flex gap-1.5 items-center bg-gray-200 pl-6 py-2 border-t-2 border-gray-300">
                  <Image
                    height={24}
                    width={24}
                    src="/icons/youtube.svg"
                    alt="youtube-logo"
                    className="w-6"
                  />
                  <h1 className="font-signika text-black/50">{video.site}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
