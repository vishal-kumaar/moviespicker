import React from "react";
import searchIcon from "../../assets/icons/search.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-14 py-4 bg-black/5 shadow-xl">
      <div className="flex items-center gap-10">
        <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-cherrybomb -mt-2">Movies Picker</h1>
        <div className="font-bold hover:bg-black hover:text-white px-3 py-2 rounded-xl">Home</div>
        <div className="font-bold">Trending Movies</div>
      </div>
      <img src={searchIcon} alt="search" className="w-6" />
    </nav>
  );
}
