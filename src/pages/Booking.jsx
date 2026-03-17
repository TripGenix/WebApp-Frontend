import FooterNew from "../components/FooterNew.jsx";
import PackageCard from "../components/service/SelectPackage.jsx";

function Booking() {
  const packegeCardDetails = [
    {
      Headerimage:
        "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80",
      Title: "Featured Tour Packages",
      navigate: "/FeaturedTours",
      badge: "Popular",
      disabled: false,
    },
    {
      Headerimage:
        "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?semt=ais_hybrid&w=740&q=80",
      Title: "Create Your Dream Package",
      navigate: "/CustomPackage",
      badge: "New Feature",
      disabled: false,
    },

    {
      Headerimage:
        "https://img.freepik.com/free-photo/friends-partying-nightclub_23-2147716949.jpg?semt=ais_hybrid&w=740&q=80",
      Title: "Entertainment",
      navigate: "#",
      badge: "Coming Soon",
      disabled: true,
    },

    {
      Headerimage:
        "https://img.freepik.com/free-photo/hot-air-balloons-flying-sunrise_181624-27573.jpg?semt=ais_hybrid&w=740&q=80",
      Title: "Balloon Riding",
      navigate: "#",
      badge: "Coming Soon",
      disabled: true,
    },
  ];

  return (
    <>
      <div
        className="p-10 grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        justify-center
        gap-6"
      >
        {packegeCardDetails.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center transition-transform duration-300 ${
              card.disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            <PackageCard
              Headerimage={card.Headerimage}
              Title={card.Title}
              navigate={card.disabled ? "#" : card.navigate}
              badge={card.badge}
            />
          </div>
        ))}
      </div>

      <FooterNew />
    </>
  );
}

export default Booking;