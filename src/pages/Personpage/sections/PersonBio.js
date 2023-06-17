import React from "react";
import getGenderById from "../../../utils/getGenderById";
import calculateAge from "../../../utils/calculateAge";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";
import NotFound from "../../../components/NotFound";

export default function PersonBio({ person }) {
  // console.table(person);
  return (
    <>
      {person ? (
        <main className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-14 mt-14 gap-0 md:gap-10 h-full max-w-screen-2xl mx-auto">
          <img
            src={
              person.profile_path
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`
                : imagePlaceholder
            }
            alt="profile-pic"
            className="w-52 h-64 sm:w-96 sm:h-[450px] block rounded-xl"
          />
          <div>
            <h1 className="font-bold font-signika text-4xl mb-4 mt-4 text-center md:text-left">
              {person.name ? person.name : "Unknown"}
            </h1>
            <h2 className="text-xl font-bold font-signika mb-5">
              {getGenderById(person.gender)}
            </h2>
            <div className="flex flex-wrap gap-y-2">
              <div className="w-1/2 font-firasans">
                <h2 className="font-semibold text-base">Known For</h2>
                <p className="font-normal text-sm">
                  {person.known_for_department
                    ? person.known_for_department
                    : "Unknown"}
                </p>
              </div>
              <div className="w-1/2 font-firasans">
                <h2 className="font-semibold text-base">Birthday</h2>
                <p className="font-normal text-sm">
                  {person.birthday
                    ? `${person.birthday} ${calculateAge(person.birthday)}`
                    : "Unknown"}
                </p>
              </div>
              {person.deathday && (
                <div className="w-1/2 font-firasans">
                  <h2 className="font-semibold text-base">Died</h2>
                  <p className="font-normal text-sm">{person.deathday}</p>
                </div>
              )}
              <div className="w-1/2 font-firasans">
                <h2 className="font-semibold text-base">Birthplace</h2>
                <p className="font-normal text-sm">
                  {person.place_of_birth ? person.place_of_birth : "Unknown"}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-xl font-bold mt-6 font-signika">
                  Biography
                </h2>
                <p className="text-[0.95rem] leading-5 mt-1 font-firasans">
                  {person.biography ? person.biography : "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
}
