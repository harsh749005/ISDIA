import React, { useState } from "react";

const Navbar = ({toggleCheck,check}) => {

  return (
    <div className="bg-black px-5 py-5 xl:px-10 xl:py-10 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div>
            <span className="text-[#9d66ff] text-2xl font-bold font-poppins">
              ISDIA 2025
            </span>
          </div>
          <ul className="cursor-pointer w-full text-white text-[12px]  gap-5 font-spacemono hidden md:flex">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Home
            </li>
            {/* Author */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author">
              Author
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Submission Guidelines
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Registration
                </li>
              </ul>
            </li>
            {/* Important Dates */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Important Dates
            </li>
            {/* Call for papers */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author">
              Call for papers
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Main Conference Call for papers
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Special Sessions
                </li>
              </ul>
            </li>
            {/* Comittes */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Comittes
            </li>
            {/* Program */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Program
            </li>
            {/* Publication */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author hidden lg:block">
              Publication
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Previous Edition for ISDIA conference
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  CRC Info
                </li>
              </ul>
            </li>
            {/* Guests & Speakers */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author hidden lg:block">
              Guests & Speakers
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Guests
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Keynote Speakers
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Invited Speakers
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Previous Speakers
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Session Chairs
                </li>
              </ul>
            </li>
            {/* ISDIA-Past Delegates */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hidden xl:block">
              ISDIA-Past Delegates
            </li>
            {/* Travel */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author hidden xl:block">
              Travel
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  VISA
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  How to Reach
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Accomodation
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  NearyBy Attraction
                </li>
              </ul>
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 author hidden xl:block">
              Policies
              <ul className="w-max text-white text-[12px] font-spacemono author-subul ">
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Terms & Conditions
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Payment Policy
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Refund Policy
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Privacy Policy
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  Publication Policy
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={toggleCheck} className={`w-10  h-10 items-center justify-center flex ${check ?'flex-row':'flex-col'} ${check ?'gap-0':'gap-3'} justify-center relative transition-all duration-300 ease-in-out md:hidden`}>
          <span className={`${check ?'absolute':''} w-full h-1 bg-white block  ${check ?'rotate-[22deg] scale-110':'rotate-0'} transition-all duration-500 ease-in-out`}></span>
          <span className={`${check ?'absolute':''} w-full h-1 bg-white block  ${check ?'-rotate-[22deg] scale-110':'rotate-0'} transition-all duration-500 ease-in-out`}></span>
        </div>
        <button className="relative btn hidden xl:block text-black px-8 py-2 font-poppins bg-white  hover:text-white ">
          <span className="font-medium">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
