import React from "react";
import forwardIcon from "../assets/icons/forward.svg";
import popularityIcon from "../assets/icons/popularity.png";
import { useNavigate } from "react-router-dom";

export default function MoviesList() {
    const navigate = useNavigate();
  const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col gap-6 mt-12">
      {persons &&
        persons.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => {
                navigate("/person/id")
            }}
          >
            <img
              src="https://www.themoviedb.org/t/p/w138_and_h175_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
              alt=""
              className="w-[138px] h-[175px] rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                Keanu Reeves
              </h2>
              <p className="font-firasans font-medium text-sm text-gray-400 mb-2">
                Acting  <span className="font-bold font-poppins text-[13px]">(Male)</span>
              </p>
              <div className="flex items-center gap-1.5 mb-3">
              <img src={popularityIcon} alt="" className="w-4" /> <p className="font-firasans font-medium text-sm text-black">59.716</p>
              </div>
              <p className="font-roboto font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold font-firasans">Know for:</span> The
                Matrix, John Wick, John Wick: Chapter 2
              </p>
            </div>
          </div>
        ))}
      <div className="flex items-center mt-10 mb-16">
        <button className="rounded-3xl py-2 shadow-md font-signika flex gap-2 items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white">
          <img src={forwardIcon} alt="" className="invert w-2.5 rotate-180" />
          <p>Previous</p>
        </button>
        <button className="rounded-3xl py-2 shadow-md font-signika flex gap-2 items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white w-fit ml-auto">
          <p>Next</p>
          <img src={forwardIcon} alt="" className="invert w-2.5" />
        </button>
      </div>
    </div>
  );
}
