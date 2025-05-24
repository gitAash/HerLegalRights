// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VoiceQuery from "./pages/VoiceQuery";  // your voice query page
import RightsExplorer from "./pages/RightsExplorer";
import EmergencyHelp from "./pages/EmergencyHelp";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VoiceQuery" element={<VoiceQuery />} />
          <Route path="/RightsExplorer" element={<RightsExplorer />} />
          <Route path="/EmergencyHelp" element={<EmergencyHelp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
