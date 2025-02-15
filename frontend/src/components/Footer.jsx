import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative w-full px-10 py-20 pt-20 bg-[#0f0f0f] flex flex-col gap-5">
      {/* Logo */}
      <div>
        <span className="text-[#9d66ff] text-4xl font-bold font-poppins">
          ISDIA 2025
        </span>
      </div>

      <div className="w-full  bg-[#0f0f0f] flex gap-5">
        {/* QuickLinks */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">QuickLinks</h1>
          <ul className=" text-white text-[12px] font-spacemono cursor-pointer ">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Important Dates
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Comittes
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Program
            </li>
          </ul>
        </div>
        {/* Author Info */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">Author Info</h1>
          <ul className="w-max text-white text-[12px] font-poppins  cursor-pointer">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Submission Guidelines
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Registration
            </li>
          </ul>
        </div>
        {/* Call for Papers */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">
            Call for Papers
          </h1>
          <ul className="w-max text-white text-[12px] font-poppins cursor-pointer ">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Main Conference call for paper
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Special Sessions
            </li>
          </ul>
        </div>
        {/* Guests & Speakers*/}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">
            Guests & Speakers
          </h1>

          <ul className=" text-white text-[12px] font-spacemono cursor-pointer ">
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
        </div>
        {/* Travel */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">Travel</h1>
          <ul className="w-max text-white text-[12px] font-poppins cursor-pointer">
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
        </div>
        {/* Publication */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">Publication</h1>
          <ul className="w-max text-white text-[12px] font-poppins cursor-pointer ">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              Previous Edition for ISDIA conference
            </li>
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              CRC Info
            </li>
          </ul>
        </div>
        {/* Policy */}
        <div className="flex flex-col gap-5">
          <h1 className=" text-gray-400 text-xl font-spacemono">Policy</h1>
          <ul className=" text-white text-[12px] font-poppins cursor-pointer ">
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
        </div>
      </div>
      
      <div className="w-max h-max absolute right-20 bottom-30">

      <button onClick={scrollToTop}  className="relative upper-btn-div w-max h-max hidden xl:block bg-[#202020] px-2 py-2 rounded-full font-poppins text-white shadow-2xl hover:text-white ">
      <IoArrowUpOutline className="upper-icon  text-2xl "/>
        </button>
    </div>
      </div>
  );
};

export default Footer;
