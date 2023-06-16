import React from "react";
import SearchArea from "../../components/SearchArea";
import MoviesList from "../../components/MoviesList";
import PersonList from "../../components/PersonList";
import Tab from "../../components/Tab";
import NotFound from "../../components/NotFound";
import { useSearchParams } from "react-router-dom";

export default function Searchpage() {
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("activeTab");

  const options = [
    {
      name: "Movie",
      count: null,
    },
    {
      name: "Person",
      count: null,
    },
  ];
  return (
    <>
      <Tab heading="Movie/Person" options={options} />
      {!activeTab || activeTab === "Movie" || activeTab === "Person" ? (
        <div className="px-6 md:px-16 mt-16">
          <SearchArea
            autoFocus={false}
            placeholder={`Search for ${
              activeTab ? activeTab.toLowerCase() : "movies"
            }...`}
          />
          <h1 className="font-bold font-signika text-3xl mt-16">
            Search Result
          </h1>
          <hr className="border mt-2 border-black/10" />
          {!activeTab || activeTab === "Movie" ? (
            <MoviesList />
          ) : (
            <PersonList />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
