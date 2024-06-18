import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Layout />}>
                        <Route index element={<Layout />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Route> */}
                    <Route path="/" element={<Layout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;