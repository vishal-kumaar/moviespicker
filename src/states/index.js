import React from "react";
import SidebarState from "./sidebar/SidebarState";
import VideoPlayerState from "./videoplayer/VideoPlayerState";
import LoadingState from "./loading/LoadingState";

export default function State({ children }) {
  return (
    <LoadingState>
      <SidebarState>
        <VideoPlayerState>{children}</VideoPlayerState>
      </SidebarState>
    </LoadingState>
  );
}
