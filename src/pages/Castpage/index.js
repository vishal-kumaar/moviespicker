import React from "react";
import CastAndCrew from "./sections/CastAndCrew";
import getMovieById from "../../apis/getMovieById";
import NotFound from "../../components/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";
import ShowHeader from "../../components/ShowHeader";

export default function Castpage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [data, setData] = useState([]);
  let { movieId } = useParams();
  movieId = movieId.split("-")[0];

  const handleData = async (movieId) => {
    startLoading();
    const res = await getMovieById(movieId);
    if (res.success) {
      setData(res.data);
      navigate(
        `/movie/${movieId}-${res.data.title.replaceAll(" ", "-")}/cast`,
        { replace: true }
      );
    } else {
      setData(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleData(movieId);
    },
    // eslint-disable-next-line
    [movieId]
  );

  if (data && data.length === 0) {
    return null;
  }

  if (!data){
    return <NotFound />
  }

  return (
    <>
      <ShowHeader show={data} type="movie" />
      {Object.keys(data.credits).length && (
        <CastAndCrew credits={data.credits} />
      )}
    </>
  );
}
