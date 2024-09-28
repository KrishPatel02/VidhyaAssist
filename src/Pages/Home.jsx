import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 p-8">
        <h1 className="p-9 text-5xl font-bold text-white text-center">Vidhya Assist</h1>
        <p className="text-lg text-white text-center mt-2">Empowering Your Learning Experience</p>
      </header>

      <main className="flex flex-col items-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto my-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Vidhya Assist!</h2>
          <p className="mb-6 text-center text-gray-600">
            Experience seamless management of your classroom with our intuitive tools designed for both teachers and students.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           
          </div>
        </div>

        {/* Detailed Attendance Tracking Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto my-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
            <p className="text-gray-600 mb-4">
              Our Attendance Tracking tool allows teachers to easily mark and manage attendance with just a few clicks. You can view detailed reports, track attendance trends, and ensure that every student is accounted for.
            </p>
            <p className="text-gray-600 mb-4">
              Features include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Real-time attendance updates</li>
              <li>Automated notifications for absentees</li>
              <li>Customizable attendance reports</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1596495578006-34d95d29543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxhdHRlbmRhbmNlJTIwdHJhY2tpbmclMjBhdHRlbmRhbmNlfGVufDB8fHx8MTY5OTgyMjE0Ng&ixlib=rb-4.0.3&q=80&w=400" alt="Attendance Tracking" className="w-full h-64 rounded-lg object-cover" />
          </div>
        </div>

         {/* Detailed Attendance Tracking Section */}
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto my-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
            <p className="text-gray-600 mb-4">
              Our Attendance Tracking tool allows teachers to easily mark and manage attendance with just a few clicks. You can view detailed reports, track attendance trends, and ensure that every student is accounted for.
            </p>
            <p className="text-gray-600 mb-4">
              Features include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Real-time attendance updates</li>
              <li>Automated notifications for absentees</li>
              <li>Customizable attendance reports</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1596495578006-34d95d29543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxhdHRlbmRhbmNlJTIwdHJhY2tpbmclMjBhdHRlbmRhbmNlfGVufDB8fHx8MTY5OTgyMjE0Ng&ixlib=rb-4.0.3&q=80&w=400" alt="Attendance Tracking" className="w-full h-64 rounded-lg object-cover" />
          </div>
        </div>

         {/* Detailed Attendance Tracking Section */}
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto my-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
            <p className="text-gray-600 mb-4">
              Our Attendance Tracking tool allows teachers to easily mark and manage attendance with just a few clicks. You can view detailed reports, track attendance trends, and ensure that every student is accounted for.
            </p>
            <p className="text-gray-600 mb-4">
              Features include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Real-time attendance updates</li>
              <li>Automated notifications for absentees</li>
              <li>Customizable attendance reports</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1596495578006-34d95d29543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxhdHRlbmRhbmNlJTIwdHJhY2tpbmclMjBhdHRlbmRhbmNlfGVufDB8fHx8MTY5OTgyMjE0Ng&ixlib=rb-4.0.3&q=80&w=400" alt="Attendance Tracking" className="w-full h-64 rounded-lg object-cover" />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">Quick Navigation</h2>
          <div className="space-y-4">
            <Link to="/profile" className="block px-4 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              View Profile
            </Link>
            <Link to="/attendance" className="block px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600">
              Attendance Tracking
            </Link>
            <Link to="/homework" className="block px-4 py-2 bg-orange-500 text-white rounded-lg text-center hover:bg-orange-600">
              Homework Management
            </Link>
            <Link to="/announcements" className="block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600">
              Announcements
            </Link>
          </div>
        </div>
         {/* Testimonials Section */}
         <section className="bg-gray-200 py-12 mt-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/3">
              <p className="italic">"Vidhya Assist has transformed the way I manage my classroom!"</p>
              <p className="mt-2 font-semibold">- Teacher A</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/3">
              <p className="italic">"The tools are so user-friendly and effective."</p>
              <p className="mt-2 font-semibold">- Student B</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3">
              <p className="italic">"I love the announcements feature! It's very helpful."</p>
              <p className="mt-2 font-semibold">- Parent C</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white py-12 rounded-lg mt-6">
          <h2 className="text-2xl font-bold text-center mb-4">Join Us Today!</h2>
          <p className="text-center mb-6">Unlock the full potential of your classroom management with Vidhya Assist.</p>
          <Link to="/signup" className="block mx-auto px-6 py-3 bg-white text-blue-600 rounded-lg text-center hover:bg-gray-200 transition duration-300">
            Sign Up Now
          </Link>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 py-12 mt-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-4">Have any questions? We'd love to hear from you!</p>
          <Link to="/contact" className="block mx-auto px-6 py-3 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300">
            Contact Us
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p>&copy; 2024 Vidhya Assist. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

 
export default HomePage;
