import React from "react";
import playIcon from "../../../assets/icons/play.svg";

export default function VideoCarousel() {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="px-4 md:px-14 mb-12">
      <h1 className="font-signika font-bold text-3xl text-black mb-4">Videos</h1>
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-10">
        {videos &&
          videos.map((video, index) => (
            <div
              key={index}
              className="bg-[url(https://i.ytimg.com/vi/yjRHZEUamCc/hqdefault.jpg)] flex-auto flex-shrink-0 flex-grow-0 h-60 w-96 bg-center bg-no-repeat bg-cover flex items-center justify-center"
            >
              <button className="bg-black/60 rounded-full h-14 w-14 hover:bg-black/60">
                <div className="=h-full w-full rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-200">
                  <img src={playIcon} alt="" className="invert w-4" />
                </div>
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
