export default function PlacesGrid({ places }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
      {places.map((place, index) => (
        <div
          key={index}
          className="rounded-xl shadow-md bg-white w-full flex flex-col items-center overflow-hidden hover:shadow-xl transition-all"
        >
          <img
            src={place.photoUrl || place.mapImageUrl}
            alt={place.name}
            className="w-full h-40 object-cover"
          />

          <div className="py-4 w-full flex flex-col items-center">
            <h3 className="text-gray-800 font-semibold">{place.name}</h3>

            <button
              className="mt-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition"
              onClick={() => console.log("Added:", place.name)}
            >
              Add to Trip
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
