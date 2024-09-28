import React, { useEffect, useState } from "react";
import { db, ref, onValue } from "../firebase";
import { FiChevronDown, FiChevronUp, FiUser } from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which accordion is expanded

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

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Colors for Pie Chart
  const COLORS = ["#FF8042", "#00C49F"];

  const renderChart = (student) => (
    <ResponsiveContainer width="100%" height={100}>
      <PieChart>
        <Pie
          data={[
            { name: "Submitted", value: student.HomeworkSubmitted },
            { name: "Pending", value: student.HomeworkPending },
          ]}
          dataKey="value"
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
        >
          <Cell key={`cell-0`} fill={COLORS[0]} />
          <Cell key={`cell-1`} fill={COLORS[1]} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Student Details</h2>
      {studentData.map((student, index) => (
        <div
          key={student.StudentID}
          className="bg-white shadow-lg rounded-lg overflow-hidden m-2 duration-300"
        >
          <div
            className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-4">
              <FiUser className="text-2xl text-gray-600" />
              <div className="text-xl font-semibold text-gray-800">{student.Name}</div>
            </div>
            {expandedIndex === index ? (
              <FiChevronUp className="text-xl text-gray-500" />
            ) : (
              <FiChevronDown className="text-xl text-gray-500" />
            )}
          </div>
          {expandedIndex === index && (
            <div className="border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Student ID:</strong> {student.StudentID}</p>
                  <p className="text-gray-700"><strong>Standard:</strong> {student.Std}</p>
                  <p className="text-gray-700"><strong>Attendance Percentage:</strong> {student.AttendancePercentage}%</p>
                  <p className="text-gray-700"><strong>Performance Grade:</strong> {student.PerformanceGrade}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-gray-700"><strong>Homework Status</strong></p>
                  {renderChart(student)}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentProfile;
