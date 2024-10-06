// src/Components/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "./DashboardComp/Sidebar";
import Profile from "./DashboardComp/Profile";
import Interviews from "./DashboardComp/Interviews";
import Progress from "./DashboardComp/Progress";
import Achievements from "./DashboardComp/Achievements";

const Dashboard = () => {
    const [selected, setSelected] = useState('profile');

    const renderComponent = () => {
        switch (selected) {
            case 'profile':
                return <Profile />;
            case 'interviews':
                return <Interviews />;
            case 'progress':
                return <Progress />;
            case 'achievements':
                return <Achievements />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="flex">
            <Sidebar setSelected={setSelected} />
            <div className="flex-1 bg-[#f0f4f8] min-h-screen">{renderComponent()}</div>
        </div>
    );
};

export default Dashboard;
