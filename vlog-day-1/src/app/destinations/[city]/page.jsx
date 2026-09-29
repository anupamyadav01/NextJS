"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const CityPage = () => {
  console.log("we are here city page");

  const params = useParams();
  const rawCity = params?.city;

  // Format city: decode %20, replace dashes, and capitalize words
  const cityName = rawCity
    ? decodeURIComponent(Array.isArray(rawCity) ? rawCity[0] : rawCity)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    : "Loading...";

  return (
    <main className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-6">
      <div className="relative flex flex-col items-center justify-center p-12 max-w-lg w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl text-center">
        {/* City Heading */}
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-sm mb-3">
          Welcome to <span className="text-red-400">{cityName}</span>
        </h1>

        <p className="text-zinc-400 text-sm max-w-xs mb-8">
          Explore attractions, local culture, and guides for your trip to{" "}
          {cityName}.
        </p>

        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-white/10 hover:bg-white/15 px-5 py-2.5 rounded-xl transition duration-200"
        >
          ← Back to Destinations
        </Link>
      </div>
    </main>
  );
};

export default CityPage;
