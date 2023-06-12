import React from "react";
import nextIcon from "../../../assets/icons/next.svg";
import rightArrow from "../../../assets/icons/right_arrow.svg";

export default function Casts() {
  const casts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="px-6 md:px-14 my-10 ">
      <h1 className="font-signika font-bold text-3xl text-black">Cast</h1>
      <div className="mt-6 flex items-center flex-nowrap overflow-x-auto gap-6 pb-10">
        {casts &&
          casts.map((cast, index) => (
            <div
              key={index}
              className="border flex-auto flex-shrink-0 flex-grow-0 border-black/20 shadow-xl rounded-lg w-fit"
            >
              <img
                src="https://www.themoviedb.org/t/p/w138_and_h175_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
                alt=""
                className="rounded-t-lg h-44 w-36"
              />
              <div className="px-2 pt-2 pb-4">
                <p className="font-signika text-black text-base">
                  Keanu Reeves
                </p>
                <p className="font-roboto tracking-wide text-black text-[13px] -mt-[2px]">
                  John Wick
                </p>
              </div>
            </div>
          ))}
          <img src={nextIcon} alt="" className="w-10 h-fit cursor-pointer"/>
      </div>
      <button className="mt-5 font-firasans font-bold flex gap-2 items-center">
        <p>Full Cast & Crew</p>
        <img src={rightArrow} alt="" className="w-5 mt-1"/>
      </button>
    </section>
  );
}