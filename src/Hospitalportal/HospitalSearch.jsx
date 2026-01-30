import React, { useState } from "react";
import "./searchinvetory.css";

const inventory = [
  { group: "A+", available: 45, reserved: 8, expiring: 3, status: "good", location: "Central Blood Bank" },
  { group: "A-", available: 12, reserved: 2, expiring: 1, status: "low", location: "City Hospital" },
  { group: "B+", available: 38, reserved: 5, expiring: 2, status: "good", location: "Regional Medical Center" },
  { group: "B-", available: 8, reserved: 1, expiring: 0, status: "low", location: "Central Blood Bank" },
  { group: "AB+", available: 15, reserved: 3, expiring: 1, status: "medium", location: "City Hospital" },
  { group: "AB-", available: 5, reserved: 0, expiring: 0, status: "low", location: "Regional Medical Center" },
  { group: "O+", available: 52, reserved: 12, expiring: 4, status: "good", location: "Central Blood Bank" },
  { group: "O-", available: 18, reserved: 4, expiring: 2, status: "medium", location: "City Hospital" }
];

export default function HospitalSearch() {
  const [bloodGroup, setBloodGroup] = useState("All");
  const [location, setLocation] = useState("All");
  const [minUnits, setMinUnits] = useState("");

  const filteredInventory = inventory.filter((item) => {
    return (
      (bloodGroup === "All" || item.group === bloodGroup) &&
      (location === "All" || item.location === location) &&
      (minUnits === "" || item.available >= parseInt(minUnits))
    );
  });

  return (
    <div className="inventory-page">
    
      <div className="filters">
        <h3>🔍 Search Filters</h3>
        <div className="filter-grid">
          <div>
            <label>Blood Group</label>
            <select onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="All">All Blood Groups</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div>
            <label>Location</label>
            <select onChange={(e) => setLocation(e.target.value)}>
              <option value="All">All Locations</option>
              <option>City Hospital</option>
              <option>Central Blood Bank</option>
              <option>Regional Medical Center</option>
            </select>
          </div>

          <div>
            <label>Minimum Units</label>
            <input
              type="number"
              placeholder="e.g., 10"
              min="0"
              onChange={(e) => setMinUnits(e.target.value)}
            />
          </div>
        </div>
      </div>

     
      <div className="grid">
        {filteredInventory.map((item) => (
          <div key={item.group} className={`card ${item.status}`}>
            <div className="card-header">
              <div className="drop-circle"></div>

              <div className="blood-type-group">
                <span className="blood-type">{item.group}</span>
                <span className="count">{item.available}</span>
              </div>
            </div>

            <div className="card-details">
              <p>
                <span>Available:</span>
                <span className="value">{item.available} units</span>
              </p>
              <p>
                <span>Reserved:</span>
                <span className="value">{item.reserved} units</span>
              </p>
              <p className="expire">
                <span>Expiring soon:</span>
                <span className="value">{item.expiring} units</span>
              </p>
            </div>

            <button>Request Blood</button>
          </div>
        ))}
      </div>

      <div className="emergency-contact">
        <h3>Emergency Contact</h3>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <div className="label">Emergency contact</div>
              <div className="value">1-800-BLOOD-911</div>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <div className="label">Email</div>
              <div className="value">emergency@bloodbank.org</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}