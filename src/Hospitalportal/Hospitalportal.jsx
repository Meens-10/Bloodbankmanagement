import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "./hospitalheader.css";
import logo from "../assets/logo.jpeg";


export default function Hospitalportal() {
  const navigate = useNavigate();
  const location =useLocation();

  const isActive = (path) =>
    location.pathname === `/hospital${path}`;

  return (
    <>
      <header className="hospital-header">
        <div className="logo-section">
          <div className="logo-icon">
            <img
              src={logo}
              alt="Blood Bank Logo"
              className="logo-image"
            />
          </div>

          <div className="logo-text">
            <h1 className="app-title">Blood Bank</h1>
            <p className="app-subtitle">DASHBOARD</p>
          </div>
        </div>

        <div className="user-section">
          <div className="hospital-info">
            <span className="hospital-badge">HOSPITAL</span>
          </div>

          <div className="user-info">
            <p className="user-name">Dr. Sarah Johnson</p>
            <p className="user-email">contact@cityhospital.com</p>
          </div>

          <button className="icon-btn profile-btn">👤</button>

          <button className="logout-btn" onClick={() => navigate("/login")}>
            <span className="logout-icon">[➜</span>
            Logout
          </button>
        </div>
      </header>

      <div className="portal">
        <h1>Hospital Portal</h1>
        <p className="subtitle">
          Search blood inventory and manage requests
        </p>

        <div className="tabs">
          <Link
            className={`tab ${isActive("") ? "active" : ""}`}
            to="/hospitalportal"
          >
            <span className="tab-icon">🔍</span>
            Search Inventory
          </Link>

          <Link
            className={`tab ${isActive("/requests") ? "active" : ""}`}
            to="/hospitalportal/requests"
          >
            <span className="tab-icon">📋</span>
            My Requests
          </Link>

          <Link
            className={`tab ${isActive("/new") ? "active" : ""}`}
            to="/hospitalportal/new"
          >
            <span className="tab-icon">➕</span>
            New Request
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
}
