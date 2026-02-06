import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [settings, setSettings] = useState({
    name: "Lihini Thennakoon",
    email: "lihini123@gmail.com",
    phone: "+94 77 123 4567",
    language: "English",
    currency: "LKR",
    emailNotify: true,
    smsNotify: false,
    privateProfile: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p className="subtitle">Manage your account and preferences</p>

      {/* Account Settings */}
      <div className="settings-card">
        <h3>Account Settings</h3>

        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={settings.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number
          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Preferences */}
      <div className="settings-card">
        <h3>Preferences</h3>

        <label>
          Language
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option>English</option>
            <option>Sinhala</option>
            <option>Tamil</option>
          </select>
        </label>

        <label>
          Currency
          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
          >
            <option>LKR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <h3>Notifications</h3>

        <div className="toggle">
          <input
            type="checkbox"
            name="emailNotify"
            checked={settings.emailNotify}
            onChange={handleChange}
          />
          <span>Email Notifications</span>
        </div>

        <div className="toggle">
          <input
            type="checkbox"
            name="smsNotify"
            checked={settings.smsNotify}
            onChange={handleChange}
          />
          <span>SMS Notifications</span>
        </div>
      </div>

      {/* Privacy */}
      <div className="settings-card">
        <h3>Privacy</h3>

        <div className="toggle">
          <input
            type="checkbox"
            name="privateProfile"
            checked={settings.privateProfile}
            onChange={handleChange}
          />
          <span>Make my profile private</span>
        </div>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}
