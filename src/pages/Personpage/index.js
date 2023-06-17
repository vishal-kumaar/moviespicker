import React from "react";
import PersonBio from "./sections/PersonBio";
import PersonMovies from "./sections/PersonMovies";
import { useParams } from "react-router-dom";
import { useState } from "react";
import getPersonDetailsById from "../../apis/getPersonDetailsById";
import { useEffect } from "react";
import NotFound from "../../components/NotFound";

export default function Personpage() {
  const [data, setData] = useState(null);
  const { personId } = useParams();

  const handleData = async (personId) => {
    const res = await getPersonDetailsById(personId);
    if (res.success === true) {
      setData(res.data);
    }
  };

  useEffect(() => {
    handleData(personId);
  }, [personId]);

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
