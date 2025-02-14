import React from 'react'
import './AboutHivePro.css'
const AboutHivePro = () => {
  return (
<div className="bg-black w-full h-max flex ">
      <div className="flex-1 bg-black py-20">
        <div className="image_div w-[700px] ">
          <img
            src="https://dcloud.com.sa/wp-content/uploads/2022/11/2022-11-07-01_41_11-Ei557LvXcAITwZf-4032%C3%973024.jpg"
            alt="event image"
            className="image w-full h-[700px] object-cover cursor-pointer hover:grayscale-0"
            
          />
        </div>
      </div>
      <div className="w-1/2 bg-black px-20 py-20 flex flex-col gap-5 items-end">
        <h1 className="text-6xl font-spacemono font-bold text-white text-left w-max">
        Hive Pro
        </h1>
        <p className="text-gray-400  font-medium text-sm font-poppins">
        Hive Pro (<a href='https://hivepro.com/' target='_blank' className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">www.hivepro.com</a> ) is a young, dynamic and agile company, having its corporate headquarters in Virginia, US and presence in Europe, Asia and the Middle East. It is built by a team of dedicated cybersecurity experts with decades of experience catering to a wide range of customers from medium to large enterprises across all industries. Hive Pro takes a long hard look at vulnerabilities of organizations so that the organizations can its defenses and fine-tunes offensive security tactics. They enable you to counter all threats and establish a command control center so you can monitor and mitigate any danger from one central location, so nothing is missed. They bring to the market a powerful security solution centered on the four pillars of prevention, detection, response and prediction.
        </p>
        
        <p className="text-gray-400  font-medium text-sm font-poppins ">
        From detection to resolution, they automate and orchestrate the vulnerability remediation process dynamically and at scale, so one has one less thing to worry about. Because any data breach has the potential to unravel your company’s reputation through the loss of customer and partner trust that you worked hard to build up.
        </p>
        <p className="text-gray-400  font-medium text-sm font-poppins ">
        Hive Pro is built by a team of dedicated cybersecurity experts with decades of experience. It caters to a wide range of customers from medium to large enterprises across all industries. Hive Pro is led by a dynamic individual Anand Choudha as Founder and CEO with a decade of cyber security experience , possessing a natural transformational leadership style. He has also many other companies like Spectrami, Altrosmart, AmiseQ to his credits as founder.
        </p>
       
      </div>
    </div>
  )
}

export default AboutHivePro
