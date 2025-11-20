"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-4 py-3 flex items-center gap-3 overflow-x-auto flex-nowrap no-scrollbar justify-between cursor-pointer">
      
      <button className="h-9 px-4 bg-black text-white rounded-xl font-medium whitespace-nowrap cursor-pointer">
        All
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Music
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Mixes
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Movie Fix
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Jukebox
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Live
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Arijit Singh
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Marathi Cinema
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Lofi
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Disha Vakani
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        DJ Mix
      </button>

      <button className="h-9 px-4 bg-gray-200 rounded-xl whitespace-nowrap cursor-pointer">
        Salman Khan
      </button>

    </div>
  );
};

export default Hero;
