import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleTourGuide() {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8089/api/v1/search?tourId=${id}`)
      .then((res) => setGuide(res.data))
      .catch(console.error);
  }, [id]);

  if (!guide) return <div className="p-6">Loading...</div>;

  const languages = guide.languages
    ? guide.languages.split(", ")
    : [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-blue-100 rounded-2xl p-6 shadow-md">

          {/* COVER IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="rounded-xl h-40 w-full object-cover"
          />

          {/* PROFILE IMAGE */}
          <div className="flex justify-center -mt-16">
            <img
              src={guide.image || "https://via.placeholder.com/150"}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* NAME */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">{guide.name}</h2>
            <p className="text-gray-600">Tour Guide</p>
          </div>

          {/* SOCIAL ICONS (dummy) */}
          <div className="flex justify-center gap-3 mt-4">
            {["F", "T", "In", "Y", "I"].map((i, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border flex items-center justify-center text-sm cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h1 className="text-3xl font-bold mb-4">About Me</h1>

          <p className="text-gray-600 leading-relaxed">
            {guide.description || "No description available"}
          </p>

          {/* EXPERIENCE */}
          <h2 className="text-2xl font-semibold mt-6">
            {guide.experienceYears} Years of Experience
          </h2>

          <p className="text-gray-600 mt-2">
            Professional tour guide with experience in multiple destinations and
            languages.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            <StatCard title="Experience" value={`${guide.experienceYears}+`} />
            <StatCard title="Languages" value={`${languages.length}+`} />
            <StatCard title="Price/Day" value={`Rs ${guide.pricePerDay}`} />
            <StatCard title="Tours" value="100+" />

          </div>

        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Contact With Me</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ContactCard
            title="Address"
            value="Sri Lanka"
          />

          <ContactCard
            title="Phone Number"
            value={guide.contactNumber}
          />

          <ContactCard
            title="Languages"
            value={languages.join(", ")}
          />

        </div>
      </div>
    </div>
  );
}

export default SingleTourGuide;


/* ---------- SMALL COMPONENTS ---------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow text-center">
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
}

function ContactCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        📍
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{value}</p>
      </div>
    </div>
  );
}