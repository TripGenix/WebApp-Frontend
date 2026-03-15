import React from "react";

function Gallery() {
  return (
    <section className="py-24 ">
      {/* 🔹 Gallery Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Travel Moments
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Recent <span className="text-[#1DA9CC]">Gallery</span>
        </h2>

        {/* Accent divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Explore breathtaking travel moments captured across Sri Lanka. From
          stunning beaches and lush mountains to historic landmarks, our gallery
          showcases the beauty and experiences waiting for you.
        </p>
      </div>
      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-6 auto-rows-[200px]">
        {/* Left Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Center Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Right Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Bottom small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Bottom small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
