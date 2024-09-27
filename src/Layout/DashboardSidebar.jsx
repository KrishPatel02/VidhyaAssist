// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

const menuItems = [
  { text: "Dashboard", icon: <MdOutlineDashboard />, path: "/Dashboard" },
  { text: "Attendance", icon: <FiMail />, path: "/Attendance" },
  { text: "Homework", icon: <HiOutlineBuildingLibrary />, path: "/HomeWork" },
  { text: "Notification", icon: <HiOutlineDocumentText />, path: "/Notification" },
  { text: "Profile", icon: <FiLinkedin />, path: "/Profile" },
];

export default function DashboardSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen fixed top-0 left-0 z-40 bg-white shadow-lg p-4"> {/* Fixed position */}
      <Link to="/" className="text-primaryColor text-xl font-bold inline-block">
        <span className="text-primaryColor font-bold ">Vidhya </span>{" "}
        <span className="text-secondaryColor font-bold ">Assist</span>
      </Link>

      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.text}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-red-100 text-primaryColor"
                    : "text-secondaryColor hover:bg-gray-200"
                }`}
              >
                <span className="mr-4">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
