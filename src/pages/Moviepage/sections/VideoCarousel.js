import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../utils";
import playIcon from "../../../assets/icons/play.svg";
import nextIcon from "../../../assets/icons/next.svg";

export default function VideoCarousel() {
  const navigate = useNavigate();
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="pl-4 md:pl-14 mb-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-signika font-bold text-3xl text-black">
          Videos
        </h1>
        <button onClick={() => {
          navigate("/movie/:id/videos");
          scrollToTop();
        }} className="mr-4 md:mr-14 text-sm font-bold text-blue-600 font-roboto">View All Videos</button>
      </div>
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-10 items-center">
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
        <img
          src={nextIcon}
          alt=""
          className="w-10 h-fit cursor-pointer mr-4"
          onClick={() => {
            navigate("/movie/id/videos");
            scrollToTop();
          }}
        />
      </div>
    </section>
  );
}
