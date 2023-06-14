import React from "react";
import SidebarState from "./sidebar/SidebarState";
import VideoPlayerState from "./videoplayer/VideoPlayerState";

export default function State(props) {
  return (
    <SidebarState>
      <VideoPlayerState>{props.children}</VideoPlayerState>
    </SidebarState>
  );
}
