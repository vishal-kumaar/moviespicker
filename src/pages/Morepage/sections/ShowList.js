import React, { useContext, useEffect, useState } from "react";
import MoviesList from "../../../components/MoviesList";
import SeriesList from "../../../components/SeriesList";
import getMovieByGenre from "../../../apis/getMoviesByGenre";
import getSeriesByGenre from "../../../apis/getSeriesByGenre";
import { useSearchParams } from "react-router-dom";
import LoadingContext from "../../../states/loading/LoadingContext";

export default function ShowList() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("activeTab");
  const page = searchParams.get("page");
  const genres = searchParams.get("genres");
  const [movies, setMovies] = useState({});
  const [series, setSeries] = useState({});

  const handleShow = async (genreIds, activeTab, page) => {
    startLoading();
    if (activeTab === "Series") {
      const res = await getSeriesByGenre(genreIds, page);
      if (res.success) {
        setSeries(res.data);
      } else {
        setSeries(null);
      }
    } else {
      const res = await getMovieByGenre(genreIds, page);
      if (res.success) {
        setMovies(res.data);
      } else {
        setMovies(null);
      }
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleShow(genres, activeTab, page);
    },
    // eslint-disable-next-line
    [genres, activeTab, page]
  );

  return (
    <section className="px-6 md:px-16">
      <h1 className="font-bold font-signika text-3xl mt-16">
        Related {activeTab === "Series" ? "Series" : "Movies"}
      </h1>
      <hr className="border mt-2 border-black/10" />
      {activeTab === "Series" ? (
        <SeriesList data={series} />
      ) : (
        <MoviesList data={movies} />
      )}
    </section>
  );
}
