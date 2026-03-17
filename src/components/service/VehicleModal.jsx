import axios from "axios";
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

/* ================= DISTANCE HELPER ================= */

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/* ================= IMAGE CAROUSEL ================= */

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className="relative w-full h-40 overflow-hidden rounded-lg bg-black"
      onTouchStart={(e) =>
        (touchStartX.current = e.touches[0].clientX)
      }
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0].clientX;
        if (touchStartX.current - endX > 50) next();
        if (endX - touchStartX.current > 50) prev();
      }}
    >
      <img
        src={images?.[index]}
        alt="vehicle"
        className="w-full h-full object-cover"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2"
      >
        ›
      </button>
    </div>
  );
}

/* ================= VEHICLE MODAL ================= */

function VehicleModal({
  vehicles,
  onClose,
  onSelect,
  passengerCount,
  startLocation, // string: "Jaffna, Sri Lanka"
}) {
  const [startCoords, setStartCoords] = useState(null);

  /* ---------- GEOCODE START LOCATION ---------- */
  useEffect(() => {
    if (!startLocation) return;

    const geocode = async () => {
      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: startLocation,
              key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
            },
          }
        );

        const location =
          res.data.results[0]?.geometry?.location;

        if (location) {
          setStartCoords({
            lat: location.lat,
            lng: location.lng,
          });
        }
      } catch (err) {
        console.error("Geocoding failed", err);
      }
    };

    geocode();
  }, [startLocation]);

  /* ---------- ATTACH DISTANCE TO VEHICLES ---------- */
  const vehiclesWithDistance = useMemo(() => {
    if (!startCoords) return vehicles;

    return vehicles.map((v) => ({
      ...v,
      distance: getDistanceKm(
        startCoords.lat,
        startCoords.lng,
        v.latitude,
        v.longitude
      ),
    }));
  }, [vehicles, startCoords]);

  /* =================================================
     1️⃣ BEST MATCH (Passenger + Distance ≤ 20km)
     ================================================= */
  const bestMatches = useMemo(() => {
    return vehiclesWithDistance
      .filter(
        (v) =>
          v.distance !== undefined &&
          v.distance <= 20 &&
          Number(v.passengerCount) >=
            Number(passengerCount)
      )
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  }, [vehiclesWithDistance, passengerCount]);

  /* =================================================
     2️⃣ SUGGESTED (Passenger count only)
     ================================================= */
  const passengerBasedSuggestions = useMemo(() => {
    return vehiclesWithDistance.filter(
      (v) =>
        Number(v.passengerCount) >=
        Number(passengerCount)
    );
  }, [vehiclesWithDistance, passengerCount]);

  /* =================================================
     3️⃣ ALL VEHICLES
     ================================================= */
  const allVehicles = vehiclesWithDistance;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-5xl max-h-[85vh] overflow-y-auto shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Select a Vehicle
          </h2>
          <button
            onClick={onClose}
            className="text-xl font-bold"
          >
            ✖
          </button>
        </div>

        {/* ================= 1️⃣ BEST MATCH ================= */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            ⭐ Best Match (Within 20 km)
          </h2>

          {bestMatches.length === 0 ? (
            <p className="text-gray-500">
              No best-match vehicles within 20 km
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestMatches.map((v) => (
                <div
                  key={v.vehicleId}
                  className="border-2 border-blue-500 rounded-xl p-4 bg-blue-50"
                >
                  <ImageCarousel
                    images={v.vehicleImages}
                  />

                  <span className="inline-block mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                    Best Match
                  </span>

                  <h3 className="text-lg font-semibold mt-2">
                    {v.vehicleName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Seats: {v.passengerCount}
                  </p>
                  <p className="text-sm text-gray-600">
                    Distance for starting Location:{" "}
                    {v.distance.toFixed(1)} km
                  </p>

                  <button
                    onClick={() => onSelect(v)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  >
                    Select Vehicle
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= 2️⃣ SUGGESTED ================= */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            👥 Suggested (By Passenger Count)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passengerBasedSuggestions.map((v) => (
              <div
                key={v.vehicleId}
                className="border rounded-xl p-4 hover:bg-gray-100 transition"
              >
                <ImageCarousel
                  images={v.vehicleImages}
                />

                <h3 className="text-lg font-semibold mt-2">
                  {v.vehicleName}
                </h3>
                <p className="text-sm text-gray-600">
                  Seats: {v.passengerCount}
                </p>

                {v.distance !== undefined && (
                  <p className="text-sm text-gray-600">
                    Distance for starting Location:{" "}
                    {v.distance.toFixed(1)} km
                  </p>
                )}

                <button
                  onClick={() => onSelect(v)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Select Vehicle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 3️⃣ ALL VEHICLES ================= */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            All Vehicles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allVehicles.map((v) => (
              <div
                key={v.vehicleId}
                className="border rounded-xl p-4 hover:bg-gray-100 transition"
              >
                <ImageCarousel
                  images={v.vehicleImages}
                />

                <h3 className="text-lg font-semibold mt-2">
                  {v.vehicleName}
                </h3>

                <button
                  onClick={() => onSelect(v)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Select Vehicle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleModal;
