import React from "react";

const AboutUOWD = () => {
  return (
    <div className="bg-black w-full h-max flex flex-col xl:flex xl:flex-row">
      <div className="w-full xl:w-1/2 bg-black px-2 md:px-5  lg:px-10 md:py-10 lg:py-20 flex flex-col gap-5 items-end">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">
          University of Wollongong in Dubai (UOWD)
        </h1>
        <p className="text-gray-400  font-medium text-sm font-poppins">
          University of Wollongong, Australia (UOW Australia) is one of the
          world's most respected young universities. UOW is ranked among <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">top 200
          universities</span> in the World and a <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">5+ star</span> ranking by QS World University
          Rankings 2021. Established in 1993, University of Wollongong in Dubai
          (UOWD) is the first international Australian university in the UAE,
          and is part of a global brand that has campuses in Australia, Hong
          Kong and Malaysia.University of Wollongong Dubai (UOWD) offers over 40
          internationally recognized bachelor, master and PhD degrees spanning
          10 in-demand industry sectors.The first internationally accredited
          Australian university in the UAE, we are the education gateway of
          choice for over <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">3, 500 students representing 108 nationalities.</span>
        </p>

        <p className="text-gray-400  font-medium text-sm font-poppins ">
          All of the degree courses are accredited by the UAE Ministry of
          Education’s Commission for Academic Accreditation (CAA) and licensed
          by Dubai’s Knowledge and Human Development Authority (KHDA), and
          recognized by leading professional organizations such as <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">AACSB</span>,<span  className="text-white w-max px-2 bg-[#9d66ff] font-medium italic "> ACCA</span>,
          <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">ACS</span>, <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">CIM</span>, <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">CIPD</span>, <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">CPA</span>, <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">Engineers Australia</span>,<span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">PMI</span> , and others.
        </p>
        <p className="text-gray-400  font-medium text-sm font-poppins ">
          The School of Computer Science is one of oldest departments in
          University of Wollongong in Dubai. Offering Bachelor degrees in
          Computer Science, Cyber Security, Game and Mobile Development, and AI
          and Big Data. Master degrees in IT Management and Digital
          Transformation and PhD through UOW Australia. The School of Computer
          Science is very research active and is home to several research
          clusters and research groups in Artificial Intelligence, Security and
          IT.
        </p>
      </div>
      <div className="flex-1 bg-black px-10 py-10 md:py-20">
        <div className="image_div w-full  md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]">
          <img
            src="https://scontent.fbdq2-1.fna.fbcdn.net/v/t39.30808-6/300145057_5656000281099776_3018358873868274354_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pUM0TwBS9fgQ7kNvgH4DDWL&_nc_oc=AdhwfogqIcxrA_fd0-8EsvPQMP-SDXYUzBQkJW1O211lIvU-QGklCbaO6ZevHBn7BY8&_nc_zt=23&_nc_ht=scontent.fbdq2-1.fna&_nc_gid=AV7zHPXqY0s79nOA8AF2c8s&oh=00_AYBSq9jik500D6gmb-LUHYvEenTYLgB4h97bqSeoLKs-mg&oe=67B35CE2"
            alt="event image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUOWD;
