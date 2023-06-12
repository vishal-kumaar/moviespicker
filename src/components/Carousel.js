import React from "react";

export default function Carousel(props) {
  let {
    heading,
    textColor,
    textBefore,
    bgImage,
    bgColor,
    bgSize,
    bgPosition,
    bgAttachment,
  } = props;

  const movies = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section
      className={`${
        bgColor === undefined ? "mb-16" : "mb-4"
      } ${bgImage} ${bgSize} ${bgPosition} ${bgAttachment} ${textColor}
      } bg-no-repeat`}
    >
      <div className={`pt-16 ${bgColor}`}>
        <h1
          className={`relative font-signika text-3xl px-6 md:px-12 before:absolute before:w-20 before:h-1.5 before:-top-3.5 before:left-6 ${textBefore} md:before:left-12`}
        >
          {heading}
        </h1>
        <div className="mt-6 pb-10 flex flex-nowrap overflow-x-auto gap-6 px-6 md:px-12">
          {movies &&
            movies.map((movie, index) => (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 flex-auto cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
                    alt=""
                    className="w-44 h-60 rounded-xl"
                  />
                  <div className="bg-black w-fit p-px rounded-[50%] absolute -bottom-4 left-3">
                    <div
                      className="flex justify-center items-center w-9 h-9 rounded-[50%] text-white text-xs font-bold font-poppins"
                      style={{
                        background:
                          "radial-gradient(closest-side, black 79%, transparent 90% 100%), conic-gradient(rgb(0,255,0, 1) 75%, rgba(0, 255, 0, 0.5) 0)",
                      }}
                    >
                      80 <sup className="mt-1.5">%</sup>
                    </div>
                  </div>
                </div>
                <h1 className="font-signika text-base mt-6">
                  John Wick: Chapter 4
                </h1>
                <p className="font-poppins text-sm">24 March 2023</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
