import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "./Login.jsx";
import { Signup } from "./Signup.jsx";
import { Form } from "./ResumeUpload.jsx";

export function Home(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/interview" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/upload" element={<Form />} />
            </Routes>
        </BrowserRouter>
    </div>
}