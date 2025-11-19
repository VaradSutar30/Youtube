import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full px-2 py-full flex items-center gap-3 flex-row ">
      <button className="h-9 px-4 flex items-center gap-1 bg-black text-white rounded font-medium rounded-xl">
        All
      </button>
      <button className="h-8 px-4 flex-row items-center gap-3 rounded-xl bg-gray-200 rounded flex-nowrap ">
        Music
      </button>
      <button className="h-8 px-4 flex-row items-center gap-3  rounded-xl bg-gray-200 rounded flex-nowrap text-xs">
        Mixes
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded  rounded-xl text-xs font-medium">
        Movie fix
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded rounded-xl text-xs">
        Jukebox
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded rounded-xl text-xs">
        Live
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded text-xs rounded-xl">
        Arjit Singh
      </button>
      <button className="h-8 w-fix flex px-4 bg-gray-200 rounded text-xs rounded-xl">
        Marathi Cinema
      </button>
      <button className="h-8 w-full px-4 text-xs bg-gray-200 rounded text-xs rounded-xl">
        Lofi 
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded text-xs rounded-xl">
        Disha Vakani
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded text-xs rounded-xl">
        Dj Mix
      </button>
      <button className="h-8 w-full px-4 bg-gray-200 rounded text-xs rounded-xl">
        Salaman Khan
      </button>

      


      </div>

      
  );
};

export default Hero;
