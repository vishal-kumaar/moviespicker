import React, { useEffect, useState } from "react";
import SearchArea from "../../components/SearchArea";
import MoviesList from "../../components/MoviesList";
import PersonList from "../../components/PersonList";
import Tab from "../../components/Tab";
import NotFound from "../../components/NotFound";
import { useSearchParams } from "react-router-dom";
import search from "../../apis/search";

export default function Searchpage() {
  const [results, setResults] = useState(null);

  const [searchParam] = useSearchParams();
  let activeTab = searchParam.get("activeTab");
  let query = searchParam.get("query");
  let pageNum = searchParam.get("page");

  if (!query) {
    query = "";
  }

  if (!activeTab) {
    activeTab = "Movie";
  }

  if (!pageNum) {
    pageNum = 1;
  }

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

  const handleSearch = async (query, searchFor, page) => {
    const res = await search(query, searchFor, page);
    if (res.success === true) {
      setResults(res);
    }
  };

  useEffect(() => {
    handleSearch(query, activeTab, pageNum);
  }, [query, activeTab, pageNum]);

  if (activeTab !== "Movie" && activeTab !== "Person") {
    return <NotFound />;
  }

  return (
    <>
      <Tab heading="Movie/Person" options={options} />
      <div className="px-6 md:px-16 mt-16">
        <SearchArea
          autoFocus={false}
          placeholder={`Search for ${
            activeTab ? activeTab.toLowerCase() : "movies"
          }...`}
        />
        <h1 className="font-bold font-signika text-3xl mt-16">Search Result</h1>
        <hr className="border mt-2 border-black/10" />
        {results &&
          (activeTab === "Movie" ? (
            <MoviesList data={results.movie} />
          ) : (
            <PersonList data={results.person} />
          ))}
      </div>
    </>
  );
}
