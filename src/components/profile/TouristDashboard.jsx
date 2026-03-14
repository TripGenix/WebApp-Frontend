import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

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
          country:data.country,
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

  if (!confirmDelete) return;

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
          <div className="dashboard-fade-in">

            <div className="dashboard-header">
              <div className="dashboard-greeting">
                <h2>Hey {userData.firstName}</h2>
                <p>
                  {new Date().toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </p>
              </div>
            </div>

            <div className="profile-section large-profile">

              <div className="profile-left">
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="profile-image-large"
                />
                <p className="profile-label">Profile Picture</p>
              </div>

              <div className="profile-right">

                <div className="profile-field">
                  <label>First Name</label>
                  <input type="text" value={userData.firstName} readOnly />
                </div>

                <div className="profile-field">
                  <label>Last Name</label>
                  <input type="text" value={userData.lastName} readOnly />
                </div>

                <div className="profile-field">
                  <label>Email</label>
                  <input type="email" value={userData.email} readOnly />
                </div>

                <div className="profile-field">
                  <label>Contact Number</label>
                  <input type="text" value={userData.contactNumber} readOnly />
                </div>

                <div className="profile-field">
                  <label>Country</label>
                  <input type="text" value={userData.country} readOnly />
                </div>

                <div className="profile-field">
                  <label>Passport ID</label>
                  <input type="text" value={userData.passportId} readOnly />
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
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="dashboard-main">
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>

    </div>
  );
}