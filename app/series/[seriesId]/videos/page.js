"use client";

import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "@/contexts/loading/LoadingContext";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import getShowById from "@/apis/getShowById";
import NotFound from "@/components/NotFound";
import ShowHeader from "@/components/ShowHeader";
import Tab from "@/components/Tab";
import VideoList from "@/components/VideoList";
import getVideoByType from "@/utils/getVideoByType";
import addSeo from "@/utils/addSeo";
import { seriesVideosPage } from "@/utils/getSeo";

export default function SeriesVideos() {
  const router = useRouter();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState([]);
  const searchParam = useSearchParams();
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  let activeTab = searchParam.get("activeTab");
  if (!activeTab) {
    activeTab = "Trailer";
  }

  const handleSeries = async (id) => {
    startLoading();
    const res = await getShowById("series", id);
    if (res.success) {
      setSeries(res.data);
      router.replace(
        `/series/${id}-${res.data.name.replaceAll(" ", "-")}/videos`
      );
      addSeo(
        `Videos | ${res.data.name} | Movies Picker`,
        seriesVideosPage.description
      );
    } else {
      setSeries(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleSeries(seriesId);
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

  const options = [
    {
      name: "Trailer",
      count: getVideoByType(series.videos.results, "Trailer").length,
    },
    {
      name: "Teaser",
      count: getVideoByType(series.videos.results, "Teaser").length,
    },
    {
      name: "Opening Credits",
      count: getVideoByType(series.videos.results, "Opening Credits").length,
    },
    {
      name: "Clip",
      count: getVideoByType(series.videos.results, "Clip").length,
    },
    {
      name: "Behind the Scenes",
      count: getVideoByType(series.videos.results, "Behind the Scenes").length,
    },
    {
      name: "Bloopers",
      count: getVideoByType(series.videos.results, "Bloopers").length,
    },
    {
      name: "Featurette",
      count: getVideoByType(series.videos.results, "Featurette").length,
    },
  ];

  return (
    <>
      <ShowHeader show={series} type="series" />
      <Tab heading="Videos" options={options} />
      {options.some((option) => option.name === activeTab) ? (
        <VideoList videos={getVideoByType(series.videos.results, activeTab)} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
