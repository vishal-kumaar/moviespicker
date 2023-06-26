import React from "react";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";
import mergeCredits from "../../../utils/mergeCredits";
import { useNavigate } from "react-router-dom";

export default function CastAndCrew({ credits }) {
  const navigate = useNavigate();
  let { cast, crew } = credits;
  [cast, crew] = [mergeCredits(cast, "cast"), mergeCredits(crew, "crew")];
  return (
    <section className="flex flex-col sm:flex-row px-6 md:px-14 my-8">
      <div className="w-full sm:w-1/2">
        <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
          Cast <span className="text-gray-400">{cast.length}</span>
        </h1>
        {cast.map((person, index) => (
          <div
            key={index}
            className="flex gap-5 items-center mb-5 cursor-pointer"
            onClick={() => navigate(`/person/${person.id}`)}
          >
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w66_and_h66_face${person.profile_path}`
                  : imagePlaceholder
              }
              alt="profile-pic"
              className="rounded-md w-[66px] h-[66px]"
            />
            <div>
              <h1 className="font-bold font-signika text-base">
                {person.name ? person.name : "Unknown"}
              </h1>
              <p className="font-poppins font-medium text-sm">
                {person.character ? person.character : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full sm:w-1/2">
        <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
          Crew <span className="text-gray-400">{crew.length}</span>
        </h1>
        {crew.map((person, index) => (
          <div
            key={index}
            className="flex gap-5 items-center mb-5 cursor-pointer"
            onClick={() => navigate(`/person/${person.id}`)}
          >
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w66_and_h66_face${person.profile_path}`
                  : imagePlaceholder
              }
              alt="profile-pic"
              className="rounded-md w-[66px] h-[66px]"
            />
            <div>
              <h1 className="font-bold font-signika text-base">
                {person.name ? person.name : "Unknown"}
              </h1>
              <p className="font-poppins font-medium text-sm">
                {person.job ? person.job : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
