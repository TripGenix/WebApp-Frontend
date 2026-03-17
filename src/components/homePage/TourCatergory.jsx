import CurveSlider from "./CurveSlider";

function TourCatergory() {
  return (
    <section className="w-full min-h-[700px] flex flex-col items-center 
                        bg-gradient-to-b from-white via-slate-50 to-white 
                        py-24 px-6">

      {/* 🔹 Heading Section */}
      <div className="text-center max-w-3xl">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Discover Sri Lanka
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Predefined <span className="text-[#1DA9CC]">Tour Packages</span>
        </h2>

        {/* Accent divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Explore carefully crafted travel experiences across Sri Lanka. 
          From breathtaking coastal adventures to cultural heritage tours, 
          our predefined packages help you discover the best destinations 
          with optimized routes, trusted drivers, and unforgettable journeys.
        </p>

      </div>

      {/* 🔹 Slider */}
      <div className="w-full flex items-center justify-center mt-16 px-4 sm:px-10">
        <CurveSlider />
      </div>

    </section>
  );
}

export default TourCatergory;