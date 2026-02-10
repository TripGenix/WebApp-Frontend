import { useEffect, useMemo, useState } from "react";
import {
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

/* -------------------- IMAGE GALLERY -------------------- */
function VehicleImageGallery({ images = [] }) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);

  useEffect(() => {
    setActive(0);
    setFull(false);
  }, [safeImages.length]);

  const has = safeImages.length > 0;

  const prev = () => {
    if (!has) return;
    setActive((p) => (p - 1 + safeImages.length) % safeImages.length);
  };

  const next = () => {
    if (!has) return;
    setActive((p) => (p + 1) % safeImages.length);
  };


  useEffect(() => {
    if (!full) return;

    const onKey = (e) => {
      if (e.key === "Escape") setFull(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full, safeImages.length]);

  if (!has) {
    return (
      <div className="w-full h-56 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500">
        No vehicle images
      </div>
    );
  }

  return (
    <>
      {/* Main image */}
      <div className="relative w-full  overflow-hidden border border-gray-200 bg-gray-100">
        <div className="w-full h-64 sm:h-72">
          <img
            src={safeImages[active]}
            alt={`vehicle-${active}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          onClick={() => setFull(true)}
          className="absolute top-3 right-3 h-9 w-9 rounded-lg bg-white/85 hover:bg-white border border-gray-200 shadow flex items-center justify-center"
          title="Fullscreen"
        >
          <Maximize2 className="w-5 h-5 text-gray-700" />
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 hover:bg-white border border-gray-200 shadow flex items-center justify-center"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 hover:bg-white border border-gray-200 shadow flex items-center justify-center"
              title="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            <div className="absolute bottom-3 right-3 bg-black/55 text-white text-xs px-2.5 py-1 rounded-full">
              {active + 1}/{safeImages.length}
            </div>
          </>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              className={`shrink-0 w-16 h-14 rounded-lg overflow-hidden border transition ${
                idx === active
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              title={`Image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {full && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setFull(false)}
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-5 md:left-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            title="Previous"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <img
            src={safeImages[active]}
            alt={`full-${active}`}
            className="max-h-[85vh] max-w-[92vw] object-contain"
          />

          <button
            type="button"
            onClick={next}
            className="absolute right-5 md:right-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            title="Next"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="absolute bottom-6 text-white/80 text-sm">
            {active + 1} / {safeImages.length}
          </div>
        </div>
      )}
    </>
  );
}

/* -------------------- OWNER MODAL -------------------- */
export default function OwnerModal({ open, onClose, vehicle }) {
  if (!open) return null;

  const vehicleImages = vehicle?.vehicleImages || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[95%] max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 animate-slideUp max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">More Details</h2>
          </div>
        </div>

        {/*  Vehicle Images Gallery on top */}
        <div className="mt-4">
          <VehicleImageGallery images={vehicleImages} />
        </div>

        {/* Vehicle Information Section */}
        {vehicle && (
          <div className="mt-6 border-t border-gray-200 pt-5">
            <h3 className="font-semibold text-gray-900 text-lg tracking-wide mb-3">
              Vehicle Information
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 rounded-lg p-3 ">
                <p className=" text-blue-800 font-medium mb-1">
                  Vehicle Name
                </p>
                <p className=" text-gray-700 text-base">
                  {vehicle.vehicleName || "-"}
                </p>
              </div>
              {vehicle.description && (
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className=" text-blue-800 font-medium mb-1">
                    Description
                  </p>
                  <p className="text-gray-700 text-base">
                    {vehicle.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="h-11 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
