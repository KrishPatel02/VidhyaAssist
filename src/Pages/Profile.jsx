import React, { useState } from 'react';

const Profile = () => {
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
    console.log("Updated Profile Data:", profileData);
    console.log("Updated Image:", selectedImage);
    
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden  duration-300">
        <div className="md:flex">
          
          {/* Left Section: Profile Picture */}
          <div className="md:w-1/3 p-8  flex flex-col items-center justify-center">
            <img
              className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-white"
              src={selectedImage || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4 text-sm text-white focus:outline-none cursor-pointer hover:text-gray-300"
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">{profileData.fullName}</h2>
            <p className="text-gray-100 mt-2">Accounts Manager, Amix Corp</p>
            <div className="flex space-x-4 text-gray-200 mt-4">
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
          <div className="md:w-2/3 p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Edit Profile</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
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
                <label className="block text-sm font-medium text-gray-600">Email</label>
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
                <label className="block text-sm font-medium text-gray-600">Phone No</label>
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
                <label className="block text-sm font-medium text-gray-600">Country</label>
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
                  className="w-full py-3 px-4 bg-primaryColor text-white font-semibold rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primaryColor)]"
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
