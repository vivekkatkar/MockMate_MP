// src/Components/Sidebar.jsx
import React from "react";
import { AiOutlineUser, AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Sidebar = ({ setSelected }) => {
    const menuItems = [
        { name: "Profile", icon: <AiOutlineUser />, value: 'profile' },
        { name: "Interviews", icon: <MdOutlineAssignmentTurnedIn />, value: 'interviews' },
        { name: "Progress", icon: <AiOutlineBarChart />, value: 'progress' },
        { name: "Achievements", icon: <FaCheckCircle />, value: 'achievements' },
    ];

    return (
        <div className="bg-[#1e1e2f] h-screen w-64 py-8 px-4 shadow-md">
            <h2 className="text-3xl font-bold text-[#00BFFF] mb-8">Dashboard</h2>
            <nav className="space-y-4">
                {menuItems.map(item => (
                    <button
                        key={item.value}
                        onClick={() => setSelected(item.value)}
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-[#007bff] hover:text-white transition text-white"
                    >
                        {React.cloneElement(item.icon, { size: 24, className: "mr-3" })}
                        {item.name}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
