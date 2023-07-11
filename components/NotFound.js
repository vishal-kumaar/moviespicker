"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-[73vh]">
      <div className="shadow-2xl h-fit px-4 py-5 rounded-md">
        <h1 className="font-signika font-bold text-4xl text-red-800">Oops!</h1>
        <p className="font-firasans text-lg text-black mt-3">
          It seems that you opened the wrong page.
        </p>
        <button
          className="mt-5 px-4 w-full py-2 text-white bg-red-800 rounded-md font-poppins font-bold text-base outline-none"
          onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </div>
  );
}
