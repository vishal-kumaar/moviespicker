"use client";

import React, { useContext } from "react";
import SidebarContext from "../contexts/sidebar/SidebarContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext);
  const pathname = usePathname();

  const handleActiveNav = (path) => {
    const basePath = pathname.split("/")[1];
    return basePath === path && "active";
  };

  return (
    <nav
      className={`flex justify-between items-center z-30 px-6 md:px-12 py-5 bg-white shadow-2xl shadow-black/40 sticky top-0 left-0 w-full`}>
      <Image
        width={24}
        height={24}
        src="/icons/hamburger.svg"
        alt="menu"
        className="w-6 cursor-pointer block md:hidden"
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-14">
        <Link
          href="/"
          className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 font-cherrybomb -mt-2 cursor-pointer">
          Movies Picker
        </Link>
        <Link
          href="/"
          className={`font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block ${handleActiveNav(
            ""
          )} ${handleActiveNav("movie")}`}>
          Movies
        </Link>
        <Link
          href="/series"
          className={`font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block ${handleActiveNav(
            "series"
          )}`}>
          TV Series
        </Link>
        <Link
          href="/more?page=1"
          className={`font-bold font-poppins text-black/50 bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 border-b-2 border-transparent hover:text-black/70 hover:border-[#C1789F] cursor-pointer hidden md:block ${handleActiveNav(
            "more"
          )}`}>
          More
        </Link>
      </div>
      <Link href="/search">
        <Image
          width={24}
          height={24}
          src="/icons/search.svg"
          alt="search"
          className="w-6 cursor-pointer"
        />
      </Link>
    </nav>
  );
}
