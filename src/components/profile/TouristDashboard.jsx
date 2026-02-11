import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa"; 

import "./TouristDashboard.css";
import defaultProfilePic from "../../assets/profile/profilepic.avif";

import Mybookings from "../../pages/Mybookings";
import Mypayments from "../../pages/Mypayments";
import Support from "../../pages/Support";
import EditProfile from "../../pages/EditProfile";

export default function TouristDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "Lihini",
    lastName: "Thennakoon",
    email: "lihini123@gmail.com",
    contactNumber: "071 1234567",
    nationality: "Sri Lankan",
    passportId: "XXXXXXXX",
    profileImage: defaultProfilePic, 
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleUpdateProfile = (newData) => {
    setUserData(newData);
    setActiveTab("dashboard"); 
  };

  const renderContent = () => {
    switch (activeTab) {
      case "bookings":
        return <Mybookings />;
      case "payments":
        return <Mypayments />;
      case "support":
        return <Support />;
      case "edit-profile":
        return (
          <EditProfile 
            currentProfile={userData} 
            onSave={handleUpdateProfile} 
          />
        );
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
                <img src={userData.profileImage} alt="Profile" className="profile-image-large" />
                <p className="profile-label">Profile Picture</p>
              </div>

              <div className="profile-right">
                <div className="profile-field"><label>First Name</label><input type="text" value={userData.firstName} readOnly /></div>
                <div className="profile-field"><label>Last Name</label><input type="text" value={userData.lastName} readOnly /></div>
                <div className="profile-field"><label>Email</label><input type="email" value={userData.email} readOnly /></div>
                <div className="profile-field"><label>Contact Number</label><input type="text" value={userData.contactNumber} readOnly /></div>
                <div className="profile-field"><label>Nationality</label><input type="text" value={userData.nationality} readOnly /></div>
                <div className="profile-field"><label>Passport ID</label><input type="text" value={userData.passportId} readOnly /></div>
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


