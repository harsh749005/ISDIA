import React from 'react'

const Conference = () => {
  return (
<div className="bg-black w-full h-max flex ">
      <div className="flex-1 bg-black py-20">
        <div className="image_div w-[600px] ">
          <img
            src="https://blog.aboveboard.com/hubfs/7-facts-about-Black-representation-in-the-boardroom_AboveBoard.jpg"
            alt="conference image"
            className="image w-full h-[500px] object-cover cursor-pointer hover:grayscale-0"
            
          />
        </div>
      </div>
      <div className="w-1/2 bg-black px-20 py-20 flex flex-col gap-5 items-end">
        <h1 className="text-6xl font-spacemono font-bold text-white text-left w-max">
        Conference Topics
        </h1>
        <div className="w-full h-full ">
            <ul className='flex flex-col gap-5'>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 1: Intelligent Information Systems</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 2: Big Data Analytics and Data Science</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 3: Information Security and Privacy</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 4: Internet of Things (IoT) and Smart Applications</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 5: Human-Centric Information Systems</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 6: Information Retrieval and Search Engines</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 7: Emerging Technologies and Trends</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 8: Information System Design and Implementation</li>
                <li className="text-gray-600  font-medium text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 9: General Track( topics not mentioned in Track 1 to Track 8)</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Conference
