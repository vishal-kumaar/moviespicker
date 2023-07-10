"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingContext from "@/contexts/loading/LoadingContext";
import getShowById from "@/apis/getShowById";
import getFullSeriesCredits from "@/apis/getFullSeriesCredits";
import NotFound from "@/components/NotFound";
import ShowHero from "@/components/ShowHero";
import CastCarousel from "@/components/CastCarousel";
import ShowInfo from "@/components/ShowInfo";
import VideoCarousel from "@/components/VideoCarousel";
import LastSeason from "./sections/LastSeason";
import getRecommendation from "@/apis/getRecommendation";
import ShowCarousel from "@/components/ShowCarousel";
import addSeo from "@/utils/addSeo";
import { seriesDetailPage } from "@/utils/getSeo";

export default function Series() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState({});
  const [cast, setCast] = useState({});
  const [recommendSeries, setRecommendSeries] = useState(null);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handleseries = async (seriesId) => {
    const res1 = await getShowById("series", seriesId);
    if (res1.success) {
      setSeries(res1.data);
      router.replace(
        `/series/${seriesId}-${res1.data.name.replaceAll(" ", "-")}`
      );
      addSeo(`${res1.data.name} | Movies Picker`, seriesDetailPage.description);
    } else {
      setSeries(null);
    }

    const res2 = await getFullSeriesCredits(seriesId);
    if (res2.success) {
      setCast(res2.data.cast);
    } else {
      setCast(null);
    }

    const res3 = await getRecommendation(seriesId, "series");
    if (res3.success) {
      setRecommendSeries(res3.data.results);
    }

    stopLoading();
  };

  useEffect(
    () => {
      startLoading();
      handleseries(seriesId);
    },
    // eslint-disable-next-line
    [seriesId]
  );

  if (!series) {
    return <NotFound />;
  }
  return (
    <>
      <ShowHero show={series} />
      <section className="flex flex-col xl:flex-row xl:items-center justify-between">
        <section className={cast && cast.length > 0 ? " " : "h-[29.8rem]"}>
          {cast && cast.length > 0 && (
            <CastCarousel castFor="series" casts={cast} />
          )}
        </section>
        <ShowInfo showType="series" show={series} />
      </section>
      {series &&
        series.videos &&
        series.videos.results &&
        series.videos.results.length > 0 && (
          <VideoCarousel videos={series.videos.results} type="tv" />
        )}
      <LastSeason series={series} />
      {recommendSeries && (
        <ShowCarousel
          heading="Recommended Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          shows={recommendSeries}
          showType="series"
        />
      )}
    </>
  );
}
