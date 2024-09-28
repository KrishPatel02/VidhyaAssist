import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { db, ref, onValue } from "../firebase"; // Assuming Firebase is initialized in firebase.js

const attendanceDataTemplate = [
  { name: "Week 1", attendance: 0 },
  { name: "Week 2", attendance: 0 },
  { name: "Week 3", attendance: 0 },
  { name: "Week 4", attendance: 0 },
];

const StudentProfile = ({ student }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl mb-6 transition-all duration-300 ease-in-out hover:shadow-lg">
      {/* Card Header */}
      <div
        className="p-5 flex items-center justify-between cursor-pointer border-b border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Student Info */}
        <div className="flex items-center">
          <img
            src={student.imageUrl}
            alt={student.name}
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <div className="ml-4">
            <h3 className="text-sm font-semibold text-secondaryColor">{student.name}</h3>
            <p className="text-sm text-gray-500">
              Attendance: <span className="text-green-600 font-medium">{student.attendance}%</span>
            </p>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="text-gray-500">
          {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>
      </div>

      {/* Accordion Content */}
      <div
        className={`transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        {isOpen && (
          <div className="px-6 py-4">
            <h4 className="text-gray-700 font-medium mb-3">Weekly Attendance Overview</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={student.weeklyAttendance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentRef = ref(db, "students/");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].Name || "Unnamed Student",
          attendance: data[key].AttendancePercentage || 0,
          imageUrl: data[key].imageUrl || "https://via.placeholder.com/50",
          weeklyAttendance: data[key].weeklyAttendance || attendanceDataTemplate,
        }));
        setStudents(formattedData);
      }
    });
  }, []);

  return (
    <div className="min-h-screen py-2 px-4">
      {/* Attendance description */}
      <div className="text-gray-700 text-sm mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Attendance
        </h1>
        View and track student attendance and weekly progress below.
      </div>

      <div className="mx-auto space-y-2">
        {students.map((student) => (
          <StudentProfile key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
