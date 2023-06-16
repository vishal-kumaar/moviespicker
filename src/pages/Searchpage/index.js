import React from "react";
import SearchArea from "../../components/SearchArea";
import MoviesList from "../../components/MoviesList";

export default function Searchpage() {
  return (
    <div className="px-6 md:px-16 mt-16">
      <SearchArea autoFocus={true} />
      <h1 className="font-bold font-signika text-3xl mt-16">Search Result</h1>
      <hr className="border mt-2 border-black/10" />
      <MoviesList />
    </div>
  );
}
