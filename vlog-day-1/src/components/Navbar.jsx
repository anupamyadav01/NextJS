"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className=" flex justify-between p-2 fixed top-0 w-full bg-white">
      <div className="px-4 py-1.5 ">Travel Guide</div>
      <div>
        <ul className="flex gap-4">
          <Link
            href={"/"}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-black ${
              path === "/"
                ? "bg-red-400 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/destinations"}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-black ${
              path === "/destinations"
                ? "bg-red-400 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <li>Destinations</li>
          </Link>
          <Link
            href={"/contact"}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-black ${
              path === "/contact"
                ? "bg-red-400 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
