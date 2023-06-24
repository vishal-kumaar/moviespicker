import React from "react";
import SeriesCarousel from "../../../components/SeriesCarousel";

export default function PersonSeries({ series }) {
  return (
    <>
      {series.length > 0 && (
        <>
          <div className="pl-2 -mt-14">
            <SeriesCarousel
              heading="Known for series"
              textColor="black"
              textBefore="before:bg-black"
              series={series}
            />
          </div>
        </>
      )}
    </>
  );
}
