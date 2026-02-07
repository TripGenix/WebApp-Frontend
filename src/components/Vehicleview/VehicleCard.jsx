import  { useEffect, useState } from "react";

export default function VehicleCard({ v, onClick, onOwnerClick, onSelectVehicle }) {
  const images = Array.isArray(v.vehicleImages) ? v.vehicleImages : [];
  const cover = images[0] || "";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
      className="cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group"
    >
      <div className="relative w-full h-50 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {cover ? (
          <>
            <img
              src={images[currentImageIndex] || cover}
              alt={v.vehicleName || "Vehicle"}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            <span className="text-5xl"></span>
          </div>
        )}

        <div className="absolute top-3 left-3 animate-fadeIn">
          <span
            className={`text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg backdrop-blur-sm ${
              v.status === "Available"
                ? "bg-green-500/90 text-white"
                : v.status === "Maintenance"
                ? "bg-yellow-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            {v.status || "N/A"}
          </span>
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 line-clamp-1 text-lg group-hover:text-blue-600 transition-colors">
              {v.vehicleName || "Vehicle"}
            </h3>
          </div>

          <div className="text-right">
            <p className="font-bold text-blue-600">
              LKR {Number(v.bookingPrice || 0).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">booking price</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gradient-to-br from-blue-40 to-blue-100 rounded-xl p-3 border border-blue-200">
            <p className="text-medium text-blue-600 font-medium">👥 Passengers</p>
            <p className="font-bold text-gray-900 text-lg mt-1">{v.passengerCount ?? "-"}</p>
          </div>
          <div className="bg-gradient-to-br from-green-40 to-green-100 rounded-xl p-3 border border-green-200">
            <p className="text-medium text-green-600 font-medium">📍 Cost / Km</p>
            <p className="font-bold text-gray-900 text-lg mt-1">
              LKR {Number(v.costPerKm || 0).toLocaleString()}
            </p>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectVehicle(v);
            }}
            disabled={v.status !== "Available"}
            className={`h-11 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all ${
              v.status === "Available"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-500 hover:to-blue-800"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {v.status === "Available" ? "✓ Select Vehicle" : " Unavailable"}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOwnerClick(v);
            }}
            className="h-11 rounded-lg border-2 border-gray-300 bg-white text-sm font-semibold hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}
