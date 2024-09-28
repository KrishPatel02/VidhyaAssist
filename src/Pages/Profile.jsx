import React, { useState } from "react";
import { FiUsers, FiCamera } from "react-icons/fi";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: "Teacher Teacher",
    email: "teacher.com",
    phone: "123 456 7890",
    country: "India",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", profileData);
    console.log("Updated Image:", selectedImage);

    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-2 lg:px-2">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gradient-to-br from-primaryColor to-secondaryColor p-8 flex flex-col items-center justify-center text-white">
            <img
              className="w-44 h-44 rounded-full shadow-lg object-cover border-4 border-white mb-4"
              src={selectedImage || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4 text-sm bg-transparent text-white focus:outline-none cursor-pointer hover:text-gray-300"
            />
            <h2 className="mt-4 text-3xl font-semibold">
              {profileData.fullName}
            </h2>
            <p className="text-gray-200 text-lg mt-2">
              Accounts Manager, Amix Corp
            </p>
            <div className="flex space-x-8 text-gray-300 mt-6">
              <div className="flex items-center">
                <FiUsers className="w-5 h-5" />
                <span className="ml-2 text-lg">254</span>
              </div>
              <div className="flex items-center">
                <FiCamera className="w-5 h-5" />
                <span className="ml-2 text-lg">54</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-8">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">
              Edit Profile
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[var(--primaryColor)] focus:border-[var(--primaryColor)] transition duration-150 ease-in-out"
                  placeholder="Johnathan Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[var(--primaryColor)] focus:border-[var(--primaryColor)] transition duration-150 ease-in-out"
                  placeholder="johnathan@admin.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone No
                </label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[var(--primaryColor)] focus:border-[var(--primaryColor)] transition duration-150 ease-in-out"
                  placeholder="123 456 7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="country"
                  value={profileData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[var(--primaryColor)] focus:border-[var(--primaryColor)] transition duration-150 ease-in-out"
                >
                  <option>INDIA</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-primaryColor text-white font-semibold rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primaryColor)]"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
