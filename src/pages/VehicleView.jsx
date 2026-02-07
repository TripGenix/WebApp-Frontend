import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VehicleApi from "../services/VehicleApi.js";
import OwnerModal from "../components/Vehicleview/OwnerModel.jsx";
import VehicleCard from "../components/Vehicleview/VehicleCard.jsx";

export default function VehicleView() {
  const nav = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [minPassengers, setMinPassengers] = useState("ALL");

  const [ownerModalOpen, setOwnerModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [selectedVehicleForOwner, setSelectedVehicleForOwner] = useState(null);
  const [category, setCategory] = useState("ALL");
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    (async () => {
      try {
        const res = await VehicleApi.getCategories();
        setCategories(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        console.log("Category load failed", e);
      }
      })();
    }, []);

  const detailsCacheRef = useRef(new Map());

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setErrMsg("");

        const res = await VehicleApi.getVehicles();
        if (!mounted) return;

        const list = Array.isArray(res.data) ? res.data : [];
        setData(list);

        list.forEach(async (v) => {
          const id = v.vehicleId;
          if (!id) return;

          if (detailsCacheRef.current.has(id)) {
            const cached = detailsCacheRef.current.get(id);
            if (!mounted) return;
            setData((prev) =>
              prev.map((x) =>
                x.vehicleId === id ? { ...x, owner: cached.owner } : x
              )
            );
            return;
          }

          try {
            const dres = await VehicleApi.getVehicleDetails(id);
            const details = dres.data;
            detailsCacheRef.current.set(id, details);

            if (!mounted) return;
            setData((prev) =>
              prev.map((x) =>
                x.vehicleId === id ? { ...x, owner: details.owner } : x
              )
            );
          } catch {
            if (!mounted) return;
            setData((prev) =>
              prev.map((x) =>
                x.vehicleId === id
                  ? { ...x, owner: { name: "N/A", phone: "-" } }
                  : x
              )
            );
          }
        });
      } catch (e) {
        if (!mounted) return;
        setErrMsg(
          e?.response?.data?.message ||
            e?.response?.data ||
            e.message ||
            "Failed to load vehicles"
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const passengerOptions = useMemo(() => {
    const nums = data
      .map((v) => Number(v.passengerCount))
      .filter((n) => Number.isFinite(n) && n > 0);
    return Array.from(new Set(nums)).sort((a, b) => a - b);
  }, [data]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return data.filter((v) => {
      const matchesSearch =
        !q ||
        String(v.vehicleName || "").toLowerCase().includes(q) ||
        String(v.location || "").toLowerCase().includes(q) ||
        String(v.numberPlate || "").toLowerCase().includes(q);

      const matchesStatus = status === "ALL" || v.status === status;

      const matchesCategory =
      category === "ALL" || Number(v.type) === Number(category);
      
      const pc = Number(v.passengerCount);
      const minP =
        minPassengers === "ALL" ? null : Number(minPassengers || 0);

      const matchesPassengers =
        minP == null || (Number.isFinite(pc) && pc >= minP);

      return matchesSearch && matchesCategory && matchesStatus && matchesPassengers;
    });
  }, [data, search, category,status, minPassengers]);

  const handleOwnerClick = (vehicle) => {
    const owner = vehicle?.owner;
    setSelectedOwner(owner || { name: "Loading...", phone: "-" });
    setSelectedVehicleForOwner(vehicle);
    setOwnerModalOpen(true);
  };

  const handleSelectVehicle = (vehicle) => {
    console.log("Selected vehicle:", vehicle);
    nav(`/booking/${vehicle.vehicleId}`);
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>

      <OwnerModal
        open={ownerModalOpen}
        owner={selectedOwner}
        vehicle={selectedVehicleForOwner}
        onClose={() => {
          setOwnerModalOpen(false);
          setSelectedOwner(null);
          setSelectedVehicleForOwner(null);
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Vehicles
            </h1>
            <p className="text-gray-600 text-base mt-1">
               Choose a vehicle that fits your trip perfectly
            </p>
          </div>

          <div className="w-full md:w-auto flex gap-3 flex-col sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder=" Search by name / location / plate..."
              className="w-full sm:w-[340px] h-11 rounded-lg border-2 border-gray-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
            />

              {/* Category */}
              <div className="md:col-span-3">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full sm:w-[170px] h-11 rounded-lg border-2 border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                >
                  <option value="ALL">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                      {c.category}
                    </option>
                  ))}
                </select>
              </div>


            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full sm:w-[170px] h-11 rounded-lg border-2 border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="ALL">All Status</option>
              <option value="Available"> Available</option>
              <option value="Unavailable"> Unavailable</option>
              <option value="Maintenance"> Maintenance</option>
            </select>

            <select
              value={minPassengers}
              onChange={(e) => setMinPassengers(e.target.value)}
              className="w-full sm:w-[190px] h-11 rounded-lg border-2 border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="ALL">Any passengers</option>
              {passengerOptions.map((n) => (
                <option key={n} value={String(n)}>
                  {n}+ passengers
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatus("ALL");
                setMinPassengers("ALL");
                setCategory("ALL");

              }}
              className="h-11 px-5 rounded-lg border-2 border-gray-300 bg-white text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
            >
              Clear
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading vehicles...</p>
            </div>
          </div>
        )}

        {!loading && errMsg && (
          <div className="bg-red-50 border-2 border-red-300 text-red-700 rounded-xl p-5 shadow-sm">
            {errMsg}
          </div>
        )}

        {!loading && !errMsg && filtered.length === 0 && (
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 text-center shadow-sm">
            <span className="text-6xl mb-4 block"></span>
            <p className="text-gray-600 text-lg">No vehicles found matching your criteria.</p>
          </div>
        )}

        {!loading && !errMsg && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v, idx) => (
              <div
                key={v.vehicleId}
                style={{
                  animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                <VehicleCard
                  v={v}
                   onOwnerClick={handleOwnerClick}
                   onSelectVehicle={handleSelectVehicle}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}