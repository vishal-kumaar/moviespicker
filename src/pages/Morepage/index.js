import React, { useEffect, useRef } from "react";
import Header from "./sections/Header";
import ShowList from "./sections/ShowList";
import { useSearchParams } from "react-router-dom";
import NotFound from "../../components/NotFound";

export default function Morepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef(false);
  let activeTab = searchParams.get("activeTab");
  if (!activeTab) {
    activeTab = "Movie";
  }

  useEffect(
    () => {
      if (ref.current) {
        searchParams.set("page", 1);
        setSearchParams(searchParams, { replace: true });
      } else {
        ref.current = true;
      }
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
