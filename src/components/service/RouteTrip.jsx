import { useState, useEffect } from "react";
import InputField from "../InputField";
import DynamicList from "./DynamicList";
import VehicleModal from "./VehicleModal";
import DriverModal from "./DriverModal";
import TourGuideModal from "./TourGuideModal";
import GooglePlaceInput from "../service/GooglePlaceInput";
import axios from "axios";

const DRIVER_API =
  import.meta.env.VITE_DRIVER_SERVICE_API_URL + "/get-approved-drivers";
const VEHICLE_API = import.meta.env.VITE_VEHICLE_SERVICE_API_URL;

/* ---------------- TEMP GUIDES ---------------- */



/* ---------------- DISTANCE HELPER ---------------- */

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

/* ===================== COMPONENT ===================== */

export default function RouteTrip({
  tripDetails,
  setTripDetails,
  routeDetails,
  setRouteDetails,
  resources,
  setResources,
  submitTrip,
  passengerCount,
}) {
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [guides, setGuides] = useState([]);

  useEffect(() => {
  axios
    .get("http://13.218.211.254:8089/api/v1/getAll")
    .then((res) => {
      console.log("API Response:", res.data); // full data

      const formattedGuides = res.data.map((g) => ({
        id: g.tourGuideId,
        name: g.name,
        experience: g.driver + " years",
        languages: [g.language],
        rating: 4.5,
        phone: g.nic,
        photo: g.image,
      }));

      console.log("Formatted Guides:", formattedGuides); // formatted data

      setGuides(formattedGuides);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
}, []);
  /* ---------------- HELPERS ---------------- */

  const updateTrip = (field, value) => {
    setTripDetails((prev) => ({ ...prev, [field]: value }));
  };

  const updateResource = (type, value) => {
    setResources((prev) => ({ ...prev, [type]: value }));
  };

  /* ---------------- LOAD DRIVERS ---------------- */

  useEffect(() => {
    axios
      .get(DRIVER_API)
      .then((res) => setDrivers(res.data))
      .catch(console.error);
  }, []);

  /* ---------------- LOAD VEHICLES ---------------- */

  const loadVehicles = async () => {
    try {
      const res = await axios.get(
        `${VEHICLE_API}/webRequestController/api/v1/getvehicles`,
      );
      setVehicles(res.data);
      setShowVehicleModal(true);
    } catch (err) {
      console.error("Vehicle fetch failed", err);
    }
  };

  /* ---------------- NEAREST VEHICLES ---------------- */

  const nearestVehicles = tripDetails.startLocation?.lat
    ? vehicles
        .map((v) => ({
          ...v,
          distance: getDistanceKm(
            tripDetails.startLocation.lat,
            tripDetails.startLocation.lng,
            v.latitude,
            v.longitude,
          ),
        }))
        .filter((v) => v.distance <= 50)
        .sort((a, b) => a.distance - b.distance)
    : vehicles;

  /* ---------------- SELECTION HANDLERS ---------------- */

  const handleVehicleSelect = (vehicle) => {
    updateResource("vehicle", vehicle);
    updateResource("driver", null);

    setRouteDetails((prev) => ({
      ...prev,
      costPerKm: vehicle.costPerKm,
      bookingPrice: vehicle.bookingPrice,
    }));

    setShowVehicleModal(false);
  };

  const handleDriverSelect = (driver) => {
    updateResource("driver", driver);
    setShowDriverModal(false);
  };

  /* ---------------- FILTER DRIVERS ---------------- */

  const filteredDrivers = resources.vehicle
    ? drivers.filter((d) => {
        const categoryMatch = d.selectedVehicleCategories?.includes(
          Number(resources.vehicle.type),
        );
        const numberMatch = d.selectedVehicleByNumber?.includes(
          resources.vehicle.vehicleId,
        );
        return categoryMatch || numberMatch;
      })
    : [];

  /* ===================== RENDER ===================== */

  return (
    <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-xl border shadow">
      <h1 className="text-3xl font-bold mb-8">Trip Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GooglePlaceInput
          label="Start Location"
          value={tripDetails.startLocation}
          onChange={(val) => updateTrip("startLocation", val)}
        />

        <GooglePlaceInput
          label="End Location"
          value={tripDetails.endLocation}
          onChange={(val) => updateTrip("endLocation", val)}
        />

        <div className="sm:col-span-2 lg:col-span-1 row-span-2">
          <DynamicList
            title="Add Destination"
            destinations={tripDetails.destinations}
            setDestinations={(list) => updateTrip("destinations", list)}
          />
        </div>

        <InputField
          label="Start Date"
          type="date"
          value={tripDetails.startDate}
          onChange={(e) => updateTrip("startDate", e.target.value)}
        />

        <InputField
          label="End Date"
          type="date"
          value={tripDetails.endDate}
          onChange={(e) => updateTrip("endDate", e.target.value)}
        />

        {/* VEHICLE */}
        <div>
          <button className="glass-btn w-full" onClick={loadVehicles}>
            Select Vehicle
          </button>
          {resources.vehicle && (
            <GlassCard item={resources.vehicle} type="vehicle" />
          )}
        </div>

        {/* DRIVER */}
        <div>
          <button
            disabled={!resources.vehicle}
            className={`glass-btn w-full ${!resources.vehicle && "opacity-50"}`}
            onClick={() => setShowDriverModal(true)}
          >
            Select Driver
          </button>
          {resources.driver && (
            <GlassCard item={resources.driver} type="driver" />
          )}
        </div>

        {/* GUIDE */}
        <div>
          <button
            className="glass-btn w-full"
            onClick={() => setShowGuideModal(true)}
          >
            Select Tour Guide
          </button>
          {resources.guide && <GlassCard item={resources.guide} type="guide" />}
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button className="proceed-btn" onClick={submitTrip}>
          Proceed
        </button>
      </div>

      {/* ---------------- MODALS ---------------- */}

      {showVehicleModal && (
        <VehicleModal
          vehicles={nearestVehicles}
          passengerCount={passengerCount}
          onClose={() => setShowVehicleModal(false)}
          onSelect={handleVehicleSelect}
          startLocation={tripDetails.startLocation}
        />
      )}

      {showDriverModal && (
        <DriverModal
          drivers={filteredDrivers}
          onClose={() => setShowDriverModal(false)}
          onSelect={handleDriverSelect}
        />
      )}

      {showGuideModal && (
        <TourGuideModal
          guides={guides}
          onClose={() => setShowGuideModal(false)}
          onSelect={(g) => {
            updateResource("guide", g);
            setShowGuideModal(false);
          }}
        />
      )}
    </div>
  );
}

/* ---------------- GLASS CARD ---------------- */

function GlassCard({ item, type }) {
  return (
    <div className="mt-3 p-4 rounded-xl bg-white/30 backdrop-blur border shadow flex gap-4">
      <img
        src={item.driverImage || item.vehicleImages?.[0] || item.photo}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="space-y-1">
        <p className="font-semibold">{item.vehicleName || item.name}</p>

        {type === "vehicle" && (
          <>
            <p>Booking: {item.bookingPrice}</p>
            <p>Per Km: {item.costPerKm}</p>
            <p>Seats: {item.passengerCount}</p>

            {item.distance !== undefined && (
              <p className="text-sm text-gray-600">
                Distance for starting Location: {item.distance.toFixed(1)} km
              </p>
            )}
          </>
        )}

        {type === "driver" && (
          <>
            <p>
              {item.firstName} {item.lastName}
            </p>
            <p>{item.phone}</p>
          </>
        )}

        {type === "guide" && (
          <>
            <p>{item.experience}</p>
            <p>{item.languages.join(", ")}</p>
          </>
        )}
      </div>
    </div>
  );
}
