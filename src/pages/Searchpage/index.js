import React, { useEffect, useRef, useState } from "react";
import SearchArea from "../../components/SearchArea";
import MoviesList from "../../components/MoviesList";
import PersonList from "../../components/PersonList";
import Tab from "../../components/Tab";
import NotFound from "../../components/NotFound";
import { useSearchParams } from "react-router-dom";
import search from "../../apis/search";

export default function Searchpage() {
  const isMounted = useRef(false);
  const [results, setResults] = useState(null);

  const [searchParam, setSearchParam] = useSearchParams();
  let activeTab = searchParam.get("activeTab");
  let query = searchParam.get("query");
  let pageNum = searchParam.get("page");

  useEffect(
    () => {
      if (isMounted.current) {
        searchParam.set("page", 1);
        setSearchParam(searchParam);
      } else {
        isMounted.current = true;
      }
    },
    // eslint-disable-next-line
    [activeTab]
  );

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

  if (!results) {
    return null;
  }

  return (
    <>
      <Tab heading="Movie/Person" options={options} />
      <div className="px-6 md:px-16 mt-16">
        <SearchArea
          redirect={false}
          placeholder={`Search for ${
            activeTab ? activeTab.toLowerCase() : "movies"
          }...`}
        />
        <h1 className="font-bold font-signika text-3xl mt-16">Search Result</h1>
        <hr className="border mt-2 border-black/10" />
        {query ? (
          activeTab === "Movie" ? (
            <MoviesList data={results.movie} />
          ) : (
            <PersonList data={results.person} />
          )
        ) : (
          <div className="text-center font-firasans text-gray-600 text-lg py-16">
            Search for any movie to see results here.
          </div>
        )}
      </div>
    </>
  );
}
