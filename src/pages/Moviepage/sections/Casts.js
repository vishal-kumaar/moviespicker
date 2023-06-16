import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import nextIcon from "../../../assets/icons/next.svg";
import imagePlaceholder from "../../../assets/images/image_placeholder.svg";

export default function Casts({ casts }) {
  const navigate = useNavigate();
  const { movieId } = useParams();
  return (
    <>
      {casts && (
        <section className="px-6 md:px-14 xl:px-0 xl:pl-14 xl:pr-4 my-10 ">
          <h1 className="font-signika font-bold text-3xl text-black mb-4">
            Cast
          </h1>
          <div className="flex items-center flex-nowrap overflow-x-auto gap-6 pb-10 w-full">
            {casts.map((cast, index) => (
              <div
                key={index}
                className="border cursor-pointer flex-none border-black/20 shadow-xl rounded-lg max-w-[9.8rem]"
                onClick={() => navigate(`/person/${cast.id}`)}
              >
                <img
                  src={
                    cast.profile_path
                      ? `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`
                      : imagePlaceholder
                  }
                  alt=""
                  className="rounded-t-lg h-44 w-[9.8rem]"
                />
                <div className="px-2 pt-2 pb-4">
                  <p className="font-signika text-black text-base line-clamp-1">
                    {cast.name}
                  </p>
                  <p className="font-roboto tracking-wide text-black text-[13px] -mt-[2px] line-clamp-1">
                    {cast.character}
                  </p>
                </div>
              </div>
            ))}
            <img
              src={nextIcon}
              alt=""
              className="w-10 h-fit cursor-pointer"
              onClick={() => navigate(`/movie/${movieId}/cast`)}
            />
          </div>
          <button
            className="mt-5 font-firasans font-bold"
            onClick={() => navigate(`/movie/${movieId}/cast`)}
          >
            Full Cast & Crews →
          </button>
        </section>
      )}
    </>
  );
}
