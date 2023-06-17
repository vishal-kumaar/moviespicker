import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchArea({ autoFocus }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let activeTab = searchParams.get("activeTab");
  let query = searchParams.get("query");

  if (!query) {
    query = "";
  }

  const [inputVal, setInputVal] = useState(query);

  if (!activeTab) {
    activeTab = "Movie";
  }

  const handleForm = (event) => {
    event.preventDefault();
    searchParams.set("query", inputVal);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleForm}
      className="bg-white border shadow-md flex rounded-3xl mt-12"
    >
      <input
        type="text"
        placeholder="Search for movies..."
        className="bg-transparent py-3.5 md:py-2.5 px-5 placeholder:font-firasans rounded-3xl outline-none w-full"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        autoFocus={autoFocus}
      />
      <button
        type="submit"
        className="rounded-3xl shadow-md font-signika px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white"
      >
        Search
      </button>
    </form>
  );
}
