import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "28", label: "Action" },
  { value: "12", label: "Adventure" },
  { value: "16", label: "Animation" },
  { value: "35", label: "Comedy" },
  { value: "80", label: "Crime" },
  { value: "99", label: "Documentary" },
  { value: "18", label: "Drama" },
  { value: "10751", label: "Family" },
  { value: "14", label: "Fantasy" },
  { value: "36", label: "History" },
  { value: "27", label: "Horror" },
  { value: "10402", label: "Music" },
  { value: "9648", label: "Mystery" },
  { value: "10749", label: "Romance" },
  { value: "878", label: "Science Fiction" },
  { value: "53", label: "Thriller" },
  { value: "10752", label: "War" },
];

export default function MovieFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [genres, setGenres] = useState(null);
  const [releaseYear, setRealaseYear] = useState({
    from: "",
    to: "",
  });

  const [ratting, setRatting] = useState("");
  const [runtime, setRuntime] = useState({
    hrs: "",
    mints: "",
  });

  const [sortBy, setSortBy] = useState("popularity");
  const [sortingOrder, setSortingOrder] = useState("desc");
  const [language, setLanguage] = useState("");
  const [adult, setAdult] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    if (genres) {
      const genre = genres.map((genre) => genre.value).join(",");
      searchParams.set("genre", genre);
    }

    if (releaseYear.from) {
      searchParams.set("release_from", releaseYear.from);
    }

    if (releaseYear.to) {
      searchParams.set("release_to", releaseYear.to);
    }

    if (ratting) {
      searchParams.set("ratting", ratting);
    }

    if (runtime.hrs || runtime.mints) {
      const time = Number(runtime.hrs) * 60 + Number(runtime.mints);
      searchParams.set("runtime", time);
    }

    if (language) {
      searchParams.set("language", language);
    }

    searchParams.set("sort_by", sortBy);
    searchParams.set("sort_order", sortingOrder);
    searchParams.set("adult", adult);

    setSearchParams(searchParams);
  };

  return (
    <section className="py-10 px-5 sm:px-8 lg:px-52 font-poppins font-bold">
      <h1 className="text-4xl font-signika text-black/90 text-center mt-5 mb-10">
        Movie Recommandation
      </h1>
      <form onSubmit={handleForm}>
        <div className="w-full text-sm mb-6 font-bold">
          <Select
            isMulti
            options={options}
            classNamePrefix="react-select"
            placeholder={"Genres..."}
            required={true}
            onChange={(selectedOption) => setGenres(selectedOption)}
            value={genres}
          />
        </div>
        <div className="flex items-center gap-1 mb-4">
          <p className="text-sm font-medium mr-4">Release year:</p>
          <p className="text-[14px] font-semibold mr-1">From</p>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 text-center py-2"
            placeholder="0"
            min={0}
            value={releaseYear.from}
            onChange={(event) =>
              setRealaseYear((prevReleaseYear) => ({
                ...prevReleaseYear,
                from: event.target.value,
              }))
            }
          />
          <p className="text-[14px] font-semibold ml-2 mr-1">to</p>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 text-center py-2"
            min={0}
            placeholder="0"
            value={releaseYear.to}
            onChange={(event) =>
              setRealaseYear((prevReleaseYear) => ({
                ...prevReleaseYear,
                to: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-4">
          <select
            id="ratting"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            value={ratting}
            onChange={(event) => setRatting(event.target.value)}
          >
            <option defaultChecked>Choose ratting</option>
            <option value="9">9 & Above</option>
            <option value="8">8 & Above</option>
            <option value="7">7 & Above</option>
            <option value="6">6 & Above</option>
            <option value="5">5 & Above</option>
          </select>
        </div>
        <div className="flex items-center mb-6">
          <p className="text-sm font-medium mr-3">Maximum runtime:</p>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 text-center py-2"
            placeholder="0"
            value={runtime.hrs}
            onChange={(event) =>
              setRuntime((prevRuntime) => ({
                ...prevRuntime,
                hrs: event.target.value,
              }))
            }
          />
          <p className="text-[14px] font-semibold mx-1">hrs</p>
          <span className="font-bold text-lg mx-2">:</span>
          <input
            type="number"
            min={0}
            max={60}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 text-center py-2"
            placeholder="0"
            value={runtime.mints}
            onChange={(event) =>
              setRuntime((prevRuntime) => ({
                ...prevRuntime,
                mints: event.target.value,
              }))
            }
          />
          <p className="text-[14px] font-semibold ml-1">mints</p>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <p className="text-sm font-medium">Sort by:</p>
          <div className="flex items-center pl-4">
            <input
              id="popularity"
              type="radio"
              value="popularity"
              name="sortby"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={sortBy === "popularity"}
              onChange={(event) => setSortBy(event.target.value)}
            />
            <label
              htmlFor="popularity"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Popularity
            </label>
          </div>
          <div className="flex items-center pl-4">
            <input
              id="runtime"
              type="radio"
              value="with_runtime"
              name="sortby"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={sortBy === "with_runtime"}
              onChange={(event) => setSortBy(event.target.value)}
            />
            <label
              htmlFor="runtime"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Runtime
            </label>
          </div>
          <div className="flex items-center pl-4">
            <input
              id="vote"
              type="radio"
              value="vote_average"
              name="sortby"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={sortBy === "vote_average"}
              onChange={(event) => setSortBy(event.target.value)}
            />
            <label
              htmlFor="vote"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Ratting
            </label>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-6">
          <p className="text-sm font-medium">Sorting order:</p>
          <div className="flex items-center pl-4">
            <input
              id="higherToLower"
              type="radio"
              value="desc"
              name="sortingOrder"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={sortingOrder === "desc"}
              onChange={(event) => setSortingOrder(event.target.value)}
            />
            <label
              htmlFor="higherToLower"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Higher to lower
            </label>
          </div>
          <div className="flex items-center pl-4">
            <input
              id="lowerToHigher"
              type="radio"
              value="asc"
              name="sortingOrder"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={sortingOrder === "asc"}
              onChange={(event) => setSortingOrder(event.target.value)}
            />
            <label
              htmlFor="lowerToHigher"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Lower to higher
            </label>
          </div>
        </div>
        <div className="mb-5">
          <select
            id="language"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option defaultChecked>Choose language</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="bg">Bulgarian</option>
            <option value="bn">Bengali</option>
            <option value="ca">Catalan</option>
            <option value="ch">Chamorro</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
            <option value="el">Greek</option>
            <option value="eo">Esperanto</option>
            <option value="eu">Basque</option>
            <option value="fa">Persian</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="ha">Hausa</option>
            <option value="hu">Hungarian</option>
            <option value="id">Indonesian</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ka">Georgian</option>
            <option value="kn">Kannada</option>
            <option value="ko">Korean</option>
            <option value="lt">Lithuanian</option>
            <option value="ml">Malayalam</option>
            <option value="nb"> Norwegian Bokmål</option>
            <option value="nl">Dutch</option>
            <option value="no">Norwegian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sk">Slovak</option>
            <option value="sl">Slovenian</option>
            <option value="sr">Serbian</option>
            <option value="sv">Swedish</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukrainian</option>
            <option value="vi">Vietnamese</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
        <div className="flex items-center gap-1 mb-8">
          <p className="text-sm font-medium">Adult:</p>
          <div className="flex items-center pl-4">
            <input
              id="yes"
              type="radio"
              value={true}
              name="adult"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              checked={adult}
              onChange={() => setAdult(true)}
            />
            <label
              htmlFor="yes"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center pl-4">
            <input
              id="no"
              type="radio"
              value={false}
              name="adult"
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  cursor-pointer"
              checked={!adult}
              onChange={() => setAdult(false)}
            />
            <label
              htmlFor="no"
              className="w-full ml-2 text-sm font-bold text-gray-900 cursor-pointer"
            >
              No
            </label>
          </div>
        </div>
        <button className="bg-gradient-to-r from-yellow-500 to-purple-500 text-white text-base font-medium py-2 rounded-xl mx-auto block w-full hover:opacity-90">
          Filter
        </button>
      </form>
    </section>
  );
}
