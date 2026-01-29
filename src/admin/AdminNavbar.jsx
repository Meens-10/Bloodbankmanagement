import React from 'react';
import { User, LogOut, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/login');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Droplet fill="white" />
        </div>
        <div className="navbar-brand">
          <h1 className="navbar-brand-name">Blood Bank</h1>
          <p className="navbar-brand-subtitle">Management System</p>
        </div>
      </div>
      
      <div className="navbar-right">
        <div className="admin-user-info">
          <div className="user-details">
            <div className="admin-label">ADMIN</div>
            <div className="user-name">Admin User</div>
            <div className="user-email">admin@bloodbank.org</div>
          </div>
          <div className="user-icon">
            <User size={20} />
          </div>
        </div>
        
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;