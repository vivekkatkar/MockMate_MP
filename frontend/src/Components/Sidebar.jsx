import React from 'react';
import { FaHome, FaUserAlt, FaUsers, FaBook, FaClipboard, FaClock, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#0a0e14] shadow-md flex flex-col"> 
      {/* Brand Header */}
      <div className="p-4 text-lg font-bold text-indigo-600 flex items-center">
        <FaChartLine className="mr-2" />
        MockMate
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col p-4 space-y-2">
        <a href="/" className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded-lg">
          <FaHome className="mr-3" /> Dashboard
        </a>
        
      </div>

      {/* User Profile (Commented out for now) */}
      {/* 
      <div className="p-4 flex items-center space-x-4">
        <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full" />
        <div className="text-gray-700">
          <div className="font-bold">Bonyra Jon</div>
          <div className="text-sm">Admin (M)</div>
        </div>
      </div> 
      */}
    </div>
  );
};

export default Sidebar;
