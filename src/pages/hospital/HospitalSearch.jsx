import React, { useState } from "react";

import { Row, Col, Card, Form, Button, Badge, Container } from 'react-bootstrap';
import { Phone, Mail, Droplet } from 'lucide-react';

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'success';
      case 'medium': return 'warning';
      case 'low': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div>
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body className="p-4">
          <h5 className="mb-3 fw-bold d-flex align-items-center gap-2">🔍 Search Filters</h5>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>Blood Group</Form.Label>
              <Form.Select onChange={(e) => setBloodGroup(e.target.value)}>
                <option value="All">All Blood Groups</option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <option key={g} value={g}>{g}</option>)}
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Location</Form.Label>
              <Form.Select onChange={(e) => setLocation(e.target.value)}>
                <option value="All">All Locations</option>
                <option>City Hospital</option>
                <option>Central Blood Bank</option>
                <option>Regional Medical Center</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Minimum Units</Form.Label>
              <Form.Control type="number" placeholder="e.g., 10" min="0" onChange={(e) => setMinUnits(e.target.value)} />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="g-4 mb-5">
        {filteredInventory.map((item) => (
          <Col key={item.group} md={6} lg={4} xl={3}>
            <Card className="border-0 shadow-sm h-100 overflow-hidden text-center">
              <div className={`py-3 bg-${getStatusColor(item.status)} bg-opacity-10 border-bottom border-${getStatusColor(item.status)}`}>
                <div className="d-inline-flex flex-column align-items-center">
                  <div className="position-relative mb-2">
                    <Droplet size={32} className={`text-${getStatusColor(item.status)}`} fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <h3 className="fw-bold mb-0">{item.group}</h3>
                </div>
              </div>
              <Card.Body className="p-4">
                <div className="mb-4">
                  <div className="display-4 fw-bold text-dark mb-1">{item.available}</div>
                  <div className="text-muted small text-uppercase fw-bold">Available Units</div>
                </div>

                <div className="d-flex justify-content-between text-muted small mb-3 border-top pt-3">
                  <span>Reserved:</span>
                  <span className="fw-bold text-dark">{item.reserved}</span>
                </div>
                <div className="d-flex justify-content-between text-muted small mb-4">
                  <span>Expiring soon:</span>
                  <span className="fw-bold text-danger">{item.expiring}</span>
                </div>

                <Button variant={getStatusColor(item.status) === 'danger' ? 'danger' : 'outline-danger'} className="w-100 rounded-pill">
                  Request Blood
                </Button>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0 text-muted small py-3">
                📍 {item.location}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 bg-danger bg-opacity-10 border-start border-4 border-danger">
        <Card.Body className="p-4">
          <h5 className="fw-bold mb-3 text-danger">Emergency Contact</h5>
          <Row className="g-4">
            <Col sm={6} md={4} className="d-flex align-items-center gap-3">
              <div className="bg-white p-2 rounded-circle shadow-sm text-danger">
                <Phone size={20} />
              </div>
              <div>
                <div className="small text-muted fw-bold">Emergency Hotline</div>
                <div className="fw-bold fs-5">1-800-BLOOD-911</div>
              </div>
            </Col>
            <Col sm={6} md={4} className="d-flex align-items-center gap-3">
              <div className="bg-white p-2 rounded-circle shadow-sm text-danger">
                <Mail size={20} />
              </div>
              <div>
                <div className="small text-muted fw-bold">Email Support</div>
                <div className="fw-bold">emergency@bloodbank.org</div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}