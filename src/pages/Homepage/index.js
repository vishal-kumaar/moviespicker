import React from "react";
import Hero from "./sections/Hero";
import moreIcon from "../../assets/icons/more.svg";
import { useLocation, useNavigate } from "react-router-dom";
import MoviesCatagory from "./sections/MoviesCatagory";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { startLoading } = useContext(LoadingContext);
  useEffect(
    () => {
      if (location.pathname === "/") {
        navigate("/movie", { replace: true });
      }
      startLoading();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      <Hero />
      <MoviesCatagory />
      <div className="mx-auto w-fit mb-10">
        <button
          onClick={() => navigate("/filter")}
          className="text-[#ff8478] hover:bg-[#FFF0EF] font-bold font-poppins rounded-2xl px-6 py-1 flex flex-col items-center"
        >
          <p className="text-base mb-1.5">More catagories</p>
          <img src={moreIcon} alt="" className="w-5" />
        </button>
      </div>
    </>
  );
}
