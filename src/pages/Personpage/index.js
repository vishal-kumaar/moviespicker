import React from "react";
import PersonBio from "./sections/PersonBio";
import PersonMovies from "./sections/PersonMovies";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import getPersonDetailsById from "../../apis/getPersonDetailsById";
import { useEffect } from "react";
import NotFound from "../../components/NotFound";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";
import PersonSeries from "./sections/PersonSeries";

export default function Personpage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [data, setData] = useState([]);
  let { personId } = useParams();
  personId = personId.split("-")[0];

  const handleData = async (personId) => {
    startLoading();
    const res = await getPersonDetailsById(personId);
    if (res.success) {
      setData(res.data);
      navigate(
        `/person/${personId}-${res.data.person.name.replaceAll(" ", "-")}`,
        { replace: true }
      );
    } else {
      setData(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleData(personId);
    },
    // eslint-disable-next-line
    [personId]
  );

  if (data && data.length === 0) {
    return null;
  }

  return (
    <>
      {data ? (
        <>
          <PersonBio person={data.person} />
          <PersonMovies movies={data.movies} />
          <PersonSeries series={data.series} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
