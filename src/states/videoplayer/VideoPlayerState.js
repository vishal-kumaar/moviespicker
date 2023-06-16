import React, { useState } from 'react';

import VideoPlayerContext from './VideoPlayerContext';

const VideoPlayerState = ({ children }) => {
  const [videoPlayers, setVideoPlayers] = useState([]);

  const toggleVideoPlayer = (playerId) => {
    setVideoPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, isPlaying: !player.isPlaying } : player
      )
    );
  };

  const addVideoPlayer = (playerId) => {
    setVideoPlayers((prevPlayers) => [...prevPlayers, { id: playerId, isPlaying: false }]);
  };

  const removeVideoPlayer = (playerId) => {
    setVideoPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId));
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        videoPlayers,
        toggleVideoPlayer,
        addVideoPlayer,
        removeVideoPlayer,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};

export default VideoPlayerState;