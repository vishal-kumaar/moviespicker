import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import playIcon from "../assets/icons/play.svg";
import nextIcon from "../assets/icons/next.svg";
import VideoPlayerContext from "../states/videoplayer/VideoPlayerContext";
import YoutubePlayer from "./YoutubePlayer";

export default function VideoCarousel({ videos, type }) {
  const { toggleVideoPlayer } = useContext(VideoPlayerContext);
  const navigate = useNavigate();

  let id = useParams();
  if (type === "movie") {
    id = id.movieId;
  } else if (type === "tv") {
    id = id.seriesId;
    type = "series";
  }

  const topVideos = videos.length > 10 ? videos.slice(0, 10) : videos;

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4 px-6 md:px-14">
        <h1 className="font-signika font-bold text-3xl text-black">Videos</h1>
        <button
          onClick={() => navigate(`/${type}/${id}/videos`)}
          className="mr-4 md:mr-14 text-sm font-bold text-blue-600 font-roboto"
        >
          View All Videos
        </button>
      </div>
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-10 items-center px-6 md:px-14">
        {topVideos.map((video, index) => (
          <div key={index}>
            <YoutubePlayer videoId={video.key} id={video.id} />
            <div
              className="bg-[url(https://i.ytimg.com/vi/yjRHZEUamCc/hqdefault.jpg)] flex-auto flex-shrink-0 flex-grow-0 w-[calc(100vw-60px)] h-[calc((100vw-60px)/1.79)] sm:h-[215px] sm:w-[384px] bg-center bg-no-repeat bg-cover flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${video.key}/hqdefault.jpg)`,
              }}
              onClick={() => toggleVideoPlayer(video.id)}
            >
              <button className="bg-black/60 rounded-full h-14 w-14 hover:bg-black/60">
                <div className="=h-full w-full rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-200">
                  <img src={playIcon} alt="play" className="invert w-4" />
                </div>
              </button>
            </div>
          </div>
        ))}
        {videos.length > 10 && (
          <img
            src={nextIcon}
            alt="next"
            className="w-10 h-fit cursor-pointer mr-4"
            onClick={() => navigate(`/${type}/${id}/videos`)}
          />
        )}
      </div>
    </section>
  );
}
