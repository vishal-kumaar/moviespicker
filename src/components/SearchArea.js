import React from "react";

export default function SearchArea() {
  return (
    <div className="bg-white flex rounded-3xl mt-12">
      <input
        type="text"
        placeholder="Search for movies..."
        className="bg-transparent py-3.5 md:py-2.5 px-5 placeholder:font-firasans rounded-3xl outline-none w-full"
      />
      <button className="rounded-3xl font-signika px-8 bg-gradient-to-r from-yellow-500 to-purple-500 text-white">
        Search
      </button>
    </div>
  );
}
