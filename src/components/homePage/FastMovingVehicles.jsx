import tripgenix from "../../assets/homepage/TRIPGENIX.png";
import VehicleCard from "../../components/homePage/VehicleCard";

export default function FastMovingVehicles() {
  return (
    <>
    
    <div className="container mx-auto px-4 py-12">
      {/* Image Wrapper */}
      <div
        className="relative w-full rounded-xl overflow-hidden"
        data-aos="fade-down"
      >
        {/* Image */}
        <img
          src={tripgenix}
          alt="Plan your trip"
          className="w-full  object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <h2
            className="
                    text-black
                    text-lg md:text-5xl
                    font-semibold text-center
                  "
          >
            CHOOSE YOUR VEHICLE WITH <br />
            <span className="text-[#1DA9CC]">TRIPGENIX</span>
          </h2>
        </div>
      </div>
    </div>
    <VehicleCard />
</>
    
  );
}
