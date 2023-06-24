import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getSeriesById from "../../apis/getSeriesById";
import NotFound from "../../components/NotFound";
import SeasonsList from "./sections/SeasonsList";
import ShowHeader from "../../components/ShowHeader";
import LoadingContext from "../../states/loading/LoadingContext";

export default function Seasonpage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [series, setSeries] = useState([]);
  let { seriesId } = useParams();
  seriesId = seriesId.split("-")[0];

  const handleSeries = async (seriesId) => {
    startLoading();
    const res = await getSeriesById(seriesId);
    if (res.success) {
      setSeries(res.data);
      navigate(
        `/series/${seriesId}-${res.data.name.replaceAll(" ", "-")}/seasons`,
        { replace: true }
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
        {series && <SeasonsList seasons={series.seasons} />}
      </section>
    </>
  );
}
