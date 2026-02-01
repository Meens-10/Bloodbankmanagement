import React, { useState } from "react";
import { Droplet, MapPin, Calendar, CheckCircle } from "lucide-react";
import { Card, Badge, Row, Col } from "react-bootstrap";

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
    <div className="py-2">
      {activeTab === "history" && (
        <>
          <h4 className="fw-bold mb-4">Recent Donations</h4>
          <div className="d-flex flex-column gap-3">
            {donations.map((donation) => (
              <Card key={donation.id} className="border-0 shadow-sm pointer-hover">
                <Card.Body className="p-4">
                  <Row className="align-items-center g-3">
                    <Col xs="auto">
                      <div className="bg-danger bg-opacity-10 p-3 rounded-circle">
                        <Droplet size={24} className="text-danger" />
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-2">
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h5 className="fw-bold mb-0">{donation.units}</h5>
                            <Badge bg="light" text="secondary" className="fw-normal border">
                              ID: {donation.id}
                            </Badge>
                          </div>
                          <div className="d-flex align-items-center gap-3 text-muted small">
                            <span className="d-flex align-items-center gap-1">
                              <Calendar size={14} /> {donation.date}
                            </span>
                            <span className="d-flex align-items-center gap-1">
                              <MapPin size={14} /> {donation.location}
                            </span>
                          </div>
                        </div>

                        {donation.received && (
                          <Badge bg="success" className="d-flex align-items-center gap-1 px-3 py-2">
                            <CheckCircle size={12} />
                            Received by {donation.recipient}
                          </Badge>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
