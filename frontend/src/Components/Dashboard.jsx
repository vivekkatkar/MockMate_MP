import React from 'react';
import Sidebar from './Sidebar';
import { FaBell, FaCalendar, FaList } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100"> {/* blue box */}
        <div className="flex justify-between items-center"> {/* admin dashboard and icons */}
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex space-x-4"> {/* icons div */}
            <FaBell className="text-gray-600" />
            <FaCalendar className="text-gray-600" />
            <FaList className="text-gray-600" />
          </div>
        </div>

        {/* Profile Card */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex space-x-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full w-24 h-24"
            />
            <div>
              <h2 className="text-2xl font-bold">Vaishnavi</h2>
              <p className="text-gray-600">Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
