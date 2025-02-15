import React from 'react'
import logo from '../assets/aaquarians.png'
const AboutAaquarians = () => {
  return (
    <div className="bg-black w-full h-max flex flex-col xl:flex xl:flex-row">
      <div className="w-full xl:w-1/2 bg-black px-2 md:px-5  lg:px-10 md:py-10 lg:py-20 flex flex-col gap-5 items-end">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">
        Aaquarians.AI
        </h1>
        <p className="text-gray-400  md:font-medium text-sm font-poppins">
        Aaquarians.ai is a group of professionals comprising Ph.Ds & Postgraduates in AI Technologies and Data Sciences having played multiple roles in the areas of Software Product Development in the industry with world Top Tier1 Global Multi-National companies & Applied Research in well-known Universities. Having worked in both AI Technologies & in Governance, Risk & Compliance domains, the team has the unique advantage of being at the intersection of both AI & at Governance domains.<br className='md:hidden'/> <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">3, 500 students representing 108 nationalities.</span>
        </p>

        
      </div>
      <div  className="flex-1 bg-black px-10 py-10 md:py-20">
        <div className="image_div w-full  md:w-[500px] md:h-[200px] lg:w-[600px] lg:h-[300px] xl:w-[700px] xl:h-[300px]">
          <img
            src={logo}
            alt="event image"
            className="image w-full h-full object-cover ml-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutAaquarians
