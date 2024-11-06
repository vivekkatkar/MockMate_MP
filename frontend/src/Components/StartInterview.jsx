import React from 'react';
import { ResumeUpload } from "../Components/ResumeUpload";
import { useNavigate } from 'react-router-dom';

const StartInterview = () => {
  const navigate = useNavigate(); // Use navigate function from react-router

  return (
    <div className="bg-[#0E1217] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Main container for ResumeUpload and Start Interview button */}
      <div className="flex flex-col justify-center items-center max-w-4xl">
        <h1 className="text-[#00BFFF] text-3xl md:text-4xl font-bold text-center mb-6">
          Upload Your Resume and Begin the Interview!
        </h1>

        {/* Resume Upload Form */}
        <ResumeUpload />

        {/* Start Interview Button */}
        <div className="flex justify-center items-center mt-6">
          <button
            className="w-full py-2 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => {
              navigate("/interview");
            }}
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
