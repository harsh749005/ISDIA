import React from "react";

const AboutISDIA = () => {
  return (
    <div className="bg-black w-full h-max flex flex-col xl:flex xl:flex-row">
      <div className="flex-1 bg-black  py-20 hidden xl:block">
        <div className="image_div w-full  md:w-[300px] md:h-[200px] lg:w-[500px] xl:w-[700px] xl:h-[700px]">
          <img
            src="https://www.isdia.org/img/i_image/conference_2.jpg"
            alt="event image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full xl:w-1/2 bg-black px-2 md:px-5  lg:px-10 md:py-10 lg:py-20 flex flex-col gap-5 items-end">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-spacemono font-bold text-white">
          ISDIA 2025
        </h1>
        <p className="text-gray-400  md:font-medium text-sm font-poppins">
          After the grand success of{" "}
          <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">
            8th edition of , ISDIA (Formerly INDIA)
          </span>
          Conference with{" "}
          <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">
            Springer
          </span>{" "}
          Nature as publication partner, it is a matter of pleasure and pride to
          announce the{" "}
          <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">
            9th Edition of International Conference on Information System Design
            and Intelligent Applications (ISDIA)
          </span>
          . ISDIA 2025 will be held on 3-4 January 2025 at University of
          Wollongong in Dubai (UOWD) , Dubai in hybrid mode. This Conference
          aims to bring together researchers, scientists, engineers, students
          and practitioners from industries to exchange and share their
          theories, methodologies, new ideas, experiences, products,
          applications in all areas of intelligent computing theories,
          methodologies.{" "}
        </p>
        <h1 className="text-gray-400  font-medium text-sm font-poppins ">
          This Edition of ISDIA is making a new journey with a unique theme:{" "}
          <span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">
            AI for Healthcare.
          </span>
        </h1>
        <p className="text-gray-400  md:font-medium text-sm font-poppins ">
          In this edition, we delve into the transformative power of Artificial
          Intelligence (AI) within the healthcare sector, where cutting-edge
          technology intersects with the human touch.Our exploration encompasses
          the seamless integration of AI-driven solutions, from diagnosis to
          treatment, and beyond, in the pursuit of optimal patient outcomes.
          Through this theme, we illuminate the collaborative synergy between AI
          algorithms, healthcare professionals, and patients, fostering a new
          era of precision medicine, personalized care, and enhanced patient
          experiences. Join us as we navigate the frontier of AI-enabled
          healthcare, where innovation meets compassion to redefine the future
          of wellness and healing.
        </p>
        <p className="text-gray-400  md:font-medium text-sm font-poppins ">
          In the past, the earlier eight editions of this conference were
          organized in various parts of the globe that include Mauritius,
          Vietnam, UAE and India. After gathering huge appreciations and
          visibility the 8th edition at UAE and once again ISDIA is coming to
          Dubai in a new theme.<span className="text-white w-max px-2 bg-[#9d66ff] font-medium italic ">9th ISDIA is being organized by prestigious
          University of Wollongong in Dubai (UOWD), Dubai campus.</span>  Presence of
          top class IT companies and world renowned universities are the major
          attraction this conference can seek. Like all its past seven editions,
          this edition also having the Publication partnership from Springer
          Nature Lectures Notes in Networks and Systems to bring out all
          accepted and registered articles/research papers which will be indexed
          in SCOPUS, WoS, DBLP etc as per the Springer Nature guidelines.
        </p>
        <button className="relative btn hidden md:block text-black px-8 py-2 font-poppins bg-white  hover:text-white ">
          <span className="font-medium">Submit Your Paper</span>
        </button>
      </div>
      <div className="flex-1 bg-black px-10 py-10 md:py-20  md:hidden">
        <div className="image_div w-full  md:w-[700px]  ">
          <img
            src="https://www.isdia.org/img/i_image/conference_2.jpg"
            alt="event image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutISDIA;