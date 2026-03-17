import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Users, ArrowRight, Zap, Check } from "lucide-react";
import axios from "axios";

const VehicleCard = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/webRequestController/api/v1/getvehicles")
      .then((response) => {
        setVehicles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
      });
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-trip-bg -skew-x-12 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.vehicleImages
}
                  alt="no image"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Diagonal Stripe Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-trip-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Motion streak effect on hover (simulated with gradient) */}
                <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent -skew-x-[45deg] translate-x-full group-hover:animate-shine" />

                <div
                  className={`absolute top-3 left-3 backdrop-blur text-xs font-bold px-2 py-1 rounded 
    ${
      vehicle.status === "Available"
        ? "bg-white text-green-500"
        : "bg-red-100 text-red-700"
    }`}
                >
                  {vehicle.status}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-trip-secondary group-hover:text-trip-primary transition-colors">
                    {vehicle.vehicleName}
                  </h3>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5" title="Top Speed">
                    <Gauge className="w-4 h-4 text-trip-primary" />
                    <span>{vehicle.longitude} Km/h</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Seats">
                    <Users className="w-4 h-4 text-trip-primary" />
                    <span>{vehicle.passengerCount}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-2xl font-bold text-trip-secondary">
                      ${vehicle.costPerKm}{" "}
                    </span>
                    <span className="text-sm text-gray-400">
                      cost per Kilometer
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white p-3 rounded-full hover:bg-trip-primary transition-colors shadow-lg active"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Driver Badge */}
                {vehicle.driver && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#1da9cc] font-medium">
                    <Check className="w-3.5 h-3.5 bg-emerald-100 rounded-full p-0.5" />
                    Professional Driver Included
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleCard;
