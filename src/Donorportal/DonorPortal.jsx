import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyDetails from "./MyDetails";
import Appointments from "./Appointment";
import Certificates from "./Certificates";
import EditProfile from "./EditProfile";
import History from "./History";

import { getDonor, saveDonor } from "./donorStore";
import logo from "../assets/logo.jpeg";

export default function DonorPortal() {
  const [tab, setTab] = useState("details");
  const [page, setPage] = useState("portal");
  const [donor, setDonor] = useState(getDonor());

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleSaveProfile = (updatedDonor) => {
    saveDonor(updatedDonor);
    setDonor(updatedDonor);
    setPage("portal");
  };

  if (page === "edit") {
    return (
      <EditProfile
        donor={donor}
        onSave={handleSaveProfile}
        onCancel={() => setPage("portal")}
      />
    );
  }

  return (
    <div className="portal-container">
      {/* TOP NAVBAR */}
      <div className="top-navbar">
        <div className="nav-left">
          <img src={logo} alt="Blood Bank Logo" className="logo-image" />
          <div>
            <strong>Blood Bank</strong>
            <p>DASHBOARD</p>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-info">
            <strong>{donor.name}</strong>
            <p>{donor.email}</p>
          </div>

          <button
            className="icon-btn avatar-btn"
            title="Edit Profile"
            onClick={() => setPage("edit")}
          >
            <img src={donor.photo} alt="Profile" className="nav-avatar" />
          </button>

          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            <span className="logout-icon">➜</span>
            Logout
          </button>
        </div>
      </div>

      {/* HEADER */}
      <div className="portal-header">
        <h2>Donor Portal</h2>
        <p>Manage your donations and view your impact</p>
      </div>

      {/* TABS */}
      <nav className="portal-tabs">
        <button
          onClick={() => setTab("details")}
          className={tab === "details" ? "active" : ""}
        >
          My Details
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={tab === "appointments" ? "active" : ""}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab("certificates")}
          className={tab === "certificates" ? "active" : ""}
        >
          Certificates
        </button>

        <button
          onClick={() => setTab("history")}
          className={tab === "history" ? "active" : ""}
        >
          History
        </button>
      </nav>

      {/* CONTENT */}
      <div className="portal-content">
        {tab === "details" && <MyDetails />}
        {tab === "appointments" && <Appointments />}
        {tab === "certificates" && <Certificates />}
        {tab === "history" && <History />}
      </div>
    </div>
  );
}
