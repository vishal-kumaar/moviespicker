"use client";

import React from "react";
import Image from "next/image";
import ImagePreview from "@/components/ImagePreview";
import { useRouter } from "next/navigation";
import queryString from "@/utils/queryString";

export default function ImageCarousel({ images }) {
  const router = useRouter();

  if (images.length === []) {
    return null;
  }

  const handlePreview = (imgUrl) => {
    router.push(
      queryString({
        prev: "img",
        src: imgUrl,
      }),
      {scroll: false}
    );
  };

  return (
    <section className="px-6 md:px-14 mt-14">
      <ImagePreview />
      <h1
        className={`relative font-signika text-3xl before:absolute before:w-20 before:h-1.5 before:-top-3.5 before:left- before:bg-black mb-6`}>
        Related Images
      </h1>
      <div className="flex gap-2 min-w-full flex-nowrap overflow-x-auto pb-5">
        {images.map((image, index) => (
          <Image
            key={index}
            height={300}
            width={300}
            src={
              image.file_path
                ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${image.file_path}`
                : "/images/image_placeholder.svg"
            }
            alt=""
            className="w-52 flex-auto flex-shrink-0 flex-grow-0 rounded-xl block cursor-pointer"
            onClick={() => {
              image.file_path &&
                handlePreview(
                  `https://image.tmdb.org/t/p/w300_and_h450_bestv2${image.file_path}`
                );
            }}
          />
        ))}
      </div>
    </section>
  );
}
