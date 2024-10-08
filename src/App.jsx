// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Attendance from "./Pages/Attendance";
import Assignment from "./Pages/Assignment";
import Announcement from "./Pages/Announcement";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import StudentProfile from "./Pages/StudentProfile";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Assignment" element={<Assignment />} />
            <Route path="/Announcement" element={<Announcement />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/StudentProfile" element={<StudentProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
