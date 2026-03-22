import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TourGuidePage() {
  const [guides, setGuides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://13.218.211.254:8089/api/v1/getAll")
      .then((res) => {
        const formatted = res.data.map((g) => ({
          id: g.tourGuideId,
          name: g.name,
          image: g.image,
          languages: g.languages
            ? g.languages.split(", ").map((l) => l.trim())
            : [],
          experience: g.experienceYears,
          price: g.pricePerDay,
        }));

        setGuides(formatted);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tour Guides</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {guides.map((g) => (
          <div
            key={g.id}
            onClick={() => navigate(`/single-tourguid/${g.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition p-4"
          >
            {/* IMAGE */}
            <img
              src={g.image || "https://via.placeholder.com/300"}
              alt={g.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="mt-3 space-y-1">
              <h2 className="text-lg font-semibold">{g.name}</h2>

              <p className="text-sm text-gray-500">
                🎖 {g.experience} years experience
              </p>

              <p className="text-sm text-gray-500">
                💰 Rs. {g.price} / day
              </p>

              {/* LANGUAGES */}
              <div className="flex flex-wrap gap-1 mt-2">
                {g.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourGuidePage;