import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab";
import VideoList from "./sections/VideoList";
import NotFound from "../../components/NotFound";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import getMovieById from "../../apis/getMovieById";
import getVideoByType from "../../utils/getVideoByType";
import LoadingContext from "../../states/loading/LoadingContext";
import { useContext } from "react";
import getSeriesById from "../../apis/getSeriesById";
import ShowHeader from "../../components/ShowHeader";

export default function Videopage() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [setObj, setShowObj] = useState([]);
  const [searchParam] = useSearchParams();
  let { show, id } = useParams();
  id = id.split("-")[0];

  let activeTab = searchParam.get("activeTab");
  if (!activeTab) {
    activeTab = "Trailer";
  }

  const handleShow = async (id) => {
    startLoading();
    if (show === "movie") {
      const res = await getMovieById(id);
      if (res.success) {
        setShowObj(res.data);
        navigate(`/movie/${id}-${res.data.title.replaceAll(" ", "-")}/videos`, {
          replace: true,
        });
      } else {
        setShowObj(null);
      }
    }
    else if (show === "series"){
      const res = await getSeriesById(id);
      if (res.success) {
        setShowObj(res.data);
        navigate(`/series/${id}-${res.data.name.replaceAll(" ", "-")}/videos`, {
          replace: true,
        });
      } else {
        setShowObj(null);
      }
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleShow(id);
    },
    // eslint-disable-next-line
    [id]
  );

  if (setObj && setObj.length === 0) {
    return null;
  }
  if (!setObj) {
    return <NotFound />;
  }

  const options = [
    {
      name: "Trailer",
      count: getVideoByType(setObj.videos.results, "Trailer").length,
    },
    {
      name: "Teaser",
      count: getVideoByType(setObj.videos.results, "Teaser").length,
    },
    {
      name: "Clip",
      count: getVideoByType(setObj.videos.results, "Clip").length,
    },
    {
      name: "Behind the Scenes",
      count: getVideoByType(setObj.videos.results, "Behind the Scenes").length,
    },
    {
      name: "Bloopers",
      count: getVideoByType(setObj.videos.results, "Bloopers").length,
    },
    {
      name: "Featurette",
      count: getVideoByType(setObj.videos.results, "Featurette").length,
    },
  ];

  return (
    <>
      <ShowHeader show={setObj} type={show} />
      <Tab heading="Videos" options={options} />
      {options.some((option) => option.name === activeTab) ? (
        <VideoList videos={getVideoByType(setObj.videos.results, activeTab)} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
