import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Arrow icons

const notifications = [
  {
    id: 1,
    date: "2024/09/24",
    title: "Important Announcement: Group Formation and Privacy",
    details:
      "Details about group formation, privacy policy, and related conduct. Please adhere to the guidelines.",
    time: "03:33 PM",
    author: "VaultofCodes",
  },
  {
    id: 2,
    date: "2024/09/24",
    title: "Important Announcement: Attendance and Conduct",
    details:
      "Attendance and conduct-related information. Please make sure to follow the proper attendance protocols.",
    time: "03:21 PM",
    author: "VaultofCodes",
  },
  {
    id: 3,
    date: "2024/09/14",
    title: "📢 Important Update: Assignment Deadline Extended & Session Rescheduled",
    details:
      "The assignment deadline has been extended. Additionally, the session for September 15 has been rescheduled.",
    time: "06:43 PM",
    author: "VaultofCodes",
  },
  {
    id: 4,
    date: "2024/09/13",
    title: "Hey Superstars, 🌟",
    details:
      "Hello everyone! A quick motivational message to start your week on a high note. Keep up the good work!",
    time: "10:00 PM",
    author: "VaultofCodes",
  },
];

// Group notifications by date
const groupByDate = (notifications) => {
  return notifications.reduce((grouped, notification) => {
    const date = notification.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(notification);
    return grouped;
  }, {});
};

const NotificationItem = ({ notification }) => {
  const [isOpen, setIsOpen] = useState(false); // Track open/close state

  return (
    <div className="border-b py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle notification details
      >
        <span className="font-semibold text-gray-900">{notification.title}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{notification.details}</p>
          <p className="text-gray-500 text-sm mt-1">
            by {notification.author} at {notification.time}
          </p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const groupedNotifications = groupByDate(notifications);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto">
        {Object.keys(groupedNotifications).map((date) => (
          <div key={date} className="mb-4">
            <div className="text-gray-500 text-sm mb-2">{date}</div>
            {groupedNotifications[date].map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
