import React, { useState } from "react";
import { AiOutlineFolder, AiOutlinePlus, AiOutlineClose } from "react-icons/ai"; // Import relevant icons
import { FiMoreVertical } from "react-icons/fi"; // More options icon
import { BiSearch } from "react-icons/bi"; // Search icon

function HomeWork() {
  const [showFileInput, setShowFileInput] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic here
    }
  };

  // Toggle file input modal
  const toggleFileInput = () => {
    setShowFileInput(!showFileInput);
  };

  const folders = [
    { name: "A1", modified: "Sep 24" },
    { name: "A2", modified: "Sep 24" },
    { name: "A3", modified: "Sep 24" },
    { name: "A4", modified: "Sep 24" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Header */}
      <div className="p-4 bg-primaryColor text-white flex items-center justify-between">
      
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BiSearch size={24} className="absolute left-2 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <button className="text-white">
            <FiMoreVertical size={24} />
          </button>
        </div>
      </div>

      {/* Folders */}
      <div className="p-4 space-y-4">
        {folders.map((folder, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <AiOutlineFolder className="text-primaryColor w-8 h-8" />
              <span className="ml-4 text-gray-800 font-medium">{folder.name}</span>
            </div>
            <div className="text-sm text-gray-500">Modified {folder.modified}</div>
          </div>
        ))}
      </div>

      {/* Add New Folder Button */}
      <div className="fixed right-6 bottom-16">
        <button
          className="w-12 h-12 bg-primaryColor text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondaryColor transition-colors"
          onClick={toggleFileInput}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>

      {/* File Input Modal */}
      {showFileInput && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleFileInput}
          ></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Upload a File</h3>
              <button onClick={toggleFileInput}>
                <AiOutlineClose size={24} className="text-gray-600" />
              </button>
            </div>
            <input
              type="file"
              className="border border-gray-300 p-2 w-full rounded-lg mb-4"
              onChange={handleFileChange}
            />
            <button
              className="w-full py-2 bg-primaryColor text-white rounded-lg hover:bg-secondaryColor transition-colors"
              onClick={toggleFileInput}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeWork;
