// src/Components/Progress.jsx
import React from "react";

const Progress = () => {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-[#00BFFF] mb-6">Coding Progress</h2>
            <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-white">Coding Milestones</h3>
                <p className="text-gray-300">Completed: Data Structures, Algorithms, Recursion</p>
                <p className="text-gray-300">In Progress: Dynamic Programming</p>
            </div>
        </div>
    );
};

export default Progress;
