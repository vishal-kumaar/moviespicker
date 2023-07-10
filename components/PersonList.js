"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import getGenderById from "@/utils/getGenderById";
import getStringOfMovies from "@/utils/getStringOfMovies";
import NoResultFound from "./NoResultFound";
import Pagination from "./Pagination";
import Image from "next/image";

export default function PersonList({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!data || (data.results && data.results.length === 0)) {
    return <NoResultFound query={query} queryType="person" />;
  }

  const persons = data.results;

  return (
    <section
      className={`flex flex-col gap-6 mt-12 ${
        data.length === 0 ? "h-[281.5rem]" : ""
      }`}>
      {persons &&
        persons.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => {
              router.push(
                `/person/${person.id}-${person.name.replaceAll(" ", "-")}`
              );
            }}>
            <Image
              height={175}
              width={138}
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w138_and_h175_face${person.profile_path}`
                  : "./images/image_placeholder.svg"
              }
              alt=""
              className="w-[138px] h-[175px] rounded-l-2xl"
            />
            <div>
              <h2 className="font-signika text-lg font-bold tracking-wide text-black line-clamp-1 max-w-full">
                {person.name ? person.name : "Unknown"}
              </h2>
              <p className="font-firasans font-medium text-sm text-gray-400 mb-2">
                {person.known_for_department
                  ? `${person.known_for_department} `
                  : "Profession unknown "}
                <span className="font-bold font-poppins text-[13px]">
                  {person.gender
                    ? `(${getGenderById(person.gender)})`
                    : "(Gender unknown)"}
                </span>
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                <Image
                  width={16}
                  height={16}
                  src="./icons/popularity.png"
                  alt=""
                  className="w-4"
                />{" "}
                <p className="font-firasans font-medium text-sm text-black">
                  {person.popularity.toFixed(2) + "%"}
                </p>
              </div>
              <p className="font-roboto font-medium text-sm text-black tracking-wide line-clamp-1 max-w-full">
                <span className="font-bold font-firasans">Known for: </span>
                {person.known_for.length > 0
                  ? getStringOfMovies(person.known_for)
                  : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      <Pagination page={page} totalPages={data.total_pages} />
    </section>
  );
}
