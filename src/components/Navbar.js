import React from "react";
import searchIcon from "../assets/icons/search.svg";
import hamburger from "../assets/icons/hamburger.svg";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils";

export default function Navbar() {
  return (
    <Headroom>
      <nav
        className={`flex justify-between items-center z-50 px-6 md:px-12 py-6 bg-white shadow-2xl shadow-black/40`}
      >
        <img
          src={hamburger}
          alt="menu"
          className="w-6 cursor-pointer block md:hidden"
        />
        <div className="flex items-center gap-14">
          <Link to="/" onClick={scrollToTop} className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 font-cherrybomb -mt-2 cursor-pointer">
            Movies Picker
          </Link>
          <Link
            to="/"
            className="font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 hover:text-black/70 hover:underline underline-offset-4 cursor-pointer hidden md:block"
          >
            Explore
          </Link>
          <Link
            to="/filter"
            onClick={scrollToTop}
            className="font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 hover:text-black/70 hover:underline underline-offset-4 cursor-pointer hidden md:block "
          >
            Recommand Movies
          </Link>
        </div>
        <Link to="/search" onClick={scrollToTop}>
          <img src={searchIcon} alt="search" className="w-6 cursor-pointer" />
        </Link>
      </nav>
    </Headroom>
  );
}
