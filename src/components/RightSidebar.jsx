import React, { useState } from 'react';
import { Menu, Settings, Bell, HelpCircle, Moon, Edit3 } from 'lucide-react';
import { moneyImg, userImg } from '../assets';

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="text-white fixed top-4 right-4 z-50">
        <Menu className="w-8 h-8" />
      </button>
      <aside className={`bg-gray-300 text-white w-72 min-h-screen p-4 fixed right-0 top-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        {/* User Profile */}
        <div className="flex items-center mb-8">
          <img
            src={moneyImg} // Replace with actual user profile image
            alt="User Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg text-[#0E0839] font-semibold">Nana</h3>
            <p className="text-sm text-[#0E0839]">nana@gmail.com</p>
            <button className="mt-2 text-sm text-blue-500 hover:underline flex items-center">
              <Edit3 className="w-4 h-4 mr-1" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h4 className="text-sm text-[#0E0839] font-semibold mb-2">Quick Actions</h4>
          <button className="bg-[#1F1572] text-white py-2 px-4 rounded w-full mb-4 flex items-center justify-between">
            <span>Update Profile</span>
            <Edit3 className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications */}
        <div className="mt-8">
          <h4 className="text-sm text-[#0E0839] font-semibold mb-2">Notifications</h4>
          <ul className="space-y-2">
            <li className="bg-[#1F1572] p-3 rounded-lg flex items-center justify-between">
              <span>Budget Exceeded</span>
              <Bell className="w-5 h-5 text-white" />
            </li>
            <li className="bg-[#1F1572] p-3 rounded-lg flex items-center justify-between">
              <span>New Update Available</span>
              <Bell className="w-5 h-5 text-white" />
            </li>
          </ul>
        </div>

        {/* Settings */}
        <div className="mt-8">
          <h4 className="text-sm text-[#0E0839] font-semibold mb-2">Settings</h4>
          <button className="bg-[#1F1572] text-white py-2 px-4 rounded w-full mb-4 flex items-center justify-between">
            <span>Enable Dark Mode</span>
            <Moon className="w-5 h-5" />
          </button>
          <button className="bg-[#1F1572] text-white py-2 px-4 rounded w-full flex items-center justify-between">
            <span>Email Notifications</span>
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Help and Support */}
        <div className="mt-8">
          <h4 className="text-sm text-[#0E0839] font-semibold mb-2">Help & Support</h4>
          <button className="bg-[#1F1572] text-white py-2 px-4 rounded w-full flex items-center justify-between">
            <span>FAQ</span>
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded w-full flex items-center justify-between mt-2">
            <span>Contact Support</span>
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
