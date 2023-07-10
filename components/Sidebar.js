"use client";

import React, { useContext } from "react";
import SidebarContext from "../contexts/sidebar/SidebarContext";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      className={`${
        sidebar ? "z-50 fixed top-0 left-0" : "-z-50 static"
      } bg-transparent/60 w-full h-full`}>
      <div
        id="sidebar"
        className={`bg-transparent z-50 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }
      } w-full h-full fixed top-0 left-0 z-30 transition duration-700 ease-in-out`}>
        <aside
          className={`flex flex-col fixed w-fit h-screen bg-white transform ease-in-out duration-500`}>
          <div className="flex items-center py-12 px-6 gap-20 justify-between bg-gradient-to-r from-yellow-500 to-purple-500">
            <Link
              href="/"
              className="text-white text-3xl cursor-pointer font-bold font-signika"
              onClick={toggleSidebar}>
              Movies Picker
            </Link>
            <Image
              width={28}
              height={28}
              src="/icons/close.svg"
              alt="close"
              className="w-7 cursor-pointer invert"
              onClick={toggleSidebar}
            />
          </div>
          <div className="text-gray-600 font-bold mt-7 flex flex-col px-6">
            <Link
              href="/"
              className="text-lg font-poppins w-full font-bold my-1 py-3 px-2 flex items-center tracking-wider"
              onClick={toggleSidebar}>
              Movies
            </Link>
            <Link
              href="/series"
              className="text-lg font-poppins w-full font-bold my-1 py-3 px-2 flex items-center tracking-wider"
              onClick={toggleSidebar}>
              TV Series
            </Link>
            <Link
              href="/search?activeTab=Person"
              className="text-lg font-poppins w-full font-bold my-1 py-3 px-2 flex items-center tracking-wider"
              onClick={toggleSidebar}>
              People
            </Link>
            <Link
              href="/more?page=1"
              className="text-lg font-poppins w-full font-bold my-1 py-3 px-2 flex items-center tracking-wider"
              onClick={toggleSidebar}>
              More
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
