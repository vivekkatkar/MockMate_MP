// src/Components/Interviews.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Interviews = () => {
    const data = {
        labels: ['Interview 1', 'Interview 2', 'Interview 3', 'Interview 4', 'Interview 5'],
        datasets: [
            {
                label: 'Interviews Completed',
                data: [2, 5, 8, 9, 10],
                fill: false,
                borderColor: '#007bff',
                tension: 0.1
            }
        ]
    };

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-[#ffffff] mb-6">Interview Progress</h2>
            <Line data={data} />
        </div>
    );
};

export default Interviews;
