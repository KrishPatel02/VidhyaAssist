// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content area */}
      <div className="flex-grow pl-64"> {/* Adjust for fixed sidebar width */}
        {/* Header */}
        <DashboardHeader firstName="Krish" lastName="Patel" />

        {/* Main content */}
        <div className="flex-grow p-8 mt-16"> {/* Adjust for fixed header height */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
