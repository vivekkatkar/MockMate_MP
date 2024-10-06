import React from "react";
import botImage from "../assets/logo1.jpeg"; // Ensure this file exists
import interviewImage from "../assets/interview.jpeg"; // Use a valid image path
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className="min-h-screen bg-[#0a0e14] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0e14]">
        <div className="flex items-center space-x-3">
          <img src={botImage} alt="Mock Mate Logo" className="h-10" />
          <span className="text-xl font-bold text-teal-400">Mock Mate</span>
        </div>
        <div className="space-x-8 text-lg">
          <a href="#" className="hover:text-teal-300">Explore</a>
          <a href="#features" className="hover:text-teal-300">Features</a>
          <a href="/Signup" className="hover:text-teal-300">Signup</a>
          <a href="#contact" className="hover:text-teal-300">Contact Us</a> {/* New Contact Us link */}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-20 bg-[#0e1217] text-white">
        <div className="text-center md:text-left md:max-w-lg space-y-6 p-6">
          <h1 className="text-5xl font-extrabold text-teal-400">Ace Your Next Technical Interview</h1>
          <p className="text-gray-400">
            Mock Mate provides realistic AI-powered mock interviews to help you master technical questions and build your confidence.
          </p>
          <button className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-400 transition"
          onClick={() => navigate('/Signup')}
          >
            Get Started
          </button>
        </div>
        <div className="flex-shrink-0">
          <img src={interviewImage} alt="Mock Interview Illustration" className="w-96" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-[#121820] text-white" id="features">
        <h2 className="text-center text-3xl font-bold text-teal-400 mb-12">What Makes Us Different</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 px-6">
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md">
            <div className="mb-4">
              <span className="inline-block p-3 bg-teal-500 rounded-full text-[#0a0e14]">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-400">Realistic Scenarios</h3>
            <p className="text-gray-400">Get immediate exposure with our AI-based coding challenges that simulate real interview scenarios.</p>
          </div>
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md">
            <div className="mb-4">
              <span className="inline-block p-3 bg-teal-500 rounded-full text-[#0a0e14]">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-400">Advanced Analytics</h3>
            <p className="text-gray-400">Track your performance and get insights on areas of improvement, so you can focus your preparation.</p>
          </div>
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md">
            <div className="mb-4">
              <span className="inline-block p-3 bg-teal-500 rounded-full text-[#0a0e14]">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-400">Build Confidence</h3>
            <p className="text-gray-400">Practice with challenging questions, receive feedback, and gain the confidence to tackle any interview.</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-20 bg-[#0e1217] text-white" id="contact">
        <h2 className="text-center text-3xl font-bold text-teal-400 mb-12">Contact Us</h2>
        <div className="flex flex-col items-center space-y-6 px-6">
          <p className="text-gray-400 text-lg text-center max-w-lg">
            Have any questions or need help? We are here for you! Feel free to reach out to us via the form below.
          </p>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#1a1f26] text-white border border-teal-500 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#1a1f26] text-white border border-teal-500 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-[#1a1f26] text-white border border-teal-500 rounded-lg"
              rows="4"
            ></textarea>
            <button className="w-full bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
