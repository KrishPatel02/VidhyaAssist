import React from "react";
import { FiUser, FiBookOpen, FiBarChart2 } from "react-icons/fi";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Jan", abcde: 65 },
  { name: "Feb", abcde: 78 },
  { name: "Mar", abcde: 85 },
  { name: "Apr", abcde: 90 },
  { name: "May", abcde: 95 },
  { name: "Jun", abcde: 92 },
];

const pieData = [
  { name: "asdfasdf", value: 30 },
  { name: "zxcvzxcv", value: 20 },
  { name: "qwerqwer", value: 50 },
];

const barData = [
  { name: "kasdfkjdf", students: 100 },
  { name: "ksdfkdfj", students: 90 },
  { name: "asdfkdsfk", students: 120 },
];

const radarData = [
  { subject: "Gift City", A: 85, fullMark: 100 },
  { subject: "Bangalore", A: 92, fullMark: 100 },
  { subject: "Pune", A: 80, fullMark: 100 },
];

const Dashboard = () => {
  return (
    <div className="flex-grow p-2 ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white text-[#002D42] shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <div>
          <h6 className="font-semibold text-lg text-gray-700">Applications</h6>
          <div className="flex justify-between items-center mt-4">
            <FiUser size={28} className="text-[#FF424E]" />
            <h3 className="text-4xl font-bold text-gray-900">250</h3>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#002D42] shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <div>
          <h6 className="font-semibold text-lg text-gray-700">Admissions</h6>
          <div className="flex justify-between items-center mt-4">
            <FiBookOpen size={28} className="text-[#FF424E]" />
            <h3 className="text-4xl font-bold text-gray-900">32</h3>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#002D42] shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <div>
          <h6 className="font-semibold text-lg text-gray-700">Applied University</h6>
          <div className="flex justify-between items-center mt-4">
            <FiBarChart2 size={28} className="text-[#FF424E]" />
            <h3 className="text-4xl font-bold text-gray-900">89%</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Line Chart */}
    <div className="mt-8">
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">CV Selected</h6>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="abcde" stroke="#FF424E" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Bar Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">LinkedIn Engagement</h6>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <Bar dataKey="students" fill="#FF424E" barSize={30} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Applications</h6>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#FF424E"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Radar Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Job Location</h6>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" stroke="#333" />
            <PolarRadiusAxis stroke="#333" />
            <Radar name="abcde" dataKey="A" stroke="#FF424E" fill="#FF424E" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-200">
        <h6 className="font-semibold text-lg text-gray-700 mb-4">Job Offer</h6>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
            <Area type="monotone" dataKey="abcde" stroke="#FF424E" fill="#FF848B" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
