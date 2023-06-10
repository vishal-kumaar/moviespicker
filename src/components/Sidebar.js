import React from "react";
import close from "../assets/icons/close.svg";

export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className={`bg-transparent/70 translate-x-0
      } w-full h-full fixed top-0 left-0 z-50 transition duration-700 ease-in-out`}
    >
      <div
        className={`flex flex-col fixed w-fit h-screen pt-10 px-6 bg-white transform ease-in-out duration-500`}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 font-cherrybomb -mt-2 cursor-pointer">
            Movies Picker
          </h1>
          <img src={close} alt="close" className="w-7 cursor-pointer" />
        </div>
        <hr className="border mt-8" />
        <div className="text-gray-600 font-bold mt-7 flex flex-col">
          <div className="text-lg font-signika my-1 py-2 px-2 w-52 flex items-center">
            Home
          </div>
          <div className="text-lg font-signika my-1 py-2 px-2 w-52 flex items-center">
            Recommand Movies
          </div>
        </div>
      </div>
    </aside>
  );
}
