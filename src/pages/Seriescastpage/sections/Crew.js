import React from "react";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";
import { useNavigate } from "react-router-dom";
import getStringOfRoles from "../../../utils/getStringOfRoles";

export default function Crew({ crew }) {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-1/2">
      <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
        Series Crew <span className="text-gray-400">{crew.length}</span>
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
                ? `https://www.themoviedb.org/t/p/w66_and_h66_face${person.profile_path}`
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
              {person.jobs ? getStringOfRoles(person.jobs, "crew") : "Unknown"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
