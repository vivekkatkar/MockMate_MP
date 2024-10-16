import React from 'react'
import { Header } from "../Components/Header";
import {ResumeUpload}  from "../Components/ResumeUpload";

const StartInterview = () => {
  return (
    <div className="bg-[#0E1217]">
      <div className="flex justify-center h-80 items-center">
        <ResumeUpload />  
      </div>
      <div className="flex justify-center items-center">
         <button className="m-2 w-60" onClick={() => {
            navigate("/interview");
        }} > Start Interview </button>
      </div>
    </div>
  )
}

export default StartInterview