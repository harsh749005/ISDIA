import React from "react";
import Globe from "../assets/globe.png";
const Banner = () => {
  return (
    <>
      <div className="w-full h-full xl:h-max bg-black flex flex-col gap-6 lg:gap-8  px-2 md:px-10">
        {/* Main heading and  globe image holder */}
        <div className="flex ">


        <div className="flex gap-10 flex-col w-full">
          <h1 className="xl:w-[800px] w-full bg-black text-white font-poppins mt-10 lg:mt-20 text-5xl md:text-6xl xl:text-8xl ">
            Information System Design{" "}
            <span className="bg-[#9d66ff] line-clamp-1 w-max">and</span>{" "}
            Intelligent Applications.
          </h1>
          <p className="text-gray-500 text-sm md:w-[600px] lg:text-md font-poppins ">
            The International Conference on Information System Design and
            Intelligent Applications (ISDIA) is an annual event that brings
            together researchers, scientists, engineers, students, and
            practitioners from various industries to exchange and share their
            theories, methodologies, new ideas, experiences, products, and
            applications in the field of intelligent computing
          </p>
        </div>
        <div className="w-[600px] h-[600px] relative  opacity-55 hidden xl:block">
          <img
            src={Globe}
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        </div>
        <button className="relative btn w-max h-max  text-black px-8 py-2 font-poppins bg-white  hover:text-white ">
          <span className="font-medium">Contact</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
