import Card1 from "./Card1";
import FeaturedCarousel from "./FeaturedCarousel";
import Topic from "./topic";

function PopularDestination() {
  return (
    <section className="w-full h-[700px] flex flex-col bg-primary">
      {/* 🔹 Popular Destinations Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Explore Sri Lanka
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Popular <span className="text-[#1DA9CC]">Destinations</span>
        </h2>

        {/* Accent divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Discover Sri Lanka’s most loved destinations, from golden beaches and
          lush tea plantations to ancient cities and breathtaking mountain
          landscapes. These popular spots offer unforgettable experiences for
          every traveler.
        </p>
      </div>

      <div className="w-full mt-15 flex items-center justify-center">
        <FeaturedCarousel />
      </div>
    </section>
  );
}

export default PopularDestination;
