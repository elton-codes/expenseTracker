import React from 'react';

const Topbar = () => {
  return (
    <div className="w-full bg-gray-300 text-black p-4 flex justify-between items-center shadow-md">
      {/* Greeting Text */}
      <h1 className="text-2xl font-semibold">Hello Nana</h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.98-5.77a7.5 7.5 0 11-10.6 0 7.5 7.5 0 0110.6 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Topbar;
