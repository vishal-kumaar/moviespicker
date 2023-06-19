import React, { useEffect, useState } from "react";
import MovieFilter from "./sections/MovieFilter";
import MoviesList from "../../components/MoviesList";
import { useSearchParams } from "react-router-dom";
import getMoviesByFilters from "../../apis/getMoviesByFilters";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Recommand() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const genres = searchParams.get("genres");
  const releaseFrom = searchParams.get("release_from");
  const releaseTo = searchParams.get("release_to");
  const ratting = searchParams.get("ratting");
  const runtime = searchParams.get("runtime");
  const sortBy = searchParams.get("sort_by");
  const sortingOrder = searchParams.get("sort_order");
  const country = searchParams.get("country");
  const adult = searchParams.get("adult");
  const page = searchParams.get("page");

  const handleFilter = async (
    genres,
    releaseFrom,
    releaseTo,
    ratting,
    runtime,
    sortBy,
    sortingOrder,
    country,
    adult,
    page
  ) => {
    startLoading();
    const res = await getMoviesByFilters(
      genres,
      releaseFrom,
      releaseTo,
      ratting,
      runtime,
      sortBy,
      sortingOrder,
      country,
      adult,
      page
    );

    if (res.success) {
      setResults(res.data);
    } else {
      setResults(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleFilter(
        genres,
        releaseFrom,
        releaseTo,
        ratting,
        runtime,
        sortBy,
        sortingOrder,
        country,
        adult,
        page
      );
    },
    // eslint-disable-next-line
    [
      genres,
      releaseFrom,
      releaseTo,
      ratting,
      runtime,
      sortBy,
      sortingOrder,
      country,
      adult,
      page,
    ]
  );

  if (results && results.length === 0) {
    return null;
  }

  return (
    <>
      <MovieFilter />
      <section className="px-6 md:px-16 mt-10">
        <h1 className="font-bold font-signika text-3xl">Result Movies</h1>
        <hr className="border mt-2 border-black/10" />
        <MoviesList data={results} />
      </section>
    </>
  );
}
