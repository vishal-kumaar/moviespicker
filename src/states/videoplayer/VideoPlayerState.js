import React, { useEffect, useState } from 'react'
import VideoPlayerContext from './VideoPlayerContext';
import { useLocation } from 'react-router-dom';

export default function VideoPlayerState(props) {
    const location = useLocation();
    const [videoPlayer, setVideoPlayer] = useState(false);
    const toggleVideoPlayer = () => {
        if (videoPlayer) {
            setVideoPlayer(false);
        }
        else{
            setVideoPlayer(true)
        }
    }

    useEffect(() => {
        setVideoPlayer(false);
    }, [location.pathname])
  return (
    <VideoPlayerContext.Provider value={{videoPlayer, toggleVideoPlayer}}>
        {props.children}
    </VideoPlayerContext.Provider>
  )
}
