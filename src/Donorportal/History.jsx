import React, { useState } from "react";
import { Calendar, Award, Clock, User } from "lucide-react";
import "./History.css";

export default function History() {
  const [activeTab, setActiveTab] = useState("history");

  const donations = [
    {
      id: "BBM2024091501",
      date: "2024-09-15",
      location: "Central Blood Bank",
      units: "450ml",
      recipient: "City Hospital - Patient #1234",
      received: true
    },
    {
      id: "BBM2024061002",
      date: "2024-06-10",
      location: "City Hospital",
      units: "450ml",
      recipient: "Regional Hospital - Patient #5678",
      received: true
    },
    {
      id: "BBM2024030503",
      date: "2024-03-05",
      location: "Community Camp",
      units: "450ml",
      recipient: "Emergency Ward - Patient #9012",
      received: true
    }
  ];

  return (
    <div className="blood-bank-portal">

     
      {/* Donations List */}
      {activeTab === "history" && (
        <div className="content-card">
          <h3 className="section-title">Recent Donations</h3>

          <div className="donations-list">
            {donations.map((donation) => (
              <div key={donation.id} className="donation-card">
                <div className="donation-content">
                  <div className="donation-main">
                    <div className="donation-icon">
                      🩸
                    </div>

                    <div className="donation-details">
                      <p className="donation-date">{donation.date}</p>
                      <p className="donation-location">
                        {donation.location}
                      </p>
                      <p className="donation-units">
                        Units: {donation.units}
                      </p>

                      {donation.received && (
                        <div className="received-status">
                          ✔ Received by: {donation.recipient}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="donation-id">
                    ID: {donation.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
