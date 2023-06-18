import React from "react";
import PersonBio from "./sections/PersonBio";
import PersonMovies from "./sections/PersonMovies";
import { useParams } from "react-router-dom";
import { useState } from "react";
import getPersonDetailsById from "../../apis/getPersonDetailsById";
import { useEffect } from "react";
import NotFound from "../../components/NotFound";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";

export default function Personpage() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [data, setData] = useState(null);
  const { personId } = useParams();

  const handleData = async (personId) => {
    startLoading();
    const res = await getPersonDetailsById(personId);
    if (res.success === true) {
      setData(res.data);
    }
    stopLoading();
  };

  useEffect(() => {
    handleData(personId);
  }, 
  // eslint-disable-next-line
  [personId]);

  if (data){
    console.table(data);
  }

  return (
    <>
      {data ? (
        <>
          <PersonBio person={data.person} />
          <PersonMovies movies={data.movies} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
