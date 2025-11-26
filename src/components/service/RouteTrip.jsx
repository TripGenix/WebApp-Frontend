import { useState } from "react";
import InputField from "../InputField";
import DynamicList from "./DynamicList";

function RouteTrip({
  startLocation,
  setStartLocation,
  endLocation,
  setEndLocation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isVehicle,
  setVehicle,
  destinations,
  setDestinations,
  submit,
}) {
  return (
    <div className="bg-gray-50 mb-10 p-6 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">Trip Details</h1>

      {/* GRID FIXED HEIGHT */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {/* Start Location */}
        <div>
          <InputField
            label="Start Location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            enableAutocomplete={true}
          />
        </div>

        {/* End Location */}
        <div>
          <InputField
            label="End Location"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
          />
        </div>

        {/* Destination List */}
        <div className="row-span-3">
          <DynamicList
            title="Add Destination"
            destinations={destinations}
            setDestinations={setDestinations}
          />
        </div>

        {/* Start Date */}
        <div>
          <InputField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* End Date */}
        <div>
          <InputField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-[#fafafa] border border-black px-4 py-3 rounded-md hover:bg-[#9e9e9e] w-full text-center"
            onClick={() => setVehicle(!isVehicle)}
          >
            Select Vehicle
          </button>

          {isVehicle && (
            <div className="flex mt-3 bg-gray-300 rounded-xl overflow-hidden">
              <div className="w-1/2 m-2 flex justify-center items-center rounded-2xl overflow-hidden">
                <img
                  src="https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?semt=ais_hybrid&w=740&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <button className="bg-[#fafafa] border border-black px-4 py-3 rounded-md hover:bg-[#9e9e9e] w-full text-center">
            Select Driver
          </button>
        </div>

        <div>
          <button
            className="bg-[#fafafa] border border-black px-4 py-3 rounded-md hover:bg-[#9e9e9e] w-full text-center"
            onClick={submit}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteTrip;
