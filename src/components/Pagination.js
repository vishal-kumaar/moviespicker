import React from "react";
import { useSearchParams } from "react-router-dom";
import forwardIcon from "../assets/icons/forward.svg";

export default function Pagination({ page, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePage = (move) => {
    if (move === "prev") {
      searchParams.set("page", Number(page) - 1);
    } else if (move === "next") {
      searchParams.set("page", Number(page) + 1);
    }
    setSearchParams(searchParams);
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="flex items-center mt-10 mb-16">
      <button
        className={`rounded-3xl py-2 shadow-md font-signika gap-2 flex items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white ${
          Number(page) === 1 ? "invisible" : "visible"
        }`}
        onClick={() => handlePage("prev")}
      >
        <img src={forwardIcon} alt="" className="invert w-2.5 rotate-180" />
        <p>Previous</p>
      </button>
      <button
        className={`rounded-3xl py-2 shadow-md font-signika flex gap-2 items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white w-fit ml-auto ${
          totalPages === Number(page) ? "invisible" : "visible"
        }`}
        onClick={() => handlePage("next")}
      >
        <p>Next</p>
        <img src={forwardIcon} alt="" className="invert w-2.5" />
      </button>
    </div>
  );
}
