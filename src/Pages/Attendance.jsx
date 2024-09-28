// App.js
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import arrow icons

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
    <div className="bg-white shadow-lg rounded-lg mb-4 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Accordion Header */}
      <div
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Profile Section */}
        <div className="flex items-center">
          <img
            src={student.imageUrl}
            alt={student.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
            <p className="text-gray-600">
              Attendance: <span className="font-bold text-green-600">{student.attendance}%</span>
            </p>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="text-gray-600">
          {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </div>
      </div>

      {/* Accordion Content (Graph) */}
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        {isOpen && (
          <div className="px-4 pb-4">
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
                  stroke="#34D399"
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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Attendance</h1>
      {students.map((student) => (
        <StudentProfile key={student.id} student={student} />
      ))}
    </div>
  );
};

export default App;
