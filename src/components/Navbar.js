import React, { useContext } from "react";
import searchIcon from "../assets/icons/search.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { NavLink } from "react-router-dom";
import SidebarContext from "../states/sidebar/SidebarContext";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <nav
      className={`flex justify-between items-center z-40 px-6 md:px-12 py-5 bg-white shadow-2xl shadow-black/40 fixed top-0 left-0 w-full`}
    >
      <img
        src={hamburger}
        alt="menu"
        className="w-6 cursor-pointer block md:hidden"
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-14">
        <NavLink
          to="/movie"
          className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 font-cherrybomb -mt-2 cursor-pointer"
        >
          Movies Picker
        </NavLink>
        <NavLink
          to="/movie"
          activeclassname="active"
          className="font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block"
        >
          Movies
        </NavLink>
        <NavLink
          to="/series"
          activeclassname="active"
          className="font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block"
        >
          TV Series
        </NavLink>
        <NavLink
          to="/more?page=1"
          activeclassname="active"
          className="font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block "
        >
          More
        </NavLink>
      </div>
      <NavLink to="/search">
        <img src={searchIcon} alt="search" className="w-6 cursor-pointer" />
      </NavLink>
    </nav>
  );
}
