"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SeasonList from "@/components/SeasonList";

export default function LastSeason({ series }) {
  const router = useRouter();
  const lastSeason = series && series.seasons && series.seasons.filter(
    (season) => season.season_number === series.number_of_seasons
  );
  return (
    <section className="px-6 md:px-12 my-5">
      <h1 className="relative font-signika text-3xl before:absolute before:w-20 before:h-1.5 before:-top-3.5 before:left-0 before:bg-black mb-5">
        Last Season
      </h1>
      <SeasonList seasons={lastSeason} desc="short" />
      <button
        className="mt-5 font-firasans font-bold"
        onClick={() => router.push(`/series/${series.id}/seasons`)}>
        View All Seasons →
      </button>
    </section>
  );
}
