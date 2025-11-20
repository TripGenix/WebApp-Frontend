import BookingDetails from "../components/service/bookingDetails";
import RouteTrip from "../components/service/RouteTrip";
import TripSummary from "../components/service/TripSummery";
import DropDownField from "../components/DropDownField";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { useState } from "react";

export default function CustomPackage() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  return (
    <>
      <div>
        <div className="text-center m-5">
          <h1 className="hidden md:block font-bold text-gray-900 md:text-4xl ">
            Make Your Dream Tour
          </h1>
          <h1 className="font-bold text-gray-900 md:hidden ">
            <span className="text-4xl">Make Your</span> <br />{" "}
            <span className="text-3xl">Dream Tour</span>
          </h1>
        </div>

        <div className="container mx-auto px-2 grid grid-cols-12 gap-4">
          {/* Left Panel */}
          <div className="col-span-12 lg:col-span-8">
            <BookingDetails />
            <RouteTrip />
          </div>

          {/* Right Panel */}
          <div className="col-span-12 lg:col-span-4">
            <TripSummary
              name="John Doe"
              pickupLocation="New York"
              startDate="2024-07-01"
              endDate="2024-07-05"
              distance="120 km"
              timeDuration="3 hours"
              vehicleCost="$150"
              guideCost="$50"
              totalCost="$200"
            />
          </div>
        </div>

        {/*find location using districts*/}
        <div className="container mx-auto px-2 grid">
          <div className="m-5">
            <h1 className="font-bold text-center text-gray-900 text-3xl mb-6">
              Need Help Choosing a Location?
            </h1>

            <div className="flex justify-center ">
              <div className="bg-[#D4F6FF]/60 rounded-xl py-6 px-6 max-w-4xl">
                <p className="text-gray-700 text-base flex items-center gap-3">
                  <span className="text-blue-500 text-xl hidden md:block">
                    <FaLocationDot />
                  </span>
                  If you don't know the exact location, we can help you explore
                  beautiful places by district.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="md:w-[300px] w-full">
                <DropDownField
                  label="District"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  options={["Colombo", "Galle", "Kandy", "Jaffna", "Matara"]}
                />
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
