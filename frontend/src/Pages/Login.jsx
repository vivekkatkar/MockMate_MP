import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import googleImage from '../assets/google.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { BackgroundBeams } from "../Components/ui/background-beams";


export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const data = {
            "userdata": {
                "email": email,
                "password": password
            }
        };
    
        try {
            const response = await fetch('https://mockmate-mp.onrender.com/user/login', {
                // const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.text(); // Get response as text
    
            if (response.ok) {
                console.log("User logged in successfully:", result);
                localStorage.setItem("email", email);
                navigate("/dashboard");
                alert("Login successful!");
            } else {
                console.error("Login failed:", result);
                alert(`Login failed: ${result}`);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0a0e14]">
            <div className="flex z-50 flex-col md:flex-row items-center bg-[#182238] rounded-xl shadow-lg p-8 max-w-4xl w-full">
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Illustration"
                        className="rounded-xl"
                    />
                </div>

                <div className="w-full md:w-1/2 md:pl-10">
                    <h2 className="text-3xl font-bold text-center text-[#00BFFF] mb-6">Welcome Back</h2>

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 mb-4 border border-gray-600 bg-[#121820] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 mb-4 border border-gray-600 bg-[#121820] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> Remember Me
                            </label>
                            <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            className="w-full py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-[#00BFFF] transition duration-300"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-400">
                        Don’t have an account?{" "}
                        <Link
                            to="/Signup"
                            className="text-[#00BFFF] hover:underline hover:underline-offset-4 hover:text-[#00BFFF]"
                        >
                            Register
                        </Link>
                    </p>
                    
                </div>
                
            </div>
            <BackgroundBeams/>  
        </div>
    );
};

export default Login;
