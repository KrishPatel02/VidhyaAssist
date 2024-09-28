import React, { useState } from "react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Login form submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)]">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-[var(--primaryColor)] mb-6">Welcome Back</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-primaryColor font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-[var(--primaryColor)] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
