import { useState } from "react";
import MyDetails from "./MyDetails";
import Appointments from "./Appointment";
import Reviews from "./Reviews";
import Certificates from "./Certificates";
import EditProfile from "./EditProfile";
import { getDonor, saveDonor } from "./donorStore";

export default function DonorPortal() {
  const [tab, setTab] = useState("details");
  const [page, setPage] = useState("portal"); 
  const [donor, setDonor] = useState(getDonor());

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully");
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
          <div className="logo-box">🩸</div>
          <div>
            <strong>Blood Bank</strong>
            <p>Management System</p>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-info">
            <strong>{donor.name}</strong>
            <p>{donor.email}</p>
          </div>

          <span className="badge">DONOR</span>

          <button
  className="icon-btn avatar-btn"
  title="Edit Profile"
  onClick={() => setPage("edit")}
>
  <img
    src={donor.photo}
    alt="Profile"
    className="nav-avatar"
  />
</button>


          <button className="logout-btn" onClick={handleLogout}>
  <span className="logout-icon">[➜  </span>
  Logout
</button>

        </div>
      </div>

      
      <div className="portal-header">
        <h2>Donor Portal</h2>
        <p>Manage your donations and view your impact</p>
      </div>

     
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
          onClick={() => setTab("reviews")}
          className={tab === "reviews" ? "active" : ""}
        >
          Reviews
        </button>

        <button
          onClick={() => setTab("certificates")}
          className={tab === "certificates" ? "active" : ""}
        >
          Certificates
        </button>
      </nav>

      {/* CONTENT */}
      <div className="portal-content">
        {tab === "details" && <MyDetails />}
        {tab === "appointments" && <Appointments />}
        {tab === "reviews" && <Reviews />}
        {tab === "certificates" && <Certificates />}
      </div>
    </div>
  );
}
