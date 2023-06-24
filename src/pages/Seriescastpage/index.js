import React from "react";
import getFullSeriesCredits from "../../apis/getFullSeriesCredits";
import getSeriesById from "../../apis/getSeriesById";
import NotFound from "../../components/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";
import ShowHeader from "../../components/ShowHeader";
import Cast from "./sections/Cast";
import Crew from "./sections/Crew";

export default function Seriescastpage() {
  const navigate = useNavigate();
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
    const res2 = await getSeriesById(seriesId);
    if (res2.success) {
      setSeries(res2.data);
      navigate(
        `/series/${seriesId}-${res2.data.name.replaceAll(" ", "-")}/cast`,
        { replace: true }
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
      {(credits && Object.keys(credits).length > 2) ? (
        <section className="flex flex-col sm:flex-row px-6 md:px-14 my-8">
          <Cast cast={credits.cast} />
          <Crew crew={credits.crew} />
        </section>
      ) : ""}
    </>
  );
}
