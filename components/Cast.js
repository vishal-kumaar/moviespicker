"use client";

import React from "react";
import { useRouter } from "next/navigation";
import getStringOfRoles from "@/utils/getStringOfRoles";
import mergeCredits from "@/utils/mergeCredits";
import Image from "next/image";

export default function Cast({ cast, castFor }) {
  const router = useRouter();

  cast = mergeCredits(cast, "cast");

  return (
    <div className="w-full sm:w-1/2">
      <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
        {castFor === "movie" ? "Movie" : "Series"} Cast{" "}
        <span className="text-gray-400">{cast.length}</span>
      </h1>
      {cast.map((person, index) => (
        <div
          key={index}
          className="flex gap-5 items-start mb-5 cursor-pointer"
          onClick={() => router.push(`/person/${person.id}`)}>
          <Image
            width={66}
            height={66}
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w66_and_h66_face${person.profile_path}`
                : "/images/image_placeholder.svg"
            }
            alt="profile-pic"
            className="rounded-md w-[66px] h-[66px]"
          />
          <div className="mt-1">
            <h1 className="font-bold font-signika text-base">
              {person.name ? person.name : "Unknown"}
            </h1>
            <p className="font-poppins font-medium text-sm">
              {castFor === "series"
                ? getStringOfRoles(person.roles, "cast")
                : person.character}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
