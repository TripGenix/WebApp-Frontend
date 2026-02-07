import { Phone, MapPin } from "lucide-react";

export default function OwnerModal({ open, onClose, owner, vehicle,category }) {
  if (!open) return null;

  const ownerAddress = [
    owner?.addressLine1,
    owner?.addressLine2,
    owner?.stateProvince,
    owner?.postalCode,
  ]
    .filter(Boolean)
    .join(", ");

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
            <h2 className="text-xl font-bold text-gray-900">
              More Details
            </h2>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all flex items-center justify-center"
          >
            ✕
          </button>
        </div>

       <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className=" font-semibold text-gray-900 text-lg tracking-wide mb-3">
          Owner Details
        </h3>

        <div className="flex items-start gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-blue-100 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-lg shrink-0">
            {owner?.ownerImage ? (
              <img
                src={owner.ownerImage}
                alt="Owner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-2xl text-blue-400">👤</span>
            )}
          </div>

          <div className="flex-1 text-sm space-y-2">
            <p className="font-semibold text-gray-700 text-base">
              {owner?.name || "-"}
            </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="font-medium">{owner?.phone || "-"}</span>
            </div>
            
            <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="font-medium leading-relaxed">{ownerAddress || "-"}</span>
            </div>
          </div>
          </div>
        </div>
      </div>


        {/* Vehicle Information Section */}
        {vehicle && (
          <div className="mt-5 border-t border-gray-200 pt-5">
            <h3 className=" font-semibold text-gray-900 text-lg  tracking-wide mb-3">
               Vehicle Information
            </h3>
            
            <div className="space-y-3 text-sm">
              {/* Vehicle Name & Number */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-blue-600 font-medium mb-1">Vehicle Name</p>
                <p className="font-semibold text-gray-700 text-base">
                  {vehicle.vehicleName || "-"}
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-xs text-green-600 font-medium mb-1">Number Plate</p>
                <p className="font-semibold text-gray-700 text-base">
                  {vehicle.numberPlate || "-"}
                </p>
              </div>

              {/* Vehicle Description */}
              {vehicle.description && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-800 font-medium mb-1">Description</p>
                  <p className="text-gray-900 leading-relaxed">
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