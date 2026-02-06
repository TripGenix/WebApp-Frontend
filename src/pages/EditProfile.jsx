import React from "react";
import profile from "../assets/profile/profilepic.avif";

export default function EditProfile() {
  return (
    <div className="edit-profile-container">

      <h2>Edit Your Profile</h2>

      <div className="profile-section large-profile">

        <div className="profile-left">
          <img src={profile} alt="Profile" className="profile-image-large" />
        </div>

        <div className="profile-right">

          <div className="profile-field">
            <label>First Name</label>
            <input type="text" defaultValue="Lihini" />
          </div>

          <div className="profile-field">
            <label>Last Name</label>
            <input type="text" defaultValue="Thennakoon" />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input type="email" defaultValue="lihini123@gmail.com" />
          </div>

          <div className="profile-field">
            <label>Contact Number</label>
            <input type="text" defaultValue="071 1234567" />
          </div>

          <div className="profile-field">
            <label>Nationality</label>
            <input type="text" defaultValue="Sri Lankan" />
          </div>

          <div className="profile-field">
            <label>Passport ID</label>
            <input type="text" defaultValue="XXXXXXXX" />
          </div>

          <button className="edit-profile-btn">
            Save Changes
          </button>

        </div>
      </div>

    </div>
  );
}
