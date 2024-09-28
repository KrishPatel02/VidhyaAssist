import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { db, ref, onValue } from "../firebase";

const Dashboard = () => {
  const [studentData, setStudentData] = useState([]);
  const primaryColor = "#FF424E";
  const secondaryColor = "#002D42";

  useEffect(() => {
    const studentRef = ref(db, "students/");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.values(data);
        setStudentData(formattedData);
      }
    });
  }, []);

  const standards = [6, 7, 8, 9, 10];
  const attendanceData = standards.map((std) => {
    const filteredStudents = studentData.filter((student) => student.Std === std);
    const avgAttendance =
      filteredStudents.reduce((sum, student) => sum + student.AttendancePercentage, 0) /
      filteredStudents.length;
    return { std: `Std ${std}`, avgAttendance: avgAttendance || 0 };
  });

  const homeworkData = standards.map((std) => {
    const filteredStudents = studentData.filter((student) => student.Std === std);
    const totalPending = filteredStudents.reduce((sum, student) => sum + student.HomeworkPending, 0);
    const totalSubmitted = filteredStudents.reduce(
      (sum, student) => sum + student.HomeworkSubmitted,
      0
    );
    return { std: `Std ${std}`, pending: totalPending, submitted: totalSubmitted };
  });

  const performanceData = standards.map((std) => {
    const filteredStudents = studentData.filter((student) => student.Std === std);
    const gradeCounts = filteredStudents.reduce(
      (acc, student) => {
        acc[student.PerformanceGrade] = (acc[student.PerformanceGrade] || 0) + 1;
        return acc;
      },
      { A: 0, B: 0, C: 0, D: 0, E: 0 }
    );
    return { std: `Std ${std}`, ...gradeCounts };
  });

  return (
    <div className="flex-grow p-2">
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200 mt-8">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Homework Status by Standard</h6>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={homeworkData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="std" stroke={secondaryColor} />
            <YAxis stroke={secondaryColor} />
            <Tooltip />
            <Bar dataKey="pending" fill={primaryColor} barSize={20} />
            <Bar dataKey="submitted" fill="#FF848B" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200 mt-8">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Attendance Overview by Standard</h6>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="std" stroke={secondaryColor} />
            <YAxis stroke={secondaryColor} />
            <Tooltip />
            <Line type="monotone" dataKey="avgAttendance" stroke={primaryColor} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart - Performance Grades */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200 mt-8">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Student Performance by Standard</h6>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="std" stroke={secondaryColor} />
            <PolarRadiusAxis stroke={secondaryColor} />
            <Radar
              name="Performance"
              dataKey="A"
              stroke={primaryColor}
              fill={primaryColor}
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart - Combined Statistics */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200 mt-8">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Combined Statistics by Standard</h6>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={attendanceData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="std" stroke={secondaryColor} />
            <YAxis stroke={secondaryColor} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="avgAttendance"
              stroke={primaryColor}
              fill="#FF848B"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
