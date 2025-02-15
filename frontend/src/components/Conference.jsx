import React from 'react'

const Conference = () => {
  return (
<div className="bg-black w-full h-max flex flex-col xl:flex xl:flex-row">
<div className="flex-1 bg-black  py-20 hidden xl:block">
        <div className="image_div w-full  md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[500px]">
          <img
            src="https://blog.aboveboard.com/hubfs/7-facts-about-Black-representation-in-the-boardroom_AboveBoard.jpg"
            alt="event image"
            className="image w-full h-full object-cover cursor-pointer hover:grayscale-0"
          />
        </div>
      </div>
      <div className="w-full xl:w-1/2 bg-black px-2 md:px-5  lg:px-10 md:py-10 lg:py-20 flex flex-col gap-5 xl:items-end">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">
        Conference Topics
        </h1>
        <div className="w-full h-full ">
            <ul className='flex flex-col gap-5 '>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 1: Intelligent Information Systems</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 2: Big Data Analytics and Data Science</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 3: Information Security and Privacy</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 4: Internet of Things (IoT) and Smart Applications</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 5: Human-Centric Information Systems</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 6: Information Retrieval and Search Engines</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 7: Emerging Technologies and Trends</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 8: Information System Design and Implementation</li>
                <li className="text-gray-600  font-medium text-sm md:text-lg xl:text-xl font-poppins hover:bg-[#9d66ff] hover:px-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Track 9: General Track( topics not mentioned in Track 1 to Track 8)</li>
            </ul>
        </div>
      </div>
      <div className="flex-1 bg-black px-10 py-10 md:py-20  xl:hidden">
        <div className="image_div w-full  md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[600px] ">
          <img
            src="https://blog.aboveboard.com/hubfs/7-facts-about-Black-representation-in-the-boardroom_AboveBoard.jpg"
            alt="conference image"
            className="image w-full h-full object-cover cursor-pointer hover:grayscale-0"
            
          />
        </div>
      </div>
    </div>
  )
}

export default Conference
