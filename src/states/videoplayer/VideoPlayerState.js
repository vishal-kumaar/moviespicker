import React, { useState } from 'react'
import VideoPlayerContext from './VideoPlayerContext';

export default function VideoPlayerState(props) {
    const [videoPlayer, setVideoPlayer] = useState(false);
    const toggleVideoPlayer = () => {
        if (videoPlayer) {
            setVideoPlayer(false);
        }
        else{
            setVideoPlayer(true)
        }
    }
  return (
    <VideoPlayerContext.Provider value={{videoPlayer, toggleVideoPlayer}}>
        {props.children}
    </VideoPlayerContext.Provider>
  )
}
