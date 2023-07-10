import React from "react";
import queryString from "@/utils/queryString";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MoreButton({ tab }) {
  const router = useRouter();
  return (
    <div className="mx-auto w-fit mb-10">
      <button
        onClick={() =>
          router.push(
            `/more${queryString({
              activeTab: tab,
              page: 1,
            })}`
          )
        }
        className="text-[#ff8478] hover:bg-[#FFF0EF] font-bold font-poppins rounded-2xl px-6 py-1 flex flex-col items-center">
        <p className="text-base mb-1.5">More catagories</p>
        <Image
          width={20}
          height={20}
          src="./icons/more.svg"
          alt=""
          className="w-5"
        />
      </button>
    </div>
  );
}
