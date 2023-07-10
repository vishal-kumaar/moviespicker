import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import VideoPlayerProvider from "./videoplayer/VideoPlayerProvider";
import LoadingProvider from "./loading/LoadingProvider";

export default function Contexts({ children }) {
  return (
    <LoadingProvider>
      <SidebarProvider>
        <VideoPlayerProvider>{children}</VideoPlayerProvider>
      </SidebarProvider>
    </LoadingProvider>
  );
}