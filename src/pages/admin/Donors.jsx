import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { User, Droplet, Calendar, Activity, CheckCircle, XCircle } from 'lucide-react';

export default function Donors() {
  return (
    <Container fluid className="py-4">
      <h2 className="fw-bold mb-4">Donor Health Verification</h2>

      <Row className="g-4">
        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="warning" text="dark" className="px-3 py-2">PENDING</Badge>
                <small className="text-muted fw-bold">ID: DV001</small>
              </div>

              <Row className="g-3 align-items-center">
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <User size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Donor Name</small>
                      <span className="fw-medium">John Smith</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                      <Droplet size={20} className="text-danger" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Group</small>
                      <span className="fw-bold text-danger">O+</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <Calendar size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Last Donation</small>
                      <span className="fw-medium">2024-09-15</span>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                      <Activity size={20} className="text-success" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Health Status</small>
                      <span className="fw-medium text-success">Good - No issues reported</span>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="text-end">
                  <div className="d-flex gap-2 justify-content-end">
                    <Button variant="success" size="sm" className="d-flex align-items-center gap-1" onClick={() => alert('Donor ID: DV001 Approved!')}>
                      <CheckCircle size={14} /> Approve
                    </Button>
                    <Button variant="danger" size="sm" className="d-flex align-items-center gap-1" onClick={() => alert('Donor ID: DV001 Rejected!')}>
                      <XCircle size={14} /> Reject
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="warning" text="dark" className="px-3 py-2">PENDING</Badge>
                <small className="text-muted fw-bold">ID: DV002</small>
              </div>

              <Row className="g-3 align-items-center">
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <User size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Donor Name</small>
                      <span className="fw-medium">Sarah Johnson</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                      <Droplet size={20} className="text-danger" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Group</small>
                      <span className="fw-bold text-danger">A+</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <Calendar size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Last Donation</small>
                      <span className="fw-medium">2024-08-20</span>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                      <Activity size={20} className="text-success" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Health Status</small>
                      <span className="fw-medium text-success">Good - All tests normal</span>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="text-end">
                  <div className="d-flex gap-2 justify-content-end">
                    <Button variant="success" size="sm" className="d-flex align-items-center gap-1" onClick={() => alert('Donor ID: DV001 Approved!')}>
                      <CheckCircle size={14} /> Approve
                    </Button>
                    <Button variant="danger" size="sm" className="d-flex align-items-center gap-1" onClick={() => alert('Donor ID: DV001 Rejected!')}>
                      <XCircle size={14} /> Reject
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="border-0 shadow-sm opacity-75">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="success" className="px-3 py-2">APPROVED</Badge>
                <small className="text-muted fw-bold">ID: DV003</small>
              </div>

              <Row className="g-3 align-items-center">
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <User size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Donor Name</small>
                      <span className="fw-medium">Mike Williams</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                      <Droplet size={20} className="text-danger" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Group</small>
                      <span className="fw-bold text-danger">B-</span>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-2 rounded-circle">
                      <Calendar size={20} className="text-secondary" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Last Donation</small>
                      <span className="fw-medium">2024-10-05</span>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                      <Activity size={20} className="text-info" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Health Status</small>
                      <span className="fw-medium text-info">Excellent</span>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="text-end">
                  <span className="text-muted small fst-italic">Verified</span>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
