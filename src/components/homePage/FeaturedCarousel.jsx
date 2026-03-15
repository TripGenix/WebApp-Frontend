// src/components/homePage/FeaturedCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import guideImg from "../../assets/man-4.jpg";
import beach from "../../assets/homepage/Featured/bluebeach.jpg";
import ella from "../../assets/homepage/Featured/ella.jpg";
import galle from "../../assets/homepage/Featured/galle.png";
import m1 from "../../assets/homepage/Featured/m1.jpg";
import train from "../../assets/homepage/Featured/train.jpg";
import lipton from "../../assets/homepage/Featured/lipton.jpg";
import anu from "../../assets/homepage/Featured/anuradapura.jpg";

const items = [
  {
    id: 1,
    img: beach,
    name: "Blue Beach",
    description:
      "Blue Beach is a beautiful tropical beach with crystal clear water and relaxing atmosphere.",
  },
  {
    id: 2,
    img: ella,
    name: "Ella",
    description:
      "Ella is one of the most famous hill country destinations with scenic train rides and tea plantations.",
  },
  {
    id: 3,
    img: galle,
    name: "Galle",
    description:
      "Galle is a historic coastal city known for the Dutch Fort and colonial architecture.",
  },
  {
    id: 4,
    img: m1,
    name: "Kalpitiya",
    description:
      "Kalpitiya is a popular destination for kite surfing, dolphin watching, and beautiful lagoons.",
  },
  {
    id: 5,
    img: train,
    name: "Wallawaya",
    description:
      "Experience the famous Sri Lankan train journey through mountains and lush green landscapes.",
  },
  {
    id: 6,
    img: lipton,
    name: "Lipton Seat",
    description:
      "Lipton Seat is a breathtaking viewpoint in Haputale surrounded by tea plantations.",
  },
  {
    id: 7,
    img: anu,
    name: "Anuradhapura",
    description:
      "Anuradhapura is an ancient sacred city with historic temples, ruins, and Buddhist heritage.",
  },
  {
    id: 8,
    img: guideImg,
    name: "Ampara",
    description:
      "Ampara is a beautiful eastern region known for wildlife, lagoons, and untouched beaches.",
  },
];

export default function FeaturedCarousel() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="w-full max-w-fit lg:max-w-6xl mx-auto bg-primary py-6">

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, EffectCoverflow, A11y]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        freeMode={false}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="featured-carousel"
      >
        {items.map((it) => (
          <SwiperSlide
            key={it.id}
            className="flex justify-center transition-all duration-500 ease-out"
          >
            <div
              className="
                bg-green-300
                slide-card
                flex
                justify-center
                items-center
                relative
                shadow-xl
                transition-all
                duration-500
                ease-out
                rounded-3xl
                overflow-hidden
                m-10
                lg:m-0
              "
            >
              {/* Image */}
              <img
                src={it.img}
                alt={it.name}
                className="w-full h-[350px] md:w-[300px] md:h-[420px] object-cover"
              />

              {/* Text */}
              <div className="absolute bottom-5 left-1/6 sm:left-1/3 lg:left-5 text-white">
                <h2 className="text-2xl font-semibold drop-shadow-lg">
                  {it.name}
                </h2>
                <p className="opacity-90">25 Listings</p>
              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedPlace(it)}
                className="absolute bottom-5 right-1/6 sm:right-1/3 lg:right-5 bg-white text-black px-4 py-2 rounded-full shadow-md text-sm hover:bg-gray-100 transition"
              >
                View All →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedPlace.img}
              alt=""
              className="w-full h-60 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">
              {selectedPlace.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600">
              {selectedPlace.description}
            </p>

          </div>

        </div>
      )}
    </div>
  );
}