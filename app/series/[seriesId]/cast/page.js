"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getFullSeriesCredits from "@/apis/getFullSeriesCredits";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import Cast from "@/components/Cast";
import Crew from "@/components/Crew";
import ShowHeader from "@/components/ShowHeader";
import addSeo from "@/utils/addSeo";
import { seriesCastPage } from "@/utils/getSeo";

export default function SeriesCast() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState({});
  const [credits, setCredits] = useState([]);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handlecredits = async (seriesId) => {
    startLoading();
    const res1 = await getFullSeriesCredits(seriesId);
    if (res1.success) {
      setCredits(res1.data);
    } else {
      setCredits(null);
    }
    const res2 = await getShowById("series", seriesId);
    if (res2.success) {
      setSeries(res2.data);
      router.replace(
        `/series/${seriesId}-${res2.data.name.replaceAll(" ", "-")}/cast`
      );
      addSeo(
        `Cast | ${res2.data.name} | Movies Picker`,
        seriesCastPage.description
      );
    } else {
      setSeries(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handlecredits(seriesId);
    },
    // eslint-disable-next-line
    [seriesId]
  );

  if (series && series.length === 0) {
    return null;
  }

  if (!series) {
    return <NotFound />;
  }

  return (
    <>
      <ShowHeader show={series} type="series" />
      {credits && Object.keys(credits).length > 2 ? (
        <section className="flex flex-col gap-5 sm:gap-0  sm:flex-row px-6 md:px-14 my-8">
          <Cast castFor="series" cast={credits.cast} />
          <Crew crewFor="series" crew={credits.crew} />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
