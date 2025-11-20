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
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg/50 border border-[#C7C7C7] p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Trip Summery</h1>
      <hr className="w-full mt-2 mb-4 border-gray-300" />

      {/* Summary Fields */}
      <div className="w-full text-gray-800 space-y-3 text-[17px] leading-relaxed">
        <p>
          <b>Name :</b> {name || "___________"}
        </p>
        <p>
          <b>Pickup Location :</b> {pickupLocation || "___________"}
        </p>
        <p>
          <b>Start Date :</b> {startDate || "___________"}
        </p>
        <p>
          <b>End Date :</b> {endDate || "___________"}
        </p>
        <p>
          <b>Distance :</b> {distance || "___________"}
        </p>
        <p>
          <b>Time Duration :</b> {timeDuration || "___________"}
        </p>
        <p>
          <b>Vehicle Cost :</b> {vehicleCost || "___________"}
        </p>
        <p>
          <b>Guide Cost :</b> {guideCost || "___________"}
        </p>

        <p className="pt-4 text-xl font-bold">
          Total Cost:
          <span className="ml-2 underline">{totalCost || "___________"}</span>
        </p>
      </div>

      {/* Route Preview */}
      <h2 className="text-lg font-semibold mt-8">Route Preview</h2>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fj20c2DKoPsC7ongm8LiOP8fmjz-4q3ddYmz8s7-7KWKfiEWJnSxK-9Wi3GZunSBV0Y&usqp=CAU"
        alt="Route map"
        className="w-full h-64 object-cover rounded-xl mt-3"
      />

      {/* Pay Button */}
      <button className="w-[80%] bg-[#113c43] text-white font-semibold py-3 rounded-full mt-8 hover:bg-[#0d2f34] transition">
        Confirm $ Pay
      </button>
    </div>
  );
}
