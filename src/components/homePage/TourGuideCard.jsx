import React, { useEffect, useState } from "react";
import { Star, Bookmark } from "lucide-react";
import TourGuideApi from "../../services/TourGuideApi";

export default function TourGuideCard() {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await TourGuideApi.getAllGuides();
      console.log("API DATA:", response.data);
      setGuides(response.data);
    } catch (error) {
      console.error("Error fetching guides:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading guides...</div>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {guides?.map((item) => (
        <div
          key={item.tourGuideId}
          className="relative w-full max-w-[360px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden font-sans group"
        >
          {/* IMAGE */}
          <div className="relative h-[280px] w-full overflow-hidden p-3 pb-0">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <img
                src={
                  item.image ||
                  "https://images.unsplash.com/photo-1551632811-561732d1e306"
                }
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* DATE BADGE (static demo) */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-2.5 min-w-[60px] flex flex-col items-center shadow-sm z-10">
                <span className="text-[10px] font-bold text-gray-400">
                  JAN
                </span>
                <span className="text-xl font-bold text-gray-900">01</span>
                <span className="text-[10px] font-bold text-gray-400">
                  MON
                </span>
              </div>

              {/* BOOKMARK */}
              <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full p-2.5 text-white border border-white/10">
                <Bookmark className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-6 py-5">
            {/* RATING */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-black text-black" />
                <span className="text-sm font-bold">5.0</span>
              </div>

              {/* AVATARS */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      alt="User avatar"
                    />
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-black text-white text-[8px] flex items-center justify-center">
                    +10
                  </div>
                </div>
                <span className="text-xs text-gray-500">joined</span>
              </div>
            </div>

            {/* NAME + PRICE */}
            <div className="flex justify-between mb-3">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <div>
                <span className="text-xl font-bold">
                  ${item.hourlyRate}
                </span>
                <span className="text-sm text-gray-500">/hr</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Professional Tour Guide • {item.language || "English"}
            </p>

            {/* BUTTON */}
            <button className="w-full bg-black text-white py-4 rounded-2xl text-sm hover:scale-[0.98] cursor-pointer">
              Reserve your booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
