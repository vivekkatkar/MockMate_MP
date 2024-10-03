import React from 'react';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import '../styles.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                {/* Add more sections like Analytics, Settings, etc. */}
                <h1>User Dashboard</h1>
                <UserProfile /> {/* This is where your userProfile.js will be rendered */}
            </div>
        </div>
    );
};

export default Dashboard;
