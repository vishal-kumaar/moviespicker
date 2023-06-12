import React from "react";
import Hero from "./sections/Hero";
import Carousel from "../../components/Carousel";
import moreIcon from "../../assets/icons/more.svg";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Carousel
        heading="Top 20 Popular Movies"
        textColor="black"
        bgImage="pattern"
        bgPosition="bottom"
      />
      <Carousel
        heading="Top 20 Action Movies"
        textColor="white"
        bgColor="blue-900/60"
        bgImage="actionImage"
        bgSize="cover"
        bgAttachment="fixed"
        bgPosition="bottom"
      />
      <Carousel heading="Top 20 Sci-Fi Movies" textColor="black" />
      <Carousel
        heading="Top 20 Romantic Movies"
        textColor="white"
        bgColor="sky-900/60"
        bgImage="romantic"
        bgSize="cover"
        bgAttachment="fixed"
        bgPosition="bottom"
      />
      <Carousel heading="Top 20 Horror Movies" textColor="black" />
      <div className="mx-auto w-fit mb-10">
        <button
          onClick={() => {
            navigate("/filter");
            scrollToTop();
          }}
          className="text-[#ff8478] hover:bg-[#FFF0EF] font-bold font-poppins rounded-2xl px-6 py-1 flex flex-col items-center"
        >
          <p className="text-base mb-1.5">More catagories</p>
          <img src={moreIcon} alt="" className="w-5" />
        </button>
      </div>
    </>
  );
}
