import React, { useContext, useEffect, useState } from "react";
import SeriesHero from "./sections/SeriesHero";
import { useNavigate, useParams } from "react-router-dom";
import LoadingContext from "../../states/loading/LoadingContext";
import getSeriesById from "../../apis/getSeriesById";
import NotFound from "../../components/NotFound";
import Casts from "./sections/Casts";
import getFullSeriesCredits from "../../apis/getFullSeriesCredits";
import SeriesInfo from "./sections/SeriesInfo";
import VideoCarousel from "../../components/VideoCarousel";
import RecommendSeries from "./sections/RecommendSeries";
import LastSeason from "./sections/LastSeason";

export default function Seriespage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState([]);
  const [cast, setCast] = useState([]);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handleseries = async (seriesId) => {
    startLoading();
    const res1 = await getSeriesById(seriesId);
    if (res1.success) {
      setSeries(res1.data);
      navigate(`/series/${seriesId}-${res1.data.name.replaceAll(" ", "-")}`, {
        replace: true,
      });
    } else {
      setSeries(null);
    }

    const res2 = await getFullSeriesCredits(seriesId);
    if (res2.success) {
      setCast(res2.data.cast);
    } else {
      setCast(null);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleseries(seriesId);
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
      <SeriesHero series={series} />
      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        {cast.length > 0 && <Casts casts={cast} />}
        <SeriesInfo series={series} />
      </div>
      {series.videos.results.length > 0 && (
        <VideoCarousel videos={series.videos.results} type='tv' />
      )}
      <LastSeason series={series} />
      <RecommendSeries seriesId={series.id} />
    </>
  );
}
