import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import packageApi from "../../services/packageApi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function CurveSlider() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const response = await packageApi.getAllPackages();
        console.log("Fetched Packages:", response);

        // If API returns { data: [...] }
        setPackages(response.data);
      } catch (error) {
        console.error("Error loading packages:", error);
      }
    };

    loadPackages();
  }, []);

  return (
    <section className="relative container mx-auto overflow-hidden py-10">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

      <Swiper
        modules={[Autoplay, A11y, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="py-8"
      >
        {Array.isArray(packages) &&
          packages.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className="px-4 flex justify-center w-64 md:w-72 lg:w-80"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                
                {/* Image */}
                <div className="relative">
                  <img
                    src={
                      pkg.imageUrl ||
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    }
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />

                  {pkg.popular && (
                    <span className="absolute top-3 left-3 bg-[#1DA9CC] text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pkg.name}
                  </h3>

                  {/* Destinations */}
                  <p className="text-sm text-gray-500 mt-1">
                    {pkg.destinations?.join(" • ")}
                  </p>

                  {/* Vehicle + Duration */}
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                    <span>🚗 {pkg.vehicle}</span>
                    <span>⏱ {pkg.duration}</span>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-[#1DA9CC]">
                      ${pkg.price}
                    </span>

                    <button className="text-sm bg-[#1DA9CC] text-white px-4 py-1 rounded-full hover:bg-[#1589a5]">
                      View
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}