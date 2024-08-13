import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="bg-[#1F1572] text-white w-72 min-h-screen p-4 fixed right-0 top-0">
      {/* User Profile */}
      <div className="flex items-center mb-8">
        <img
          src="https://via.placeholder.com/50" // Replace with actual user profile image
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Frank </h3>
          <p className="text-sm text-gray-300">frank@gmail.com</p>
        </div>
      </div>

      {/* Card Information */}
      <div className="bg-[#2C2172] p-4 rounded-lg mb-8">
        <h4 className="text-sm font-semibold mb-2">Your cards</h4>
        <div className="bg-[#3A2A9A] p-4 rounded-lg">
          <p className="text-lg font-semibold">Visa</p>
          <p className="text-sm">**** **** **** 1234</p>
          <p className="text-lg font-semibold mt-2">$14,756.24</p>
        </div>
      </div>

      {/* Amount Transfer */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Amount Transfer</h4>
        <div className="space-y-4">
          <div className="bg-[#2C2172] p-4 rounded-lg flex items-center">
            <span className="text-lg font-semibold">$12,000</span>
            <span className="ml-auto text-sm text-gray-300">Transfer via Card</span>
          </div>
          <div className="bg-[#2C2172] p-4 rounded-lg flex items-center">
            <span className="text-lg font-semibold">$4,000</span>
            <span className="ml-auto text-sm text-gray-300">Transfer to Same Bank</span>
          </div>
          <div className="bg-[#2C2172] p-4 rounded-lg flex items-center">
            <span className="text-lg font-semibold">$5,150</span>
            <span className="ml-auto text-sm text-gray-300">Transfer via Wallet</span>
          </div>
          <div className="bg-[#2C2172] p-4 rounded-lg flex items-center">
            <span className="text-lg font-semibold">$11,500</span>
            <span className="ml-auto text-sm text-gray-300">Transfer to Other Bank</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
