import React from "react";

export default function VideoPlayer() {
  return (
    <div className="bg-transparent/30 fixed z-10 top-0 left-0 w-full h-screen flex">
      <div className="m-auto relative rounded-lg bg-black h-[280px] w-[90vw] sm:h-[400px] md:h-[450px] md:w-[80vw] lg:h-[500px] lg:w-[70vw]">
          <p class="text-white absolute right-2 -top-1 font-firasans text-4xl cursor-pointer hover:text-white/70">
            ×
          </p>
        <iframe
          src="https://www.youtube.com/embed/yjRHZEUamCc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
