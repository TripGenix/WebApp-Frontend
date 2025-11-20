import { useEffect, useRef } from "react";

/* polyline: encoded path string from Google Directions API */

export default function TripSummary({
  name,
  pickupLocation,
  startDate,
  endDate,
  distance,
  timeDuration,
  vehicleCost,
  guideCost,
  totalCost,
  polyline // 👈 new prop
}) {

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const renderer = useRef(null);

  useEffect(() => {
    if (!window.google || !polyline) return;

    // Initialize map only once
    if (!mapInstance.current) {
      mapInstance.current = new google.maps.Map(mapRef.current, {
        zoom: 8,
        center: { lat: 7.8731, lng: 80.7718 } // Sri Lanka center
      });
      renderer.current = new google.maps.DirectionsRenderer({
        map: mapInstance.current
      });
    }

    const decodedPath = google.maps.geometry.encoding.decodePath(polyline);
    const routeLine = new google.maps.Polyline({
      path: decodedPath,
      geodesic: true,
      strokeColor: "#007aff",
      strokeOpacity: 0.8,
      strokeWeight: 4,
    });

    routeLine.setMap(mapInstance.current);

  }, [polyline]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg/50 border border-[#C7C7C7] p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Trip Summary</h1>
      <hr className="w-full mt-2 mb-4 border-gray-300" />

      <div className="w-full text-gray-800 space-y-3 text-[17px] leading-relaxed">
        <p><b>Name :</b> {name || "___________"}</p>
        <p><b>Pickup Location :</b> {pickupLocation || "___________"}</p>
        <p><b>Start Date :</b> {startDate || "___________"}</p>
        <p><b>End Date :</b> {endDate || "___________"}</p>
        <p><b>Distance :</b> {distance || "___________"}</p>
        <p><b>Time Duration :</b> {timeDuration || "___________"}</p>
      </div>

      <h2 className="text-lg font-semibold mt-8">Route Preview</h2>

      <div
        ref={mapRef}
        id="route-map"
        className="w-full h-64 rounded-xl border mt-3"
      />

      <button className="w-[80%] bg-[#113c43] text-white font-semibold py-3 rounded-full mt-8 hover:bg-[#0d2f34] transition">
        Confirm & Pay
      </button>
    </div>
  );
}
