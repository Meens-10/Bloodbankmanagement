import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./admin.css";
import "./Inventory.css";
import "./Testing.css";
import "./Donors.css";
import "./Camp.css";
import "./Users.css";
import "./Reports.css";

import AdminNavbar from "./AdminNavbar";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Testing from "./Testing";
import Donors from "./Donors";
import Camp from "./Camp";
import Users from "./Users";
import Reports from "./Reports";

export default function AdminLayout() {
  const location = useLocation();

  return (
    <>
      <AdminNavbar />

      {/* TOP MENU */}
      <div className="top-menu">
        <Link to="/admin" className={location.pathname === "/admin" ? "active" : ""}>
          📊 Dashboard
        </Link>

        <Link to="/admin/inventory" className={location.pathname === "/admin/inventory" ? "active" : ""}>
          📦 Inventory
        </Link>

        <Link to="/admin/testing" className={location.pathname === "/admin/testing" ? "active" : ""}>
          🧪 Testing
        </Link>

        <Link to="/admin/donors" className={location.pathname === "/admin/donors" ? "active" : ""}>
          👥 Donors
        </Link>

        <Link to="/admin/camp" className={location.pathname === "/admin/camp" ? "active" : ""}>
          📅 Camp
        </Link>

        <Link to="/admin/users" className={location.pathname === "/admin/users" ? "active" : ""}>
          👤 Users
        </Link>

        <Link to="/admin/reports" className={location.pathname === "/admin/reports" ? "active" : ""}>
          📑 Reports
        </Link>
      </div>

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

