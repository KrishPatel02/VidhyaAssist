// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  "/": "Home",
  "/Dashboard": "Dashboard",
  "/Attendance": "Attendance",
  "/Assignment": "Assignment",
  "/dashboard/profile": "Profile",
};

const DashboardHeader = ({ firstName, lastName }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="fixed top-3 left-64 right-0 flex justify-between items-center z-30 p-4 rounded-md m-4 bg-white shadow-lg h-16"> {/* Fixed position and adjusted for sidebar */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <h6 className="text-secondaryColor font-semibold">Welcome,</h6>
          <h5 className="text-primaryColor font-bold">{`${firstName} ${lastName}`}</h5>
        </div>

        <div className="flex items-center space-x-2 text-sm text-secondaryColor mt-1">
          {pathnames.length > 0 ? (
            <div className="flex items-center">
              <Link to="/" className="text-secondaryColor font-semibold">
                Home
              </Link>
              {pathnames.map((value, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <span key={value} className="flex items-center">
                    <span className="text-secondaryColor mx-2">/</span>
                    {isLast ? (
                      <span className="font-bold">
                        {breadcrumbMap[routeTo] || value}
                      </span>
                    ) : (
                      <Link
                        to={routeTo}
                        className=" font-semibold"
                      >
                        {breadcrumbMap[routeTo] || value}
                      </Link>
                    )}
                  </span>
                );
              })}
            </div>
          ) : (
            <span className="font-bold text-[#002D42]">Home</span>
          )}
        </div>
      </div>

      <div className="flex items-center w-1/2 bg-gray-100 rounded-lg px-4 py-3 shadow-sm">
        <AiOutlineSearch className="text-[#002D42] mr-2" size={20} />
        <input
          type="text"
          placeholder="Search your dashboard..."
          className="bg-transparent w-full outline-none text-base text-secondaryColor"
        />
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/Announcement" className="text-primaryColor text-xl font-bold inline-block">
          <div className="relative cursor-pointer hover:text-[#FF424E] transition-all duration-200 ease-in-out">

            <FiBell size={24} className="text-secondaryColor" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white  bg-primaryColor rounded-full">
              3
            </span>
          </div>
        </Link>

        <div className="cursor-pointer hover:text-primaryColor transition-all duration-200 ease-in-out">
          <FiSettings size={24} className="text-secondaryColor" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
