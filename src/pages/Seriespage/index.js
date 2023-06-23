import React, { useContext, useEffect, useState } from "react";
import SeriesHero from "./sections/SeriesHero";
import { useNavigate, useParams } from "react-router-dom";
import LoadingContext from "../../states/loading/LoadingContext";
import getSeriesById from "../../apis/getSeriesById";
import NotFound from "../../components/NotFound";

export default function Seriespage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState([]);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handleseries = async (seriesId) => {
    startLoading();
    const res = await getSeriesById(seriesId);
    if (res.success) {
      setSeries(res.data);
      navigate(`/series/${seriesId}-${res.data.name.replaceAll(" ", "-")}`, {
        replace: true,
      });
    } else {
      setSeries(null);
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
    </>
  );
}
