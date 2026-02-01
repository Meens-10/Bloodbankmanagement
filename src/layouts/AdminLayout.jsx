import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import Dashboard from "../pages/admin/Dashboard";
import Inventory from "../pages/admin/Inventory";
import Testing from "../pages/admin/Testing";
import Donors from "../pages/admin/Donors";
import Camp from "../pages/admin/Camp";
import Users from "../pages/admin/Users";
import Reports from "../pages/admin/Reports";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-vh-100 bg-light font-sans d-flex">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Wrapper */}
      <div className="flex-grow-1 d-flex flex-column min-vh-100 transition-all" style={{ marginLeft: "280px" }}>
        {/* Top Navbar */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className="p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/camp" element={<Camp />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>

      {/* Mobile Adjustment Styles */}
      <style>{`
        @media (max-width: 767.98px) {
          .flex-grow-1 { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
