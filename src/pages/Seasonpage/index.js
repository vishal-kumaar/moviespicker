import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSeriesById from "../../apis/getSeriesById";
import NotFound from "../../components/NotFound";
import SeasonsList from "./sections/SeasonsList";
import ShowHeader from "../../components/ShowHeader";

export default function Seasonpage() {
  const [series, setSeries] = useState([]);
  const { seriesId } = useParams();

  const handleSeries = async (seriesId) => {
    const res = await getSeriesById(seriesId);
    if (res.success) {
      setSeries(res.data);
    } else {
      setSeries(null);
    }
  };

  if (series && series.length > 0) {
    <NotFound />;
  }

  useEffect(() => {
    handleSeries(seriesId);
  }, [seriesId]);
  return (
    <>
      <ShowHeader show={series} type="series" />
      {series && <SeasonsList seasons={series.seasons} />}
    </>
  );
}
