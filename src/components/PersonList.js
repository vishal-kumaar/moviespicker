import React from "react";
import imagePlaceholder from "../assets/images/image_placeholder.svg";
import popularityIcon from "../assets/icons/popularity.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoResultFound from "./NoResultFound";
import Pagination from "./Pagination";
import getGenderById from "../utils/getGenderById";
import getStringOfMovies from "../utils/getStringOfMovies";

export default function MoviesList({ data }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!query) {
    return (
      <div className="text-center font-firasans text-gray-600 text-lg py-16">
        Search for any person to see results here.
      </div>
    );
  }

  if (!data || !data.results.length) {
    return <NoResultFound query={query} queryType="persons" />;
  }

  const persons = data.results;

  return (
    <div className="flex flex-col gap-6 mt-12">
      {persons &&
        persons.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-black/10 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => {
              navigate(`/person/${person.id}`);
            }}
          >
            <img
              src={
                person.profile_path
                  ? `https://www.themoviedb.org/t/p/w138_and_h175_face${person.profile_path}`
                  : imagePlaceholder
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
                <img src={popularityIcon} alt="" className="w-4" />{" "}
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
    </div>
  );
}
