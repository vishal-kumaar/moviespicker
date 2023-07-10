"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import ShowHeader from "@/components/ShowHeader";
import SeasonList from "@/components/SeasonList";
import addSeo from "@/utils/addSeo";
import { seriesSeasonPage } from "@/utils/getSeo";

export default function Seasonpage() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState([]);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handleSeries = async (seriesId) => {
    startLoading();
    const res = await getShowById("series", seriesId);
    if (res.success) {
      setSeries(res.data);
      router.replace(
        `/series/${seriesId}-${res.data.name.replaceAll(" ", "-")}/seasons`
      );
      addSeo(
        `Seasons | ${res.data.name} | Movies Picker`,
        seriesSeasonPage.description
      );
    } else {
      setSeries(null);
    }
    stopLoading();
  };

  if (series && series.length > 0) {
    <NotFound />;
  }

  useEffect(
    () => {
      handleSeries(seriesId);
    },
    // eslint-disable-next-line
    [seriesId]
  );
  return (
    <>
      <ShowHeader show={series} type="series" />
      <section className="px-6 md:px-16 mb-20">
        <h1 className="font-bold font-signika text-3xl mt-16">All Seasons</h1>
        <hr className="border mt-2 border-black/10 mb-12" />
        {series && <SeasonList seasons={series.seasons} desc="full" />}
      </section>
    </>
  );
}
