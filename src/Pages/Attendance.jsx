// App.js
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const students = [
  { id: 1, name: "John Doe", attendance: 92, imageUrl: "https://via.placeholder.com/50" },
  { id: 2, name: "Jane Smith", attendance: 85, imageUrl: "https://via.placeholder.com/50" },
  { id: 3, name: "Michael Johnson", attendance: 76, imageUrl: "https://via.placeholder.com/50" },
  { id: 4, name: "Emily Davis", attendance: 89, imageUrl: "https://via.placeholder.com/50" },
];

const attendanceData = [
  { name: "Week 1", attendance: 95 },
  { name: "Week 2", attendance: 92 },
  { name: "Week 3", attendance: 89 },
  { name: "Week 4", attendance: 87 },
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
          {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={18} />}
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
              <LineChart data={attendanceData}>
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
  return (
    <div className="min-h-screen py-2 px-4">
      <div className=" mx-auto space-y-2">
        {students.map((student) => (
          <StudentProfile key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
