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
                borderColor: '#007bff', // Main graph line color (blue)
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            x: {
                grid: {
                    color: '#7a7a7a', // X-axis grid lines (darker grey)
                },
                ticks: {
                    color: '#7a7a7a', 
                },
            },
            y: {
                grid: {
                    color: '#7a7a7a', 
                },
                ticks: {
                    color: '#7a7a7a', 
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#7a7a7a', 
                },
            },
        },
    };

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-[#00BFFF] mb-6">Interview Progress</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default Interviews;
