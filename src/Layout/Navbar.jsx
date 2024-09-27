import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/AboutUs", label: "About Us" },
  { path: "/Dashboard", label: "Dashboard" },
  
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-evenly items-center py-3 px-5">
        {/* Logo/Title */}
        <h1 className="text-black font-bold text-xl">Vidhya Assist</h1>

        {/* Search Field */}
        <div className="relative w-2/5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-red-500"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path ? "text-red-500 border-b-2 border-red-500" : "text-blue-900"
              } hover:text-red-500 hover:border-b-2 hover:border-red-500 pb-1`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Link to="/Login">
          <button className="ml-3 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-500 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
