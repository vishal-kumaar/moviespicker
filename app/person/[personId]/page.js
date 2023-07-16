"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getPersonDetailsById from "@/apis/getPersonDetailsById";
import PersonBio from "./sections/PersonBio";
import ShowCarousel from "@/components/ShowCarousel";
import { personPage } from "@/utils/getSeo";
import addSeo from "@/utils/addSeo";
import NotFound from "@/components/NotFound";
import ImageCarousel from "./sections/ImageCarousel";

export default function Personpage() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [data, setData] = useState([]);
  let { personId } = useParams();
  personId = personId.split("-")[0];

  const handleData = async (personId) => {
    startLoading();
    const res = await getPersonDetailsById(personId);
    if (res.success) {
      setData(res.data);
      router.replace(
        `/person/${personId}-${res.data.person.name.replaceAll(" ", "-")}`
      );
      addSeo(`${res.data.person.name} | Movie Picker`, personPage.description);
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
          <hr className="mt-10 mx-6 md" />
          {data.images && <ImageCarousel images={data.images} />}
          {data.movies && (
            <>
              <div className="pl-2">
                <ShowCarousel
                  heading="Known for movies"
                  textColor="black"
                  textBefore="before:bg-black"
                  shows={data.movies.results}
                  showType="movie"
                />
              </div>
            </>
          )}
          {data.series && (
            <>
              <div className="pl-2 -mt-14">
                <ShowCarousel
                  heading="Known for series"
                  textColor="black"
                  textBefore="before:bg-black"
                  shows={data.series}
                  showType="series"
                />
              </div>
            </>
          )}
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
