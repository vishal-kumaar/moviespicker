import React from "react";
import searchIcon from "../assets/icons/search.svg";

export default function Navbar() {
  return (
      <nav
        className={`flex justify-between items-center z-50 px-12 py-4 bg-white shadow-2xl sticky top-0 left-0`}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-cherrybomb -mt-2 cursor-pointer">
            Movies Picker
          </h1>
          <div className="font-bold hover:bg-black/70 hover:text-white cursor-pointer px-3 py-2 rounded-xl">
            Explore
          </div>
          <div className="font-bold hover:bg-black/70 hover:text-white cursor-pointer px-3 py-2 rounded-xl">
            Recommand Movies
          </div>
        </div>
        <img src={searchIcon} alt="search" className="w-6 cursor-pointer" />
      </nav>
  );
}
