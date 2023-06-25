import React, { useEffect } from "react";
import Header from "./sections/Header";
import ShowList from "./sections/ShowList";
import { useSearchParams } from "react-router-dom";
import NotFound from "../../components/NotFound";

export default function Morepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let activeTab = searchParams.get("activeTab");
  if (!activeTab) {
    activeTab = "Movie";
  }

  useEffect(
    () => {
      searchParams.set("page", 1);
      setSearchParams(searchParams, { replace: true });
    },
    // eslint-disable-next-line
    [activeTab]
  );

  if (activeTab !== "Movie" && activeTab !== "Series") {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <ShowList />
    </>
  );
}
