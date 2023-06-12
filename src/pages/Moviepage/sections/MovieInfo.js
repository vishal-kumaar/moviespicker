import React from "react";

export default function MovieInfo() {
  return (
    <section className="px-6 md:px-0 md:pr-20 flex flex-col gap-2">
    <hr />
      <div className="">
        <h1 className="font-firasans font-bold text-sm">Status</h1>
        <p className="font-firasans text-sm">Released</p>
      </div>
      <hr />
      <div className="">
        <h1 className="font-signika text-sm">Original Language</h1>
        <p className="font-firasans text-sm">English</p>
      </div>
      <hr />
      <div className="">
        <h1 className="font-signika text-sm">Budget</h1>
        <p className="font-firasans text-sm">$90,000,000.00</p>
      </div>
      <hr />
      <div className="">
        <h1 className="font-signika text-sm">Revenue</h1>
        <p className="font-firasans text-sm">$431,769,198.00</p>
      </div>
      <hr />
      <div className="">
        <h1 className="font-signika text-sm">Website</h1>
        <a
          href="https://johnwick.movie/"
          target="_blank"
          rel="noreferrer"
          className="font-firsans text-sm line-clamp-1 text-blue-600"
        >
          https://johnwick.movie/
        </a>
      </div>
      <hr />
    </section>
  );
}
