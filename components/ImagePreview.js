import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function ImagePreview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preview = searchParams.get("prev");
  const src = searchParams.get("src");

  if (typeof window !== "undefined") {
    window.document.body.style.overflowY = "auto";
  }
  
  if (preview !== "img") {
    return null;
  }
  
  if (typeof window !== "undefined") {
    window.document.body.style.overflowY = "hidden";
  }

  return (
    <div className="bg-white fixed top-0 left-0 z-50 w-full h-full flex overflow-y-auto">
      <div className="h-fit w-full m-auto px-8 py-4 flex flex-col lg:flex-row justify-center items-center">
        <p
          className="absolute right-4 top-1 font-firasans text-4xl cursor-pointer"
          onClick={() => router.back()}>
          ×
        </p>
        <Image
          width={400}
          height={400}
          src={src}
          alt="preview"
          onError={(event) => {
            event.target.src = "/images/image_placeholder.svg";
          }}
        />
      </div>
    </div>
  );
}
