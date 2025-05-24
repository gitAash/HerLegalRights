import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">HerLegalRights</span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "nav-active" : ""}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/RightsExplorer" className="nav-link">Rights</Link></li>
          <li><Link to="/VoiceQuery" className="nav-link">Voice Query</Link></li>
          <li><Link to="/register" className="nav-link">Register</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
  
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
