import React from "react";

import "./style.css";
const Events = () => {
  return (
    <div className="bg-black w-full md:h-full h-max flex flex-col md:flex md:flex-row">
      <div className="md:w-1/2 bg-black px-2 md:px-5 lg:px-10 py-20 flex flex-col gap-5">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">Events</h1>
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="text-gray-500 font-medium lg:text-xl xl:text-2xl font-poppins">9th International Conference on
          Information System Design & Intelligent Applications (ISDIA 2025)</h2>
          <h3 className="text-white w-max  px-2 xl:px-4 bg-[#9d66ff] font-medium md:text-sm lg:text-lg xl:text-xl italic font-poppins">(Theme: AI for Healthcare)</h3>
          <h2 className="text-gray-600  font-medium md:text-sm lg:text-lg xl:text-xl font-poppins">Organized by : University of Wollongong in Dubai (UOWD)</h2>
          <h2 className="text-gray-600  font-medium md:text-sm lg:text-lg xl:text-xl font-poppins">In association with
          <span className="text-white w-max px-2 xl:px-4 bg-[#9d66ff]">Hive Pro, Dubai</span></h2>
          <h2 className="text-gray-400  font-medium md:text-sm lg:text-md xl:text-xl font-poppins">📅 Date: January 3-4, 2025</h2>
          <h2 className="text-gray-400  font-medium md:text-sm lg:text-md xl:text-xl font-poppins">📍 Venue: University of Wollongong in Dubai (UOWD)</h2>
        </div>
      </div>
      <div className="flex-1 bg-black px-10 py-10 md:py-20">
        <div className="image_div w-full  md:w-[300px] md:h-[400px] lg:w-[500px] xl:w-[700px] xl:h-[500px]">
          <img src="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?cs=srgb&dl=pexels-ivan-siarbolin-1513699-3787839.jpg&fm=jpg" alt="event image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Events;
