// src/Components/Profile.jsx
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Profile = () => {
    const user = {
        name: "Vaishnavi Yadav",
        email: "vaishnavi@example.com",
        totalInterviews: 12,
        completedInterviews: 2,
    };

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-[#00BFFF] mb-6">User Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-md">
                    <AiOutlineUser size={40} className="text-[#007bff] mb-4" />
                    <h3 className="text-2xl font-semibold text-white">{user.name}</h3>
                    <p className="text-[#A9A9A9]">{user.email}</p>
                </div>
                <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-[#00BFFF]">Interview Stats</h3>
                    <p className="text-[#A9A9A9]">Total Interviews: {user.totalInterviews}</p>
                    <p className="text-[#A9A9A9]">Completed Interviews: {user.completedInterviews}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
