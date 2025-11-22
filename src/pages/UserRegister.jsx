import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import bgImage from "../assets/Document.png";

export default function UserRegister() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profile_image_url: "",
    passport_nic_number: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state_province: "",
    postal_code: "",
    country: "",
    date_of_birth: "",
  });

  const [profileImagePreview, setProfileImagePreview] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData({ ...userData, profile_image_url: file });
      setProfileImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleRegister = () => {
    console.log("User Data:", userData);
    alert("Form submitted! Check console");
  };

  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] flex justify-center items-center bg-contain bg-center py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white shadow-lg drop-shadow-xl/50 rounded-2xl w-[850px] px-10 py-10 overflow-auto max-h-[85vh]">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Create Your Account ✨
        </h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {profileImagePreview ? (
              <img
                src={profileImagePreview}
                className="w-full h-full object-cover"
                alt="Profile Preview"
              />
            ) : (
              <span className="text-xs flex items-center justify-center h-full text-gray-500">
                No image
              </span>
            )}
          </div>

          <label className="mt-3 cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="First Name"
            name="first_name"
            placeholder="Enter first name"
            value={userData.first_name}
            onChange={handleChange}
          />

          <InputField
            label="Last Name"
            name="last_name"
            placeholder="Enter last name"
            value={userData.last_name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={userData.email}
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            name="phone"
            placeholder="Enter phone number"
            value={userData.phone}
            onChange={handleChange}
          />

          <InputField
            label="Passport / NIC Number"
            name="passport_nic_number"
            placeholder="Enter document number"
            value={userData.passport_nic_number}
            onChange={handleChange}
          />

          <InputField
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            value={userData.date_of_birth}
            onChange={handleChange}
          />
        </div>

        {/* Address Section */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Address Information 📍
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Address Line 1"
            name="address_line1"
            placeholder="Street / No"
            value={userData.address_line1}
            onChange={handleChange}
          />

          <InputField
            label="Address Line 2"
            name="address_line2"
            placeholder="Apartment / Unit"
            value={userData.address_line2}
            onChange={handleChange}
          />

          <InputField
            label="City"
            name="city"
            placeholder="Enter city"
            value={userData.city}
            onChange={handleChange}
          />

          <InputField
            label="State / Province"
            name="state_province"
            placeholder="Enter state"
            value={userData.state_province}
            onChange={handleChange}
          />

          <InputField
            label="Postal Code"
            name="postal_code"
            placeholder="Enter postal code"
            value={userData.postal_code}
            onChange={handleChange}
          />

          <InputField
            label="Country"
            name="country"
            placeholder="Enter country"
            value={userData.country}
            onChange={handleChange}
          />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-[#113D47] text-white py-3 rounded-md text-lg font-medium
  border-2 border-[#113D47]
  transition-all duration-300 mt-8
  hover:bg-white hover:text-[#113D47] hover:scale-105"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-900 font-medium underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
