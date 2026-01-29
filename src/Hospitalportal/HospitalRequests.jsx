import React from "react";
import { Link } from "react-router-dom";
import "./hospital-requests.css";

const requests = [
  {
    id: "REQ001",
    priority: "CRITICAL",
    status: "APPROVED",
    group: "O-",
    units: 3,
    date: "2024-12-17",
    hospital: "City Hospital"
  },
  {
    id: "REQ002",
    priority: "HIGH",
    status: "FULFILLED",
    group: "A+",
    units: 2,
    date: "2024-12-16",
    hospital: "City Hospital"
  },
  {
    id: "REQ003",
    priority: "NORMAL",
    status: "PENDING",
    group: "B+",
    units: 1,
    date: "2024-12-15",
    hospital: "City Hospital"
  }
];

export default function HospitalRequests() {
  return (
    <div className="portal">
      <h1>Hospital Portal</h1>
      <p className="subtitle">Search blood inventory and manage requests</p>

      <div className="tabs">
        <Link to="/hospital" className="tab">Search Inventory</Link>
        <span className="tab active">My Requests</span>
        <Link to="/hospital/new" className="tab">+ New Request</Link>
      </div>

      <div className="requests">
        {requests.map((r) => (
          <div key={r.id} className="request-card">
            <div className="badges">
              <span className={`badge ${r.priority.toLowerCase()}`}>
                {r.priority}
              </span>
              <span className={`badge ${r.status.toLowerCase()}`}>
                {r.status}
              </span>
            </div>

            <p><strong>Request ID:</strong> {r.id}</p>
            <p><strong>Blood Group:</strong> {r.group}</p>
            <p><strong>Units:</strong> {r.units}</p>
            <p><strong>Request Date:</strong> {r.date}</p>
            <p><strong>Hospital:</strong> {r.hospital}</p>

            <div className="actions">
              <button type="button" className="view">View Details</button>
              {r.status === "PENDING" && (
                <button type="button" className="cancel">Cancel Request</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}