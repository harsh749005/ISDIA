import React from "react";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";

const Countries = () => {
  const countryNames = [
    "India",
    "Australia",
    "China",
    "France",
    "Ireland",
    "South Korea",
    "Malaysia",
    "Morocco",
    "Moldova",
    "Nigeria",
    "Norway",
    "Russia",
    "Saudi Arabia",
    "Korea",
    "Spain",
    "Taiwan",
    "USA",
    "Vietnam",
    "Yemen",
    "Mauritius",
    "Netherlands",
    "South Africa",
    "Thailand",
    "Czech Republic",
    "Switzerland",
    "Sweden",
    "UAE",
  ];
  return (
    <div className="bg-black px-2 md:px-10 py-20 flex flex-col gap-10">
      
      <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">
        Participating Countries
      </h1>
      <div className="flex items-center gap-5 flex-wrap">
        {/* map them */}
        {countryNames.map((name) => (
          <span className="text-white text-sm md:text-md lg:text-lg  w-max px-2 bg-[#9d66ff] font-medium italic font-poppins">
            {name}
          </span>
        ))}
      </div>
      <InfiniteScroll />
    </div>
  );
};

export default Countries;
