import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "./EditProfile.css";

const EditProfile = ({ currentProfile, onSave }) => {
  // 'profile' handles the form inputs
  const [profile, setProfile] = useState(currentProfile);
  // 'displayInfo' handles the text next to the image (only updates on save)
  const [displayInfo, setDisplayInfo] = useState(currentProfile);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/;

    if (!profile.firstName?.trim()) tempErrors.firstName = "First name is required";
    if (!profile.lastName?.trim()) tempErrors.lastName = "Last name is required";
    
    if (!profile.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(profile.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!profile.contactNumber) {
      tempErrors.contactNumber = "Phone number is required";
    } else if (!phoneRegex.test(profile.contactNumber)) {
      tempErrors.contactNumber = "Enter a valid phone (10-15 digits)";
    }

    if (!profile.passportId?.trim()) {
      tempErrors.passportId = "Passport/ID is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profileImage: imageUrl }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API Delay
      setTimeout(() => {
        // Update the local display info only now
        setDisplayInfo(profile);
        // Pass the data up to the parent
        onSave(profile);
        
        setIsSubmitting(false);
        alert("Profile Updated Successfully!");
      }, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form" noValidate>
        <div className="profile-image-section">
          <div className="image-wrapper">
            <img 
              src={profile.profileImage || "https://via.placeholder.com/150"} 
              alt="Profile" 
              className="profile-preview-img" 
            />
            <label htmlFor="file-upload" className="custom-file-upload">
              <FaCamera /> Edit Image
            </label>
            <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          
          {/* This section now uses displayInfo which only updates on Save */}
          <div className="current-info-display">
              <p><strong>{displayInfo.firstName} {displayInfo.lastName}</strong></p>
              <p>{displayInfo.email}</p>
              <p>{displayInfo.nationality}</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              className={errors.firstName ? "input-error" : ""}
              value={profile.firstName || ""} 
              onChange={handleChange} 
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              className={errors.lastName ? "input-error" : ""}
              value={profile.lastName || ""} 
              onChange={handleChange} 
            />
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              className={errors.email ? "input-error" : ""}
              value={profile.email || ""} 
              onChange={handleChange} 
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input 
              type="text" 
              name="contactNumber" 
              className={errors.contactNumber ? "input-error" : ""}
              value={profile.contactNumber || ""} 
              onChange={handleChange} 
            />
            {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
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
            <input 
              type="text" 
              name="passportId" 
              className={errors.passportId ? "input-error" : ""}
              value={profile.passportId || ""} 
              onChange={handleChange} 
            />
            {errors.passportId && <span className="error-text">{errors.passportId}</span>}
          </div>
        </div>

        <button type="submit" className="save-btn" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;