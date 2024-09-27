import React, { useState } from 'react';

const ProfileCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: "Hanna Gover",
    email: "hanna@amixcorp.com",
    phone: "123 456 7890",
    country: "London",
  });

  // Handle image selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Simulate form submission (without server)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // For now, we're just logging the updated profile data.
    console.log("Updated Profile Data:", profileData);
    console.log("Updated Image:", selectedImage);
    
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex p-6 space-x-8">
        {/* Left Section: Profile Picture and Stats */}
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src={selectedImage || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 text-sm text-gray-500"
          />
          <h2 className="text-xl font-semibold">{profileData.fullName}</h2>
          <p className="text-gray-500">Accounts Manager Amix corp</p>
          <div className="flex space-x-8 text-gray-600">
            <div className="flex items-center">
              <span className="material-icons">people</span>
              <span className="ml-2">254</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons">camera_alt</span>
              <span className="ml-2">54</span>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Form */}
        <div className="w-full">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                placeholder="Johnathan Doe"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                placeholder="johnathan@admin.com"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone No</label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                placeholder="123 456 7890"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Country</label>
              <select
                name="country"
                value={profileData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              >
                <option>INDIA</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
