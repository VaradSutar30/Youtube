import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiMicrophoneBold } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full py-full flex justify-between items-center h-10 w010 py-10 px-2 flex-nowrap cursor-pointer">

      {/* YouTube Logo + PNG */}
      <div className="flex items-center gap-4 justify-between cursor-pointer">
        <Image
          src={"/images/yt.png"}
          alt="logo"
          height={100}
          width={100}
          className="h-auto w-30 justify-between"
        />
      </div>

      {/* Search Box */}
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="rounded-3xl border border-zinc-300 flex items-center cursor-pointer">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-120 px-2 outline-none"
          />

          <button className="h-8 w-8 flex items-center justify-center rounded-r-3xl cursor-pointer">
            <IoSearch size={24} />
          </button>
        </div>

        {/* Microphone Button */}
        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
          <PiMicrophoneBold size={24} />
        </button>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-4 justify-between cursor-pointer">
        <button className="h-8 px-4 flex items-center gap-1 bg-gray-200 rounded-3xl cursor-pointer">
          <IoAdd size={24} />
          Create
        </button>

        <button className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full bg-gray-200">
          <FaRegBell size={24} />
        </button>

        <button className="h-8 w-8 flex items-center justify-center gap-5 rounded-full bg-gray-200 cursor-pointer">
          <FaRegUserCircle size={24} />
        </button>
      </div>

      

    </div>
  );
};

export default Navbar;
