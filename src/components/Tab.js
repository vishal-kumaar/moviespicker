import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Tab({ heading, options }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const activeTab = searchParam.get("activeTab");

  const handleTab = (tab) => {
    setSearchParam(`?activeTab=${tab}`);
  };

  const activeTabStyle = (tab) => {
    if (tab === activeTab) {
      return "text-blue-500 border-blue-500";
    } else {
      return "text-black border-transparent";
    }
  };
  return (
    <div>
      <h1 className="w-full font-bold font-firasans text-xl bg-black/90 text-white px-6 md:px-14 py-2.5">
        {heading}
      </h1>
      <div className="flex flex-nowrap overflow-x-auto gap-6 mx-auto w-full lg:w-fit md:gap-14 py-2.5 pl-6 pr-3 md:px-14 font-roboto text-base font-bold justify-center">
        {options &&
          options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleTab(option.name)}
              className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${
                (activeTab || index !== 0)
                  ? activeTabStyle(option.name)
                  : "text-blue-500 border-blue-500"
              }`}
            >
              {option.name} {
                option.count && (
                    <span className="text-gray-400 ml-1 text-sm">{option.count}</span>
                )
              }
            </button>
          ))}
      </div>
      <hr />
    </div>
  );
}