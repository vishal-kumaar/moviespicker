import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import formatDate from "../utils/formatDate";
import imagePlaceholder from "../assets/images/image_placeholder.svg";
import progressBarStyle from "../utils/progressBarStyle";

export default function SeriesCarousel(props) {
  let {
    heading,
    textColor,
    textBefore,
    bgImage,
    bgColor,
    bgSize,
    bgPosition,
    bgAttachment,
    series,
    backgroundImage,
  } = props;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {series.length !== 0 && (
        <section
          className={`${
            bgColor === undefined ? "mb-16" : "mb-4"
          } ${bgImage} ${bgSize} ${bgPosition} ${bgAttachment} ${textColor}
      } bg-no-repeat`}
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div className={`pt-16 ${bgColor}`}>
            <h1
              className={`relative font-signika text-3xl px-6 md:px-12 before:absolute before:w-20 before:h-1.5 before:-top-3.5 before:left-6 ${textBefore} md:before:left-12`}
            >
              {heading}
            </h1>
            <div className="mt-6 pb-10 flex flex-nowrap overflow-x-auto gap-6 px-6 md:px-12">
              {series.map((series, index) => (
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 flex-auto cursor-pointer w-40"
                  onClick={() => {
                    if (
                      location.pathname !==
                      `/tv/${series.id}-${series.name.replaceAll(" ", "-")}`
                    ) {
                      navigate(
                        `/tv/${series.id}-${series.name.replaceAll(" ", "-")}`
                      );
                    }
                  }}
                >
                  <div className="relative">
                    <img
                      src={
                        series.poster_path
                          ? `https://image.tmdb.org/t/p/w220_and_h330_face/${series.poster_path}`
                          : imagePlaceholder
                      }
                      alt=""
                      className="w-44 h-60 bg-[#DBDBDB] rounded-xl"
                    />
                    <div className="bg-black w-fit p-px rounded-[50%] absolute -bottom-4 left-3">
                      <div
                        className="flex justify-center items-center w-9 h-9 rounded-[50%] text-white text-xs font-bold font-poppins"
                        style={
                          series.vote_average
                            ? {
                                background: progressBarStyle(
                                  series.vote_average
                                ),
                              }
                            : {
                                background: "black",
                              }
                        }
                      >
                        {series.vote_average ? (
                          <>
                            {Math.round(series.vote_average * 10)}
                            <sup className="mt-1.5">%</sup>
                          </>
                        ) : (
                          "N/A"
                        )}
                      </div>
                    </div>
                  </div>
                  <h1 className="font-signika text-base mt-6 line-clamp-3">
                    {series.name}
                  </h1>
                  {series.first_air_date && (
                    <p className="font-poppins text-sm">
                      {formatDate(series.first_air_date)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
