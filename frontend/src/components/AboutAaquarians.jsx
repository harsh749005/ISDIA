import React from 'react'
import logo from '../assets/aaquarians.png'
const AboutAaquarians = () => {
  return (
    <div className="bg-black w-full h-max flex ">
      <div className="w-1/2 bg-black px-10 py-20 flex flex-col gap-5 items-start">
        <h1 className="text-6xl font-spacemono font-bold text-white text-left ">
        Aaquarians.AI
        </h1>
        <p className="text-gray-400  font-medium text-sm font-poppins">
        Aaquarians.ai is a group of professionals comprising Ph.Ds & Postgraduates in AI Technologies and Data Sciences having played multiple roles in the areas of Software Product Development in the industry with world Top Tier1 Global Multi-National companies & Applied Research in well-known Universities. Having worked in both AI Technologies & in Governance, Risk & Compliance domains, the team has the unique advantage of being at the intersection of both AI & at Governance domains. <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">3, 500 students representing 108 nationalities.</span>
        </p>

        
      </div>
      <div className="flex-1 bg-black py-20">
        <div className="image_div w-[700px] h-[300px]">
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
