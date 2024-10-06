
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import UserProfile from './Components/UserProfile';
import InterviewSession from './Components/InterviewSession';
import Login from './Pages/Login';
import { Signup } from './Pages/Signup';
import Home from './Pages/Home';


function App() {
  return (
    
    <Router>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/interviewSession" element={<InterviewSession />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
