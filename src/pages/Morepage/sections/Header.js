import React, { useEffect, useState } from "react";
import Tab from "../../../components/Tab";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  let activeTab = searchParams.get("activeTab");
  if (activeTab === "") {
    activeTab = "Movie";
  }

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

  useEffect(
    () => {
      const genreArr = genres.map((genre) => genre.value);
      searchParams.set("genres", genreArr.join("|"));
      setSearchParams(searchParams);
    },
    // eslint-disable-next-line
    [genres]
  );

  return (
    <section>
      <Tab heading="More Catagories" options={options} />
      <div className="w-full text-sm my-6 font-bold px-4 md:px-16">
        <Select
          isMulti
          options={activeTab === "Movie" ? movieGenres : seriesGenres}
          classNamePrefix="react-select"
          placeholder={"Genres..."}
          required={true}
          onChange={(selectedOption) => setGenres(selectedOption)}
          value={genres}
        />
      </div>
    </section>
  );
}
