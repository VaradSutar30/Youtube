"use client";
import React from "react";
import Image from "next/image";   // <-- IMPORTANT

const Feed = () => {
  return (
    <div className="px-4 py-6 flex gap-4">

      {/* Thumbnail 1 */}
      <div className="flex gap-4">
        <Image
          src="/images/thumbnail.jpg"   // Make sure this file exists in /public/images/
          alt="Thumbnail 1"
          width={360}
          height={200}
          className="rounded-xl flex gap-4"
        />
        <h2 className="mt-2 font-semibold  flex flex-col">Now Spicy Cooking Let Try</h2>
        <h3 className="flex-col">Varad Sutar</h3>

        <Image
          src="/images/thumbnail.jpg"   // Make sure this file exists in /public/images/
          alt="Thumbnail 1"
          width={360}
          height={200}
          className="rounded-xl flex flex-col gap-4"
        />
        <h2 className="mt-2 font-semibold flex flex-col">Now Spicy Cooking Let Try</h2>
        <h3 className="flex flex-col">Varad Sutar</h3>

      </div>

    </div>
  );
};

export default Feed;
