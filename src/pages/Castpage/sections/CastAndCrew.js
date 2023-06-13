import React from "react";

export default function CastAndCrew() {
  const casts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="flex flex-col sm:flex-row px-6 md:px-14 my-8">
      <div className="w-full sm:w-1/2">
        <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
          Cast <span className="text-gray-400">20</span>
        </h1>
        {casts &&
          casts.map((cast, index) => (
            <div key={index} className="flex gap-5 items-center mb-5">
              <img
                src="https://www.themoviedb.org/t/p/w66_and_h66_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
                alt="profile-pic"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold font-signika text-base">
                  Keanu Reeves
                </h1>
                <p className="font-poppins font-medium text-sm">John Wick</p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full sm:w-1/2">
        <h1 className="font-bold font-firasans text-black text-xl tracking-wider mb-5">
          Crew <span className="text-gray-400">20</span>
        </h1>
        {casts &&
          casts.map((cast, index) => (
            <div key={index} className="flex gap-5 items-center mb-5">
              <img
                src="https://www.themoviedb.org/t/p/w66_and_h66_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
                alt="profile-pic"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold font-signika text-base">
                  Keanu Reeves
                </h1>
                <p className="font-poppins font-medium text-sm">John Wick</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
