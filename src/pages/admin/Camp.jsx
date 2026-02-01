import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { MapPin, Calendar, Clock, Users, Edit, X } from 'lucide-react';

export default function Camp() {
  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold mb-0">Organize New Camp</h2>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Camp Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="e.g., Community Health Drive" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="e.g., City Community Center" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Date <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Time <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="e.g., 09:00 AM - 05:00 PM" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Expected Donors <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="number" placeholder="e.g., 100" />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-end">
                    <Button variant="danger" size="lg" className="fw-bold px-4" onClick={() => alert('Camp creation initiated!')}>
                      Create Camp
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="fw-bold mb-4">Blood Donation Camps</h3>
      <Row className="g-4">
        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="primary" className="px-3 py-2">SCHEDULED</Badge>
                <small className="text-muted fw-bold">ID: CAMP001</small>
              </div>

              <h4 className="fw-bold mb-3">Community Health Drive</h4>

              <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2 text-muted">
                  <MapPin size={18} className="text-secondary" /> City Community Center
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Calendar size={18} className="text-secondary" /> 2024-12-20
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Clock size={18} className="text-secondary" /> 09:00 AM - 05:00 PM
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Users size={18} className="text-secondary" /> 0 / 150
                </div>
              </div>

              <div className="d-flex gap-2">
                <Button variant="outline-primary" size="sm" className="flex-grow-1">View Details</Button>
                <Button variant="outline-secondary" size="sm"><Edit size={16} /></Button>
                <Button variant="outline-danger" size="sm"><X size={16} /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="warning" text="dark" className="px-3 py-2">ONGOING</Badge>
                <small className="text-muted fw-bold">ID: CAMP002</small>
              </div>

              <h4 className="fw-bold mb-3">Corporate Blood Drive</h4>

              <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2 text-muted">
                  <MapPin size={18} className="text-secondary" /> Tech Corp Headquarters
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Calendar size={18} className="text-secondary" /> 2024-12-17
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Clock size={18} className="text-secondary" /> 10:00 AM - 04:00 PM
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Users size={18} className="text-secondary" /> 67 / 100
                </div>
              </div>

              <Button variant="outline-primary" size="sm" className="w-100">View Details</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="success" className="px-3 py-2">COMPLETED</Badge>
                <small className="text-muted fw-bold">ID: CAMP003</small>
              </div>

              <h4 className="fw-bold mb-3">University Campus Drive</h4>

              <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2 text-muted">
                  <MapPin size={18} className="text-secondary" /> State University
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Calendar size={18} className="text-secondary" /> 2024-12-10
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Clock size={18} className="text-secondary" /> 09:00 AM - 06:00 PM
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Users size={18} className="text-secondary" /> 187 / 200
                </div>
              </div>

              <Button variant="outline-primary" size="sm" className="w-100">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
