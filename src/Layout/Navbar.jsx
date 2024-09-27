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
        <div className="flex justify-center t-4xl">
          <h1 className="text-primaryColor font-bold ">Vidhya</h1>
          <h1 className="text-secondaryColor font-bold ">Assist</h1>
        </div>

        <div className="relative w-2/5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-primaryColor"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primaryColor" />
        </div>

        <div className="flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path
                  ? "text-primaryColor border-b-2 border-primaryColor"
                  : "text-secondaryColor"
              } hover:text-primaryColor hover:border-b-2 hover:border-primaryColor pb-1`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link to="/Login">
          <button className="ml-3 bg-primaryColor text-white py-2 px-4 rounded hover:bg-red-500 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
