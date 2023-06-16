import React, { useEffect, useState } from "react";
import MoviesCarousel from "../../../components/MoviesCarousel";
import getPopularMovies from "../../../apis/getPopularMovies";
import getMoviesByGenre from "../../../apis/getMoviesByGenre";

export default function MoviesCatagory() {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [actionMovies, setActionMovies] = useState(null);
  const [scifiMovies, setScifiMovies] = useState(null);
  const [romanticMovies, setRomanticMovies] = useState(null);
  const [horrorMovies, setHorrorMovies] = useState(null);

  const handleTrendingMovies = async() => {
    const res = await getPopularMovies(1);
    if (res.success === true){
      setTrendingMovies(res.data.results);
    }
  }

  const handleActionMovies = async() => {
    const res = await getMoviesByGenre(28, 1);
    if (res.success === true){
      setActionMovies(res.data.results);
    }
  }

  const handleScifiMovies = async() => {
    const res = await getMoviesByGenre(878, 1);
    if (res.success === true){
      setScifiMovies(res.data.results);
    }
  }

  const handleRomanticMovies = async() => {
    const res = await getMoviesByGenre(10749, 1);
    if (res.success === true){
      setRomanticMovies(res.data.results);
    }
  }
  const handleHorrorMovies = async() => {
    const res = await getMoviesByGenre(27, 1);
    if (res.success === true){
      setHorrorMovies(res.data.results);
    }
  }

  useEffect(() => {
    handleTrendingMovies();
    handleActionMovies();
    handleScifiMovies();
    handleRomanticMovies();
    handleHorrorMovies();
  }, [])
  return (
    <>
      <MoviesCarousel
        heading="Top 20 Trending Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        bgImage="bg-pattern"
        bgPosition="bg-bottom"
        movies={trendingMovies}
      />
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
      <MoviesCarousel
        heading="Top 20 Sci-Fi Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        movies={scifiMovies}
      />
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
      <MoviesCarousel
        heading="Top 20 Horror Movies"
        textColor="text-black"
        textBefore="before:bg-black"
        movies={horrorMovies}
      />
    </>
  );
}