import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-box">
          🩸
        </div>
        <div className="logo-text">
          <h2>Blood Bank</h2>
          <p>Management System</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#why-donate" className="nav-link">Why Donate</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      <button className="btn-primary" onClick={() => navigate("/donor")}>
        Become a donor
   </button>
    </nav>
  );
}

export default Navbar;