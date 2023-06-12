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
        textColor="text-black"
        textBefore="before:bg-black"
        bgImage="bg-pattern"
        bgPosition="bg-bottom"
      />
      <Carousel
        heading="Top 20 Action Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-blue-900/60"
        bgImage="bg-actionImage"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
      />
      <Carousel
        heading="Top 20 Sci-Fi Movies"
        textColor="text-black"
        textBefore="before:bg-black"
      />
      <Carousel
        heading="Top 20 Romantic Movies"
        textColor="text-white"
        textBefore="before:bg-white"
        bgColor="bg-sky-900/60"
        bgImage="bg-romantic"
        bgSize="bg-cover"
        bgAttachment="bg-fixed"
        bgPosition="bg-bottom"
      />
      <Carousel
        heading="Top 20 Horror Movies"
        textColor="text-black"
        textBefore="before:bg-black"
      />
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
