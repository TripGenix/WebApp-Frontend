import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

import {
  FaBars,
  FaTachometerAlt,
  FaSuitcase,
  FaCreditCard,
  FaHeadset,
  FaUserEdit
} from "react-icons/fa";

import "./TouristDashboard.css";
import defaultProfilePic from "../../assets/profile/profilepic.avif";

import Mybookings from "../../pages/Mybookings";
import Mypayments from "../../pages/Mypayments";
import ContactUs from "../../pages/Contact";
import EditProfile from "../../pages/EditProfile";

export default function TouristDashboard() {

  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Fetch user profile
  useEffect(() => {

    const fetchUser = async () => {

      try {

        const response = await axios.get(
          `http://localhost:8082/api/v1/tourists/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = response.data;

        setUserData({
          id: data.touristId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          contactNumber: data.phone,
          passportId: data.passportNicNumber,
          country: data.country,
          profileImage: data.profileImageUrl || defaultProfilePic
        });

      } catch (error) {
        console.error("Failed to load user", error);
      }

    };

    fetchUser();

  }, [userId, token]);

  const handleUpdateProfile = (newData) => {
    setUserData(newData);
    setActiveTab("dashboard");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleDeleteAccount = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) {
      setActiveTab("dashboard");
      return;
    }

    try {

      await axios.delete(
        `http://localhost:8082/api/v1/tourists/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Account deleted successfully");

      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      window.location.href = "/login";

    } catch (error) {

      console.error("Delete failed", error);
      alert("Failed to delete account");

    }

  };

  const renderContent = () => {

    switch (activeTab) {

      case "bookings":
        return <Mybookings />;

      case "payments":
        return <Mypayments />;

      case "support":
        return <ContactUs />;

      case "edit-profile":
        return (
          <EditProfile
            currentProfile={userData}
            onSave={handleUpdateProfile}
          />
        );

      case "delete-account":
        handleDeleteAccount();
        return null;

      case "dashboard":
      default:

        return (
          <div className="space-y-8 text-gray-900">

            {/* Header */}
            <div>

              <h2 className="text-3xl font-bold">
                Hey {userData.firstName}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </p>

            </div>

            {/* Profile Card */}
            <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200">

              <div className="grid md:grid-cols-3 gap-10 items-center">

                {/* Avatar */}
                <div className="flex flex-col items-center">

                  <img
                    src={userData.profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover shadow-md border"
                  />

                  <p className="mt-4 text-sm text-gray-500">
                    Profile Picture
                  </p>

                </div>

                {/* User Info */}
                <div className="md:col-span-2 grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={userData.firstName}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={userData.lastName}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      value={userData.contactNumber}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Country
                    </label>
                    <input
                      type="text"
                      value={userData.country}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Passport ID
                    </label>
                    <input
                      type="text"
                      value={userData.passportId}
                      readOnly
                      className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>

                </div>

              </div>

            </div>

          </div>
        );

    }

  };

  return (

    <div className="dashboard-container">

      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">

        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

      </div>

      {/* Main Content */}
      <div className="dashboard-main pb-20 md:pb-0">

        <div className="tab-content">
          {renderContent()}
        </div>

      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden z-50">

        <div className="flex justify-around items-center py-2">

          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center text-xs ${
              activeTab === "dashboard"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <FaTachometerAlt size={18} />
            <span>Home</span>
          </button>

          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex flex-col items-center text-xs ${
              activeTab === "bookings"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <FaSuitcase size={18} />
            <span>Bookings</span>
          </button>

          <button
            onClick={() => setActiveTab("payments")}
            className={`flex flex-col items-center text-xs ${
              activeTab === "payments"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <FaCreditCard size={18} />
            <span>Payments</span>
          </button>

          <button
            onClick={() => setActiveTab("support")}
            className={`flex flex-col items-center text-xs ${
              activeTab === "support"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <FaHeadset size={18} />
            <span>Support</span>
          </button>

          <button
            onClick={() => setActiveTab("edit-profile")}
            className={`flex flex-col items-center text-xs ${
              activeTab === "edit-profile"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <FaUserEdit size={18} />
            <span>Profile</span>
          </button>

        </div>

      </div>

    </div>

  );

}