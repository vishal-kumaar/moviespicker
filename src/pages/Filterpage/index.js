import React from "react";
import MovieFilter from "./sections/MovieFilter";
import MoviesList from "../../components/MoviesList";

export default function Recommand() {
  return (
    <>
      <MovieFilter />
      <section className="px-6 md:px-16 mt-10">
        <h1 className="font-bold font-signika text-3xl">Result Movies</h1>
        <hr className="border mt-2 border-black/10" />
        <MoviesList />
      </section>
    </>
  );
}
