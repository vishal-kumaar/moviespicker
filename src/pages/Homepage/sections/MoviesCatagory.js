import React, { useEffect, useState, useContext } from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";
import getTrendingMovies from "../../../apis/getTrendingMovies";
import getMoviesByGenre from "../../../apis/getMoviesByGenre";
import LoadingContext from "../../../states/loading/LoadingContext";

export default function MoviesCatagory() {
  const { stopLoading } = useContext(LoadingContext);

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [actionMovies, setActionMovies] = useState(null);
  const [scifiMovies, setScifiMovies] = useState(null);
  const [romanticMovies, setRomanticMovies] = useState(null);
  const [horrorMovies, setHorrorMovies] = useState(null);

  const handleMovies = async () => {
    const res1 = await getTrendingMovies(1);
    if (res1.success) {
      setTrendingMovies(res1.data.results);
    }

    const res2 = await getMoviesByGenre(28, 1);
    if (res2.success) {
      setActionMovies(res2.data.results);
    }

    const res3 = await getMoviesByGenre(878, 1);
    if (res3.success) {
      setScifiMovies(res3.data.results);
    }

    const res4 = await getMoviesByGenre(10749, 1);
    if (res4.success) {
      setRomanticMovies(res4.data.results);
    }

    const res5 = await getMoviesByGenre(27, 1);
    if (res5.success) {
      setHorrorMovies(res5.data.results);
    }
    stopLoading();
  };
  
  useEffect(
    () => {
      handleMovies();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      {trendingMovies && (
        <MoviesCarousel
          heading="Top 20 Today's Trending Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          bgImage="bg-pattern"
          bgPosition="bg-bottom"
          movies={trendingMovies}
        />
      )}
      {actionMovies && (
        <MoviesCarousel
          heading="Top 20 Action Movies"
          textColor="text-white"
          textBefore="before:bg-white"
          bgColor="bg-blue-900/60"
          bgImage="bg-actionImage"
          bgSize="bg-cover"
          bgAttachment="bg-fixed"
          bgPosition="bg-bottom"
          movies={actionMovies}
        />
      )}
      {romanticMovies && (
        <MoviesCarousel
          heading="Top 20 Sci-Fi Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          movies={scifiMovies}
        />
      )}
      {romanticMovies && (
        <MoviesCarousel
          heading="Top 20 Romantic Movies"
          textColor="text-white"
          textBefore="before:bg-white"
          bgColor="bg-sky-900/60"
          bgImage="bg-romantic"
          bgSize="bg-cover"
          bgAttachment="bg-fixed"
          bgPosition="bg-bottom"
          movies={romanticMovies}
        />
      )}
      {horrorMovies && (
        <MoviesCarousel
          heading="Top 20 Horror Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          movies={horrorMovies}
        />
      )}
    </>
  );
}
