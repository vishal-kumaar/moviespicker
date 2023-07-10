"use client";

import Tab from "@/components/Tab";
import queryString from "@/utils/queryString";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const movieGenres = [
  {
    value: "28",
    label: "Action",
  },
  {
    value: "12",
    label: "Adventure",
  },
  {
    value: "16",
    label: "Animation",
  },
  {
    value: "35",
    label: "Comedy",
  },
  {
    value: "80",
    label: "Crime",
  },
  {
    value: "99",
    label: "Documentary",
  },
  {
    value: "18",
    label: "Drama",
  },
  {
    value: "10751",
    label: "Family",
  },
  {
    value: "14",
    label: "Fantasy",
  },
  {
    value: "36",
    label: "History",
  },
  {
    value: "27",
    label: "Horror",
  },
  {
    value: "10402",
    label: "Music",
  },
  {
    value: "9648",
    label: "Mystery",
  },
  {
    value: "10749",
    label: "Romance",
  },
  {
    value: "878",
    label: "Science Fiction",
  },
  {
    value: "53",
    label: "Thriller",
  },
  {
    value: "10752",
    label: "War",
  },
];

const seriesGenres = [
  {
    value: "10759",
    label: "Action & Adventure",
  },
  {
    value: "16",
    label: "Animation",
  },
  {
    value: "35",
    label: "Comedy",
  },
  {
    value: "80",
    label: "Crime",
  },
  {
    value: "99",
    label: "Documentary",
  },
  {
    value: "18",
    label: "Drama",
  },
  {
    value: "10751",
    label: "Family",
  },
  {
    value: "10762",
    label: "Kids",
  },
  {
    value: "9648",
    label: "Mystery",
  },
  {
    value: "10763",
    label: "News",
  },
  {
    value: "10764",
    label: "Reality",
  },
  {
    value: "10765",
    label: "Sci-Fi & Fantasy",
  },
  {
    value: "10766",
    label: "Soap",
  },
  {
    value: "10767",
    label: "Talk",
  },
  {
    value: "10768",
    label: "War & Politics",
  },
  {
    value: "37",
    label: "Western",
  },
];

const options = [
  {
    name: "Movie",
    count: null,
  },
  {
    name: "Series",
    count: null,
  },
];

export default function Header() {
  const [genres, setGenres] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  let activeTab = searchParams.get("activeTab");
  if (!activeTab) {
    activeTab = "Movie";
  }

  const handleSelect = (selectedOptions) => {
    setGenres(selectedOptions);
    const genreArr = selectedOptions.map((genre) => genre.value);
    router.push(
      queryString({
        genres: genreArr.join("|"),
        activeTab: activeTab,
        page: 1,
      })
    );
  };

  useEffect(
    () => {
      let searchGenres = searchParams.get("genres");
      if (searchGenres) {
        let existingGenres = (
          activeTab === "Movie" ? movieGenres : seriesGenres
        ).filter((genre) => searchGenres.split("|").includes(genre.value));
        setGenres(existingGenres);
      }
    },
    // eslint-disable-next-line
    [activeTab]
  );

  return (
    <section>
      <Tab heading="More Catagories" options={options} />
      <div className="w-full text-sm my-6 font-bold px-6 md:px-16">
        <Select
          isMulti
          options={activeTab === "Movie" ? movieGenres : seriesGenres}
          classNamePrefix="react-select"
          placeholder={"Genres..."}
          required={true}
          onChange={handleSelect}
          value={genres}
        />
      </div>
    </section>
  );
}
