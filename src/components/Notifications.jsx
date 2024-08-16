import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const handleDeleteClick = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Notifications</h2>

      <div className="mb-4">
        <button
          onClick={clearAllNotifications}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Clear All Notifications
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications available</p>
      ) : (
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-2 bg-gray-100 rounded mb-2 flex justify-between items-center"
            >
              <span>{notification.message}</span>
              <button
                onClick={() => handleDeleteClick(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
