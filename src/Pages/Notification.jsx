import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";

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
    title:
      "📢 Important Update: Assignment Deadline Extended & Session Rescheduled",
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-shadow hover:shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <AiOutlineNotification className="text-primaryColor w-6 h-6 mr-2" />
          <span className="font-semibold text-gray-900">
            {notification.title}
          </span>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{notification.details}</p>
          <p className="text-sm text-gray-500 mt-1">
            By {notification.author} at {notification.time}
          </p>
        </div>
      )}
    </div>
  );
};

const NotificationPage = () => {
  const groupedNotifications = groupByDate(notifications);

  return (
    <div className=" min-h-screen ">
      <div className=" mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Notifications
          </h1>
          <p className="text-gray-600">
            Stay updated with the latest announcements
          </p>
        </div>

        {Object.keys(groupedNotifications).map((date) => (
          <div key={date} className="mb-8">
            <div className="text-gray-500 text-sm mb-3 font-medium">{date}</div>
            {groupedNotifications[date].map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
