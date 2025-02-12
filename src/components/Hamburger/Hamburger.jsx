import React from 'react'
import './Hamburger.css'
const Hamburger = ({check}) => {
  return (
    <div className={`w-screen h-screen  md:hidden ${check?'right-0':'right-[-100%]'} absolute bg-black transition-all duration-500 ease-in-out`}>
      <ul className="flex flex-col ml-5 w-max  cursor-pointer text-white text-[12px]  gap-5 font-spacemono mg:hidden">
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
              {console.log(check)}
            </li>
            {/* hamauthor */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor">
              Author
              <ul className="w-max text-white text-[12px] font-spacemono hamauthor-subul ">
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
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor">
              Call for papers
              <ul className="w-52 text-white text-[12px]  font-spacemono hamauthor-subul ">
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
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor ">
              Publication
              <ul className="w-max text-white text-[12px] font-spacemono hamauthor-subul ">
                <li className="hover:bg-[#9d66ff] w-44 hover:text-white hover:px-2 transition-all duration-300">
                  Previous Edition for ISDIA conference
                </li>
                <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300">
                  CRC Info
                </li>
              </ul>
            </li>
            {/* Guests & Speakers */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor">
              Guests & Speakers
              <ul className="w-max text-white text-[12px] font-spacemono hamauthor-subul ">
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
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 ">
              ISDIA-Past Delegates
            </li>
            {/* Travel */}
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor ">
              Travel
              <ul className="w-max text-white text-[12px] font-spacemono hamauthor-subul ">
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
            <li className="hover:bg-[#9d66ff] hover:text-white hover:px-2 transition-all duration-300 hamauthor ">
              Policies
              <ul className="w-max text-white text-[12px] font-spacemono hamauthor-subul ">
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
          <div className='w-full flex items-center mt-10'>

            <button className="relative btn md:hidden  text-black px-8 py-2 font-poppins bg-white  hover:text-white ">
          <span className="font-medium">Contact</span>
        </button>
          </div>
    </div>
  )
}

export default Hamburger
