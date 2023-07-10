"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import search from "@/apis/search";
import SearchArea from "@/components/SearchArea";
import ShowList from "@/components/ShowList";
import Tab from "@/components/Tab";
import LoadingContext from "@/contexts/loading/LoadingContext";
import NotFound from "@/components/NotFound";
import PersonList from "@/components/PersonList";
import queryString from "@/utils/queryString";
import addSeo from "@/utils/addSeo";
import { searchPage } from "@/utils/getSeo";

export default function Searchpage() {
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const isMounted = useRef(false);
  const [results, setResults] = useState([]);

  const router = useRouter();
  const searchParam = useSearchParams();
  let activeTab = searchParam.get("activeTab");
  let query = searchParam.get("query");
  let pageNum = searchParam.get("page");

  useEffect(
    () => {
      if (isMounted.current) {
        router.replace(
          queryString({
            page: 1,
          })
        );
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
    router.replace(
      queryString({
        page: 1,
      })
    );
  }

  const options = [
    {
      name: "Movie",
      count: null,
    },
    {
      name: "Series",
      count: null,
    },
    {
      name: "Person",
      count: null,
    },
  ];

  const handleSearch = async (query, searchFor, page) => {
    startLoading();
    const res = await search(query, searchFor, page);
    if (res.success) {
      setResults(res);
    }
    stopLoading();
  };

  useEffect(
    () => {
      handleSearch(query, activeTab, pageNum);
      addSeo(
        `${query ? query + " |" : ""} Search | Movies Picker`,
        searchPage.description
      );
    },
    // eslint-disable-next-line
    [query, activeTab, pageNum]
  );

  if (!options.some((option) => option.name === activeTab)) {
    return <NotFound />;
  }

  return (
    <>
      <Tab heading="Movies/Series/Persons" options={options} />
      <div className="px-6 md:px-16">
        <SearchArea
          isRedirect={false}
          placeholder={`Search for any ${
            activeTab ? activeTab.toLowerCase() : "movies"
          }...`}
        />
        <h1 className="font-bold font-signika text-3xl mt-16">Search Result</h1>
        <hr className="border mt-2 border-black/10" />
        {query ? (
          <>
            {activeTab === "Movie" && (
              <ShowList
                showType="movie"
                data={results.movie ? results.movie : results}
              />
            )}
            {activeTab === "Series" && (
              <ShowList
                showType="series"
                data={results.series ? results.series : results}
              />
            )}
            {activeTab === "Person" && (
              <PersonList data={results.person ? results.person : results} />
            )}
          </>
        ) : (
          <div className="text-center font-firasans text-gray-600 text-lg py-16">
            Search for any {activeTab.toLocaleLowerCase()} to see results here.
          </div>
        )}
      </div>
    </>
  );
}
