import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCar,
  FaUserTie,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";
import vehicleImage from "../assets/vehicleview.webp";

function ServiceDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* 🔹 Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Our Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Travel <span className="text-[#1DA9CC]">Services</span>
        </h2>

        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        <p className="mt-6 text-gray-600 leading-relaxed">
          At TripGenix, we provide reliable travel services to help tourists
          explore Sri Lanka comfortably. From professional tour guides to
          well-maintained vehicles, our services ensure a smooth and enjoyable
          journey across the island.
        </p>
      </div>

      {/* 🔹 Services We Provide */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-3xl font-semibold text-center mb-10">
          What Services <span className="text-[#1DA9CC]">We Provide</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaCar className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Comfortable Vehicles</h4>
            <p className="text-gray-600">
              Choose from cars, vans, and luxury vehicles for safe and
              comfortable travel across Sri Lanka.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaUserTie className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">
              Professional Tour Guides
            </h4>
            <p className="text-gray-600">
              Experienced guides help you explore cultural landmarks, heritage
              sites, and hidden destinations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaMapMarkedAlt className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Custom Travel Plans</h4>
            <p className="text-gray-600">
              Flexible travel plans designed to match your interests, schedule,
              and preferred destinations.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Why <span className="text-[#1DA9CC]">Choose Us</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaShieldAlt className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Safe & Reliable</h4>
            <p className="text-gray-600">
              We prioritize safety and provide reliable services for stress-free
              travel experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaClock className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
            <p className="text-gray-600">
              Our support team is available anytime to assist travelers during
              their journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaStar className="text-4xl text-[#1DA9CC] mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Top Rated Service</h4>
            <p className="text-gray-600">
              Highly rated by travelers for quality service and memorable travel
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Service Navigation Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Vehicle Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
          <img
            src={vehicleImage}
            alt="Vehicles"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3">Travel Vehicles</h3>

            <p className="text-gray-600 mb-4">
              Browse available vehicles with experienced drivers for comfortable
              and reliable transportation.
            </p>

            {/* Navigate Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/vehicleView")}
                className="bg-[#1DA9CC] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1693b3] transition"
              >
                View Vehicles
              </button>
            </div>
          </div>
        </div>

        {/* Tour Guide Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
          <img
            src="https://img.freepik.com/free-photo/travel-guide-showing-map-tourists_23-2149153261.jpg"
            alt="Tour Guides"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Professional Tour Guides
            </h3>

            <p className="text-gray-600 mb-4">
              Find knowledgeable guides who can enhance your travel experience
              with local insights.
            </p>

            {/* Navigate Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/tourGuidsView")}
                className="bg-[#1DA9CC] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1693b3] transition"
              >
                View Guides
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
