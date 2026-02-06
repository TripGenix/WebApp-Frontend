import React from "react";
import { NavLink } from "react-router-dom";
import "./TouristDashboard.css";

import logo1 from "../../assets/profile/tripgenixlogo2.jpeg";

import {
  FaTachometerAlt,
  FaSuitcase,
  FaCreditCard,
  FaHeart,
  FaHeadset,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar({ activeTab, setActiveTab }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo1} alt="TripGenix Logo" />
      </div>

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
            onClick={() => handleTabClick("wishlist")}
            className={`menu-link ${activeTab === "wishlist" ? "active" : ""}`}
          >
            <FaHeart className="menu-icon" />
            Wishlist
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

        <li>
          <button
            onClick={() => handleTabClick("settings")}
            className={`menu-link ${activeTab === "settings" ? "active" : ""}`}
          >
            <FaCog className="menu-icon" />
            Settings
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