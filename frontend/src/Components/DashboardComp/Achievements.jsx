// src/Components/Achievements.jsx
import React from "react";

const Achievements = () => {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-[#00BFFF] mb-6">Achievements</h2>
            <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-white">Recent Achievements</h3>
                <p className="text-gray-300">Completed 10 Interviews</p>
                <p className="text-gray-300">Achieved Expert Rating in Data Structures</p>
            </div>
        </div>
    );
};

export default Achievements;
