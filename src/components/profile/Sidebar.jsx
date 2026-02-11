import React from "react";
import { NavLink } from "react-router-dom";
import "./TouristDashboard.css";



import {
  FaTachometerAlt,
  FaSuitcase,
  FaCreditCard,
  FaHeadset,
  FaUserEdit,
  FaSignOutAlt,
  FaTimes 
  } from "react-icons/fa";

export default function Sidebar({ activeTab, setActiveTab, isOpen, toggleSidebar }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  if (window.innerWidth <= 768) {
      toggleSidebar(); // Auto-close on mobile after selection
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Close button visible only on mobile */}
      <button className="close-menu" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      

      <ul className="menu">
         <li>
          <button
            onClick={() => handleTabClick("dashboard")}
            className={`menu-link ${activeTab === "dashboard" ? "active" : ""}`}
          >
            <FaTachometerAlt className="menu-icon" />
            Dashboard
          </button>
        </li>

        <li>
          <button
            onClick={() => handleTabClick("bookings")}
            className={`menu-link ${activeTab === "bookings" ? "active" : ""}`}
          >
            <FaSuitcase className="menu-icon" />
            My Bookings
          </button>
        </li>

        <li>
          <button
            onClick={() => handleTabClick("payments")}
            className={`menu-link ${activeTab === "payments" ? "active" : ""}`}
          >
            <FaCreditCard className="menu-icon" />
            My Payments
          </button>
        </li>

        

        <li>
          <button
            onClick={() => handleTabClick("support")}
            className={`menu-link ${activeTab === "support" ? "active" : ""}`}
          >
            <FaHeadset className="menu-icon" />
            Support
          </button>
        </li>

        {/* Updated: Settings replaced with Edit Profile */}
        <li>
          <button
            onClick={() => handleTabClick("edit-profile")}
            className={`menu-link ${activeTab === "edit-profile" ? "active" : ""}`}
          >
            <FaUserEdit className="menu-icon" />
            Edit Profile
          </button>
        </li>

        <li className="logout">
          <NavLink to="/logout" className="menu-link">
            <FaSignOutAlt className="menu-icon" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}