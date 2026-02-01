import React from "react";

import { Card, Badge, Row, Col, Button } from 'react-bootstrap';

const requests = [
  { id: "REQ001", priority: "CRITICAL", status: "APPROVED", group: "O-", units: 3, date: "2024-12-17", hospital: "City Hospital" },
  { id: "REQ002", priority: "HIGH", status: "FULFILLED", group: "A+", units: 2, date: "2024-12-16", hospital: "City Hospital" },
  { id: "REQ003", priority: "NORMAL", status: "PENDING", group: "B+", units: 1, date: "2024-12-15", hospital: "City Hospital" }
];

export default function HospitalRequests() {
  const getPriorityBadge = (p) => {
    switch (p) {
      case 'CRITICAL': return 'danger';
      case 'HIGH': return 'warning';
      default: return 'info';
    }
  };

  const getStatusBadge = (s) => {
    switch (s) {
      case 'APPROVED': return 'primary';
      case 'FULFILLED': return 'success';
      case 'PENDING': return 'secondary';
      default: return 'light';
    }
  };

  return (
    <div className="py-2">
      <h4 className="fw-bold mb-4">Request History</h4>
      <div className="d-flex flex-column gap-3">
        {requests.map((r) => (
          <Card key={r.id} className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row className="align-items-center g-3">
                <Col md={3}>
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <span className="text-muted small text-uppercase">Request ID</span>
                      <div className="fw-bold fs-5">{r.id}</div>
                    </div>
                    <div>
                      <Badge bg={getPriorityBadge(r.priority)} className="me-2">{r.priority}</Badge>
                      <Badge bg={getStatusBadge(r.status)} text={r.status === 'PENDING' ? 'dark' : 'white'}>{r.status}</Badge>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <Row className="g-3">
                    <Col xs={4}>
                      <div className="text-muted small">Blood Group</div>
                      <div className="fw-bold fs-4 text-danger">{r.group}</div>
                    </Col>
                    <Col xs={4}>
                      <div className="text-muted small">Units Required</div>
                      <div className="fw-bold fs-4">{r.units}</div>
                    </Col>
                    <Col xs={4}>
                      <div className="text-muted small">Date</div>
                      <div className="fw-bold">{r.date}</div>
                    </Col>
                  </Row>
                </Col>

                <Col md={3} className="text-md-end">
                  <Button variant="outline-primary" size="sm" className="me-2">View Details</Button>
                  {r.status === "PENDING" && (
                    <Button variant="outline-danger" size="sm">Cancel</Button>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
