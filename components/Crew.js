"use client";

import getStringOfRoles from "@/utils/getStringOfRoles";
import mergeCredits from "@/utils/mergeCredits";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Crew({ crew, crewFor }) {
  const router = useRouter();

  crew = mergeCredits(crew, "crew");

  return (
    <div className="w-full sm:w-1/2">
      <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
        {crewFor === "movie" ? "Movie" : "Series"} Crew{" "}
        <span className="text-gray-400">{crew.length}</span>
      </h1>
      {crew.map((person, index) => (
        <div
          key={index}
          className="flex gap-5 items-center mb-5 cursor-pointer"
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
          <div>
            <h1 className="font-bold font-signika text-base">
              {person.name ? person.name : "Unknown"}
            </h1>
            <p className="font-poppins font-medium text-sm">
              {crewFor === "series"
                ? getStringOfRoles(person.jobs, "crew")
                : person.job}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
