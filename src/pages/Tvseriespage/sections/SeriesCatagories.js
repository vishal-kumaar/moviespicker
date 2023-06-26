import React, { useEffect, useState, useContext } from "react";
import SeriesCarousel from "../../../components/SeriesCarousel";
import LoadingContext from "../../../states/loading/LoadingContext";
import getTrendingSeries from "../../../apis/getTrendingSeries";
import getSeriesByGenre from "../../../apis/getSeriesByGenre";

export default function MoviesCatagory() {
  const { stopLoading } = useContext(LoadingContext);

  const [trendingSeries, setTrendingSeries] = useState(null);
  const [actionSeries, setActionSeries] = useState(null);
  const [scifiSeries, setScifiSeries] = useState(null);
  const [romanticSeries, setRomanticSeries] = useState(null);
  const [realitySeries, setRealitySeries] = useState(null);

  const handleSeries = async () => {
    const res1 = await getTrendingSeries(1);
    if (res1.success) {
      setTrendingSeries(res1.data.results);
    }

    const res2 = await getSeriesByGenre(10759, 1);
    if (res2.success) {
      setActionSeries(res2.data.results);
    }

    const res3 = await getSeriesByGenre(10765, 1);
    if (res3.success) {
      setScifiSeries(res3.data.results);
    }

    const res4 = await getSeriesByGenre(10749, 1);
    if (res4.success) {
      setRomanticSeries(res4.data.results);
    }

    const res5 = await getSeriesByGenre(10764, 1);
    if (res5.success) {
      setRealitySeries(res5.data.results);
    }
    stopLoading();
  };
  
  useEffect(
    () => {
      handleSeries();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      {trendingSeries && (
        <SeriesCarousel
          heading="Top 20 Today's Trending TV Series"
          textColor="text-black"
          textBefore="before:bg-black"
          bgImage="bg-pattern"
          bgPosition="bg-bottom"
          series={trendingSeries}
        />
      )}
      {actionSeries && (
        <SeriesCarousel
          heading="Top 20 Action TV Series"
          textColor="text-white"
          textBefore="before:bg-white"
          bgColor="bg-blue-900/60"
          bgImage="bg-actionSeriesImage"
          bgSize="bg-cover"
          bgAttachment="bg-fixed"
          bgPosition="bg-bottom"
          series={actionSeries}
        />
      )}
      {scifiSeries && (
        <SeriesCarousel
          heading="Top 20 Sci-Fi TV Series"
          textColor="text-black"
          textBefore="before:bg-black"
          series={scifiSeries}
        />
      )}
      {romanticSeries && (
        <SeriesCarousel
          heading="Top 20 Romantic TV Series"
          textColor="text-white"
          textBefore="before:bg-white"
          bgColor="bg-sky-900/60"
          bgImage="bg-romanticSeries"
          bgSize="bg-cover"
          bgAttachment="bg-fixed"
          bgPosition="bg-bottom"
          series={romanticSeries}
        />
      )}
      {realitySeries && (
        <SeriesCarousel
          heading="Top 20 Reality TV Series"
          textColor="text-black"
          textBefore="before:bg-black"
          series={realitySeries}
        />
      )}
    </>
  );
}