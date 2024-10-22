import React from "react";
import botImage from "../assets/logo1.jpeg"; // Ensure this file exists
import interviewImage from "../assets/interview.jpeg"; // Use a valid image path
import { useNavigate } from "react-router-dom"
import { Vortex } from "../Components/vortex";

// Import the images for creators
import creator1Image from "../assets/bg2.png"; 
import creator2Image from "../assets/bg3.png";
import creator3Image from "../assets/bot.jpeg";

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className="min-h-screen bg-[#0a0e14] text-white">
      
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0e14]">
        <div className="flex items-center space-x-3">
          <img src={botImage} alt="Mock Mate Logo" className="h-10" />
          <span className="text-xl font-bold text-[#00BFFF]">Mock Mate</span>
        </div>
        <div className="space-x-8 text-lg">
          <a href="#features" className="hover:text-[#00BFFF]">Features</a>
          <a href="/Signup" className="hover:text-[#00BFFF]">Signup</a>
          <a href="/Login" className="hover:text-[#00BFFF]">Login</a>
          <a href="#contact" className="hover:text-[#00BFFF]">Contact Us</a> {/* New Contact Us link */}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-[calc(100%)] mx-auto rounded-md h-screen overflow-hidden bg-black">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={200}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Elevate Your Interview Skills
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Prepare for your technical interviews with Mock Mate, where AI-powered mock interviews help you ace every question.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] glow-effect"
              onClick={() => navigate("/Signup")}
            >
              Get Started
            </button>
          </div>
        </Vortex>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-[#121820] text-white" id="features">
        <h2 className="text-center text-3xl font-bold text-[#00BFFF] mb-12">What Makes Us Different</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 px-6">
          <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#1a1f26] shadow-lg">
            <div className="flex justify-center text-6xl text-[#00BFFF]">🎯</div>
            <p className="text-base sm:text-xl text-[#00BFFF] mt-4 mb-2 text-center">
              Realistic Interview Scenarios
            </p>
            <p className="text-sm text-gray-400 text-center">
              AI-powered coding challenges simulating real interviews to boost your experience.
            </p>
          </div>

          <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#1a1f26] shadow-lg">
            <div className="flex justify-center text-6xl text-[#00BFFF]">📈</div>
            <p className="text-base sm:text-xl text-[#00BFFF] mt-4 mb-2 text-center">
              Advanced Analytics
            </p>
            <p className="text-sm text-gray-400 text-center">
              Track your performance and get insights on areas to improve and maximize preparation efficiency.
            </p>
          </div>

          <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#1a1f26] shadow-lg">
            <div className="flex justify-center text-6xl text-[#00BFFF]">🏆</div>
            <p className="text-base sm:text-xl text-[#00BFFF] mt-4 mb-2 text-center">
              Build Confidence
            </p>
            <p className="text-sm text-gray-400 text-center">
              Practice with challenging questions, receive feedback, and gain confidence to tackle interviews.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#0a0e14] text-white" id="creators">
        <h2 className="text-center text-3xl font-bold text-[#00BFFF] mb-12">Meet the Creators</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 px-6">
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md text-center">
            <img src={creator1Image} alt="Creator 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#00BFFF]">Creator 1</h3>
            <a
              href="https://www.linkedin.com/in/creator1"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md text-center">
            <img src={creator2Image} alt="Creator 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#00BFFF]">Creator 2</h3>
            <a
              href="https://www.linkedin.com/in/creator2"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="max-w-xs p-6 bg-[#1a1f26] rounded-lg shadow-md text-center">
            <img src={creator3Image} alt="Creator 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#00BFFF]">Creator 3</h3>
            <a
              href="https://www.linkedin.com/in/creator3"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-20 bg-[#0e1217] text-white" id="contact">
        <h2 className="text-center text-3xl font-bold text-[#00BFFF] mb-12">Contact Us</h2>
        <div className="flex flex-col items-center space-y-6 px-6">
          <p className="text-gray-400 text-lg text-center max-w-lg">
            Have any questions or need help? We are here for you! Feel free to reach out to us via the form below.
          </p>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#1a1f26] text-white border border-[#00BFFF] rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#1a1f26] text-white border border-[#00BFFF] rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-[#1a1f26] text-white border border-[#00BFFF] rounded-lg"
              rows="4"
            ></textarea>
            <button className="w-full bg-[#00BFFF] text-white py-2 px-6 rounded-lg hover:bg-[#00BFFF] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
