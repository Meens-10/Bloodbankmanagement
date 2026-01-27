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

    <button className="btn-primary" onClick={() => navigate("/login")}>
    Sign In
  </button>
</nav>

  );
}

export default Navbar;

