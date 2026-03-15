import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
// import "./EditProfile.css";
import axios from "axios";
import { uploadImageToSupabase } from "../services/ImageSave";

const EditProfile = ({ currentProfile, onSave }) => {

  const [profile, setProfile] = useState(currentProfile);
  const [displayInfo, setDisplayInfo] = useState(currentProfile);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const validate = () => {
    let tempErrors = {};

    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    const passportRegex = /^[A-Za-z0-9]{5,20}$/;
    const countryRegex = /^[A-Za-z\s]{2,50}$/;

    if (!profile.firstName?.trim()) {
      tempErrors.firstName = "First name is required";
    } else if (!nameRegex.test(profile.firstName)) {
      tempErrors.firstName = "First name must contain only letters";
    }

    if (!profile.lastName?.trim()) {
      tempErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(profile.lastName)) {
      tempErrors.lastName = "Last name must contain only letters";
    }

    if (!profile.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(profile.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!profile.contactNumber) {
      tempErrors.contactNumber = "Phone number is required";
    } else if (!phoneRegex.test(profile.contactNumber)) {
      tempErrors.contactNumber = "Enter a valid phone number (10-15 digits)";
    }

    if (!profile.country?.trim()) {
      tempErrors.country = "Country is required";
    } else if (!countryRegex.test(profile.country)) {
      tempErrors.country = "Country must contain only letters";
    }

    if (!profile.passportId?.trim()) {
      tempErrors.passportId = "Passport/ID is required";
    } else if (!passportRegex.test(profile.passportId)) {
      tempErrors.passportId = "Enter a valid Passport/NIC number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleImageChange = async (e) => {

    const file = e.target.files[0];
    if (!file) return;

    // file validation
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    try {
      setIsUploading(true);

      // preview image
      const previewUrl = URL.createObjectURL(file);
      setProfile((prev) => ({
        ...prev,
        profileImage: previewUrl
      }));

      // upload to supabase
      const uploadedUrl = await uploadImageToSupabase(file);

      if (uploadedUrl) {
        setProfile((prev) => ({
          ...prev,
          profileImage: uploadedUrl
        }));
      } else {
        alert("Image upload failed");
      }

    } catch (error) {
      console.error("Image upload error", error);
      alert("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {

      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      await axios.put(
        `http://localhost:8082/api/v1/tourists/${userId}`,
        {
          first_name: profile.firstName,
          last_name: profile.lastName,
          email: profile.email,
          phone: profile.contactNumber,
          passport_nic_number: profile.passportId,
          country: profile.country,
          profile_image_url: profile.profileImage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      setDisplayInfo(profile);
      onSave(profile);

      alert("Profile Updated Successfully!");

    } catch (error) {

      console.error("Update failed", error);
      alert("Failed to update profile");

    } finally {

      setIsSubmitting(false);

    }
  };

  return (
  <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

    <h2 className="text-2xl font-semibold text-center mb-8">
      Edit Profile
    </h2>

    <form onSubmit={handleSubmit} className="space-y-8">

      {/* PROFILE IMAGE */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">

        <div className="relative">

          <img
            src={profile.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow"
          />

          <label
            htmlFor="file-upload"
            className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer"
          >
            <FaCamera />
            {isUploading ? "Uploading..." : "Edit"}
          </label>

          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

        </div>

        <div className="text-center md:text-left">
          <p className="font-semibold text-lg">
            {displayInfo.firstName} {displayInfo.lastName}
          </p>
          <p className="text-gray-500">{displayInfo.email}</p>
        </div>

      </div>

      <hr className="border-gray-200"/>

      {/* FORM GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* FIRST NAME */}
        <div>
          <label className="text-sm text-gray-600">First Name</label>

          <input
            type="text"
            name="firstName"
            value={profile.firstName || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400
            ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName}
            </p>
          )}
        </div>


        {/* LAST NAME */}
        <div>
          <label className="text-sm text-gray-600">Last Name</label>

          <input
            type="text"
            name="lastName"
            value={profile.lastName || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400
            ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName}
            </p>
          )}
        </div>


        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email Address</label>

          <input
            type="email"
            name="email"
            value={profile.email || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400
            ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>


        {/* CONTACT */}
        <div>
          <label className="text-sm text-gray-600">Contact Number</label>

          <input
            type="text"
            name="contactNumber"
            value={profile.contactNumber || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400
            ${errors.contactNumber ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.contactNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactNumber}
            </p>
          )}
        </div>


        {/* COUNTRY */}
        <div>
          <label className="text-sm text-gray-600">Country</label>

          <input
            type="text"
            name="country"
            value={profile.country || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400
            ${errors.country ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country}
            </p>
          )}
        </div>


        {/* PASSPORT */}
        <div>
          <label className="text-sm text-gray-600">Passport ID</label>

          <input
            type="text"
            name="passportId"
            value={profile.passportId || ""}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400
            ${errors.passportId ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.passportId && (
            <p className="text-red-500 text-xs mt-1">
              {errors.passportId}
            </p>
          )}
        </div>

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </button>

    </form>

  </div>
);
};

export default EditProfile;