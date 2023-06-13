import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Tab() {
  // eslint-disable-next-line
  const [searchParam, setSearchParam] = useSearchParams();
  const queryParam = searchParam.get("activeTab");
  const handleTab = (params, event) => {
    setSearchParam(`?activeTab=${params}`);
  };
  const activeTabStyle = (params) => {
    if (params == queryParam) {
      return "text-blue-500 border-blue-500";
    } else {
      return "text-black border-transparent";
    }
  };
  return (
    <div>
      <h1 className="w-full font-bold font-firasans text-xl bg-black/90 text-white px-6 md:px-14 py-2">
        Videos
      </h1>
      <div className="flex flex-nowrap overflow-x-auto gap-6 mx-auto w-full lg:w-fit md:gap-14 py-2 px-6 md:px-14 font-roboto text-base font-bold">
        <button
          onClick={() => handleTab("Trailer")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${
            queryParam
              ? activeTabStyle("Trailer")
              : "text-blue-500 border-blue-500"
          }`}
        >
          Trailer <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
        <button
          onClick={() => handleTab("Teaser")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${activeTabStyle(
            "Teaser"
          )}`}
        >
          Teaser <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
        <button
          onClick={() => handleTab("Clips")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${activeTabStyle(
            "Clips"
          )}`}
        >
          Clips <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
        <button
          onClick={() => handleTab("Behind the Scenes")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${activeTabStyle(
            "Behind the Scenes"
          )}`}
        >
          Behind the Scenes{" "}
          <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
        <button
          onClick={() => handleTab("Bloopers")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${activeTabStyle(
            "Bloopers"
          )}`}
        >
          Bloopers <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
        <button
          onClick={() => handleTab("Featurettes")}
          className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${activeTabStyle(
            "Featurettes"
          )}`}
        >
          Featurettes <span className="text-gray-400 ml-1 text-sm">2</span>
        </button>
      </div>
    </div>
  );
}
