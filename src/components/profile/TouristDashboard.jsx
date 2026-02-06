import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./TouristDashboard.css";
import profile from "../../assets/profile/profilepic.avif";

// Import page components
import Dashboard from "./TouristDashboard";
import Mybookings from "../../pages/Mybookings";
import Mypayments from "../../pages/Mypayments";
import Wishlist from "../../pages/Wishlist";
import Support from "../../pages/Support";
import Settings from "../../pages/Settings";
import EditProfile from "../../pages/EditProfile";


export default function TouristDashboard() {
  const [activeTab, setActiveTab] = useState(null); // null means default profile view
  

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "bookings":
        return <Mybookings />;
      case "payments":
        return <Mypayments />;
      case "wishlist":
        return <Wishlist />;
      case "support":
        return <Support />;
      case "settings":
        return <Settings />;
      case "editProfile":
        return <EditProfile />;

      default:
        // Default profile view
        return (
          <>
            {/* Greeting + Edit Profile */}
            <div className="dashboard-header">
              <div className="dashboard-greeting">
                <h2>Hey Lihini,</h2>
                <p>
                  {new Date().toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              
              <button
                 className="edit-profile-btn header-edit-btn"
                  onClick={() => setActiveTab("editProfile")}
                >
                 Edit Profile
              </button>

            </div>

            {/* Profile Section */}
            <div className="profile-section large-profile">
              {/* Profile Image */}
              <div className="profile-left">
                <img src={profile} alt="Profile" className="profile-image-large" />
                <p className="profile-label">Profile Picture</p>
              </div>

              {/* Profile Form */}
              <div className="profile-right">
                <div className="profile-field">
                  <label>First Name</label>
                  <input type="text" value="Lihini" readOnly />
                </div>

                <div className="profile-field">
                  <label>Last Name</label>
                  <input type="text" value="Thennakoon" readOnly />
                </div>

                <div className="profile-field">
                  <label>Email</label>
                  <input type="email" value="lihini123@gmail.com" readOnly />
                </div>

                <div className="profile-field">
                  <label>Contact Number</label>
                  <input type="text" value="071 1234567" readOnly />
                </div>

                <div className="profile-field">
                  <label>Nationality</label>
                  <input type="text" value="Sri Lankan" readOnly />
                </div>
                <div className="profile-field">
                  <label>Passport ID</label>
                  <input type="text" value="XXXXXXXX" readOnly />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="dashboard-main">
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}