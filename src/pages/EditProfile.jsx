import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "./EditProfile.css";

const EditProfile = ({ currentProfile, onSave }) => {
  // Initialize state with props from the Dashboard
  const [profile, setProfile] = useState(currentProfile);
  const [tempImage, setTempImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl);
      // Update the profile object with the new image string
      setProfile({ ...profile, profileImage: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated profile object back to TouristDashboard
    onSave(profile);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="profile-image-section">
          <div className="image-wrapper">
            <img 
              src={profile.profileImage} 
              alt="Profile Preview" 
              className="profile-preview-img" 
            />
            <label htmlFor="file-upload" className="custom-file-upload">
              <FaCamera /> Edit Image
            </label>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
          </div>
          <div className="current-info-display">
              <p><strong>{profile.firstName} {profile.lastName}</strong></p>
              <p>{profile.email}</p>
              <p>{profile.nationality}</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={profile.contactNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <select name="nationality" value={profile.nationality} onChange={handleChange}>
              <option value="Sri Lankan">Sri Lankan</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Passport ID</label>
            <input type="text" name="passportId" value={profile.passportId} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;