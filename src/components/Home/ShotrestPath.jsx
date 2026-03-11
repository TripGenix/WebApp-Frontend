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

        <div className="flex items-center justify-center gap-6">
          {/* Left Line */}
          <div className="flex-1 h-[2px] bg-gray-300"></div>

          <h2 className="text-black text-xl sm:text-3xl md:text-[50pt] font-semibold text-center">
            MAKE YOUR
            <span className="text-[#1DA9CC]"> OWN PATH</span>
          </h2>

          {/* Right Line */}
          <div className="flex-1 h-[2px] bg-gray-300"></div>
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
