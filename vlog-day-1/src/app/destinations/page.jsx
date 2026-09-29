"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Desination = () => {
  const cities = ["paris", "london", "china"];
  const router = useRouter();
  return (
    <div className="h-screen ">
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <div className="p-4">Choose your Destination</div>
        {cities.map((val, index) => {
          return (
            <div
              key={index}
              className="w-36 h-16 flex items-center justify-center cursor-pointer px-5 py-4 hover:bg-slate-400 rounded-xl bg-white"
              onClick={() => {
                router.push(`/destinations/${val}`);
              }}
            >
              {val.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desination;
