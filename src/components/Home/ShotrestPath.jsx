import React from "react";
import travel from "../../assets/homepage/TRAVEL.png";
import ShortestPathForm from "./ShortestPath/ShortestPathForm";
import map from "../../assets/homepage/map.jpg";

function ShotrestPath() {
  return (
    <div className="container mx-auto px-4 mt-40">
      {/* HERO */}
      <div data-aos="fade-up">
        {/* <img
          src={travel}
          alt="Plan your trip"
          className="w-full h-full object-container object-center"
        /> */}

        <div className="flex items-center justify-center gap-6 my-16">

  {/* Left line */}
  <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>

  {/* Title */}
  <div className="text-center px-6">

    <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
      MAKE YOUR
      <span className="text-[#1DA9CC] ml-2">OWN PATH</span>
    </h2>

    {/* Accent underline */}
    <div className="flex justify-center items-center gap-3 mt-4">
      <div className="w-10 h-[2px] bg-gray-300"></div>
      <div className="w-3 h-3 rounded-full bg-[#1DA9CC]"></div>
      <div className="w-10 h-[2px] bg-gray-300"></div>
    </div>

  </div>

  {/* Right line */}
  <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>

</div>
      </div>
      {/* ROUTE SECTION */}
      <div
        className="mt-14 bg-cover bg-center rounded-3xl p-2 md:p-16"
        style={{ backgroundImage: `url(${map})` }}
      >
        <ShortestPathForm />
      </div>
    </div>
  );
}

export default ShotrestPath;
