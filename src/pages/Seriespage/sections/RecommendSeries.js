import React, { useEffect, useState } from "react";
import SeriesCarousel from "../../../components/SeriesCarousel";
import getRecommendation from "../../../apis/getRecommendation";

export default function RecommendSeries({ seriesId }) {
  const [series, setSeries] = useState(null);

  const handleRecommendation = async (seriesId) => {
    const res = await getRecommendation(seriesId, "tv");
    if (res.success) {
      setSeries(res.data.results);
    }
  };

  useEffect(() => {
    handleRecommendation(seriesId);
  }, [seriesId]);
  return (
    <>
      {series && (
        <SeriesCarousel
          heading="Recommended Movies"
          textColor="text-black"
          textBefore="before:bg-black"
          series={series}
        />
      )}
    </>
  );
}
