import React from 'react';
import { ArrowLeft, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DonorNavbar.css';

const DonorNavbar = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
    <nav className="donor-navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Droplet fill="white" />
        </div>
        <div className="navbar-brand">
          <h1 className="navbar-brand-name">Blood Bank</h1>
          <p className="navbar-brand-subtitle">DONOR REGISTRATION</p>
        </div>
      </div>
      <div className="navbar-right">
        <button className="back-to-home-btn" onClick={handleBackToHome}>
          <ArrowLeft />
          <span>Back to Home</span>
        </button>
      </div>
    </nav>
    </>
  );
};

export default DonorNavbar;