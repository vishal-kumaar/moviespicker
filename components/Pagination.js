"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import queryString from "@/utils/queryString";
import Image from "next/image";

export default function Pagination({ page, totalPages }) {
  const router = useRouter();

  const handlePage = (move) => {
    if (move === "prev") {
      router.push(
        queryString({
          page: Number(page) - 1,
        })
      );
    } else if (move === "next") {
      router.push(queryString({ page: Number(page) + 1 }));
    }
  };

  useEffect(() => {
    if (!page) {
      router.replace("?page=1");
    }
  });

  return (
    <div className="flex items-center mt-10 mb-16">
      <button
        className={`rounded-3xl py-2 shadow-md font-signika gap-2 flex items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white ${
          Number(page) === 1 ? "invisible" : "visible"
        }`}
        onClick={() => handlePage("prev")}>
        <Image
          width={10}
          height={10}
          src="./icons/forward.svg"
          alt=""
          className="invert w-2.5 rotate-180"
        />
        <p>Previous</p>
      </button>
      <button
        className={`rounded-3xl py-2 shadow-md font-signika flex gap-2 items-center px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white w-fit ml-auto ${
          totalPages === Number(page) ? "invisible" : "visible"
        }`}
        onClick={() => handlePage("next")}>
        <p>Next</p>
        <Image
          height={10}
          width={10}
          src="./icons/forward.svg"
          alt=""
          className="invert w-2.5"
        />
      </button>
    </div>
  );
}
