import React, { useContext, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import VideoPlayerContext from "../states/videoplayer/VideoPlayerContext";

const YoutubePlayer = ({ videoId, id }) => {
  const { videoPlayers, toggleVideoPlayer, addVideoPlayer, removeVideoPlayer } =
    useContext(VideoPlayerContext);

  const playerRef = useRef(null);

  const onReady = (event) => {
    const player = event.target;
    playerRef.current = player;
  };

  const stopVideo = () => {
    if (playerRef.current) {
      playerRef.current.stopVideo();
    }
  };

  useEffect(() => {
    addVideoPlayer(id);
    return () => removeVideoPlayer(id);
  }, 
  // eslint-disable-next-line
  [id]);

  const player = videoPlayers.find((player) => player.id === id);

  if (!player) {
    return null;
  }

  const { isPlaying } = player;

  return (
    <>
      {isPlaying ? (
        <div
          className={`bg-transparent/60 flex fixed z-10 top-0 left-0 w-full h-screen`}
        >
          <div className="m-auto relative rounded-lg h-[280px] w-[90vw] sm:h-[400px] md:h-[450px] md:w-[80vw] lg:h-[500px] lg:w-[70vw]">
            <p
              className="text-white absolute right-2 -top-1 font-firasans text-4xl cursor-pointer hover:text-white/70 z-50"
              onClick={() => {
                stopVideo();
                toggleVideoPlayer(id);
              }}
            >
              ×
            </p>
            <div className="youtube-player">
              <YouTube videoId={videoId} onReady={onReady} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default YoutubePlayer;
