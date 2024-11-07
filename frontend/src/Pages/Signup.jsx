import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import googleImage from '../assets/google.jpeg';
import { Link } from 'react-router-dom';
import { BackgroundBeams } from "../Components/ui/background-beams";



export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        const data = {
            "userdata" : {
                "name" : name,
                "email" : email,
                "password" : password
            }
        };
    
        try {
            console.log("Calling backend");
            const response = await fetch('https://mockmate-mp.onrender.com/user/signup', {
                // const response = await fetch('http://localhost:3000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                const result = await response.text(); 
                console.log("User signed up successfully:", result);
                alert("Signup successful!");
            } else {
                console.error("Signup failed");
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0a0e14]">
            <div className="z-50 flex flex-col md:flex-row items-center bg-[#182238] rounded-xl shadow-lg p-8 max-w-4xl w-full">
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Illustration"
                        className="rounded-xl"
                    />
                </div>

                <div className="w-full md:w-1/2 md:pl-10">
                    <h2 className="text-4xl font-bold text-center text-[#00BFFF] mb-6">Create an Account</h2>

                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 mb-4 border border-gray-600 bg-[#121820] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 mb-4 border border-gray-600 bg-[#121820] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> I agree to the Terms and Conditions
                            </label>
                        </div>

                        <button
                            className="w-full py-3 bg-[#00BFFF] text-white rounded-lg font-semibold hover:bg-[#00BFFF] transition duration-300"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/Login"
                            className="text-[#00BFFF] hover:underline hover:underline-offset-4 hover:text-[#00BFFF]"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <BackgroundBeams/> 
        </div>
    );
};

export default Signup;
