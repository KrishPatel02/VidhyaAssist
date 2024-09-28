import React, { useState } from "react";
import {
  AiOutlineFolder,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFile,
} from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Assignment() {
  const [showFileInput, setShowFileInput] = useState(false);
  const [expandedFolder, setExpandedFolder] = useState(null); // For accordion toggle

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

  // Toggle accordion for specific folder
  const toggleAccordion = (index) => {
    setExpandedFolder(expandedFolder === index ? null : index);
  };

  const folders = [
    {
      name: "A1",
      modified: "Sep 24, 2024",
      size: "1.2MB",
      completed: 75,
      totalStudents: 100,
    },
    {
      name: "A2",
      modified: "Sep 24, 2024",
      size: "2.3MB",
      completed: 50,
      totalStudents: 100,
    },
    {
      name: "A3",
      modified: "Sep 24, 2024",
      size: "3.4MB",
      completed: 90,
      totalStudents: 100,
    },
    {
      name: "A4",
      modified: "Sep 24, 2024",
      size: "1.7MB",
      completed: 30,
      totalStudents: 100,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Assignment description */}
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Assignment</h1>
        <p className="text-gray-600">
        Manage and track Assignment and student submissions.
        </p>

        {/* Folder Display */}
        {folders.map((folder, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            {/* Folder Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <AiOutlineFolder className="text-primaryColor w-8 h-8" />
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">{folder.name}</p>
                  <p className="text-sm text-gray-500">
                    Modified: {folder.modified} | Size: {folder.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-primaryColor hover:text-secondaryColor transition-colors">
                  <MdOutlineOpenInNew size={24} />
                </button>
                <button className="text-primaryColor hover:text-secondaryColor transition-colors">
                  <AiOutlineDownload size={24} />
                </button>
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <AiOutlineDelete size={24} />
                </button>
                <button
                  className="text-primaryColor hover:text-secondaryColor transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  {expandedFolder === index ? (
                    <BsChevronUp size={20} />
                  ) : (
                    <BsChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Accordion Section for Completion Chart */}
            {expandedFolder === index && (
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Completion Rate:</p>
                  <p className="text-sm text-gray-600">
                    {folder.completed} / {folder.totalStudents} students
                  </p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="h-2 rounded-full bg-primaryColor"
                    style={{
                      width: `${
                        (folder.completed / folder.totalStudents) * 100
                      }%`,
                      // backgroundColor: "var(--primaryColor)",
                    }}
                  ></div>
                </div>
              </div>
            )}
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
              <h3 className="text-lg font-semibold text-gray-800">
                Upload a File
              </h3>
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

export default Assignment;
