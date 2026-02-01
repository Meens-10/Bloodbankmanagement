import React from 'react';
import { Container, Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { AlertCircle, FlaskConical, CheckCircle, XCircle, FileText } from 'lucide-react';

export default function Testing() {
  return (
    <Container fluid className="py-4">
      <h2 className="fw-bold mb-4">Blood Testing & Quality Control</h2>

      <Row className="g-4 mb-4">
        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="warning" text="dark" className="px-3 py-2">PENDING</Badge>
                <div className="text-end">
                  <small className="text-muted d-block fw-bold">Bag ID</small>
                  <span className="fw-bold">BAG2024001</span>
                </div>
              </div>

              <Row className="mb-4">
                <Col md={4} className="border-end">
                  <h6 className="text-muted mb-3">Donation Details</h6>
                  <div className="mb-2"><strong>Donor:</strong> John Smith</div>
                  <div className="mb-2"><strong>Blood Group:</strong> <span className="text-danger fw-bold">O+</span></div>
                  <div><strong>Collection Date:</strong> 2024-12-15</div>
                </Col>
                <Col md={8} className="ps-md-4">
                  <h6 className="text-muted mb-3">Test Results</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="light" text="secondary" className="border p-2 fw-normal">HIV - PENDING</Badge>
                    <Badge bg="light" text="secondary" className="border p-2 fw-normal">Hepatitis B - PENDING</Badge>
                    <Badge bg="light" text="secondary" className="border p-2 fw-normal">Hepatitis C - PENDING</Badge>
                    <Badge bg="light" text="secondary" className="border p-2 fw-normal">Syphilis - PENDING</Badge>
                    <Badge bg="light" text="secondary" className="border p-2 fw-normal">Malaria - PENDING</Badge>
                  </div>
                </Col>
              </Row>

              <div className="d-flex gap-2">
                <Button variant="primary" className="fw-medium" onClick={() => alert('Update Results modal for BAG2024001')}>Update Results</Button>
                <Button variant="outline-secondary" className="d-flex align-items-center gap-2">
                  <FileText size={16} /> View Full Report
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <Badge bg="info" className="px-3 py-2">TESTING</Badge>
                <div className="text-end">
                  <small className="text-muted d-block fw-bold">Bag ID</small>
                  <span className="fw-bold">BAG2024002</span>
                </div>
              </div>

              <Row className="mb-4">
                <Col md={4} className="border-end">
                  <h6 className="text-muted mb-3">Donation Details</h6>
                  <div className="mb-2"><strong>Donor:</strong> Sarah Johnson</div>
                  <div className="mb-2"><strong>Blood Group:</strong> <span className="text-danger fw-bold">A+</span></div>
                  <div><strong>Collection Date:</strong> 2024-12-14</div>
                </Col>
                <Col md={8} className="ps-md-4">
                  <h6 className="text-muted mb-3">Test Results</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="success" className="p-2">HIV - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Hepatitis B - NEGATIVE</Badge>
                    <Badge bg="warning" text="dark" className="p-2">Hepatitis C - PENDING</Badge>
                    <Badge bg="success" className="p-2">Syphilis - NEGATIVE</Badge>
                    <Badge bg="warning" text="dark" className="p-2">Malaria - PENDING</Badge>
                  </div>
                </Col>
              </Row>

              <div className="d-flex gap-2">
                <Button variant="primary" className="fw-medium" onClick={() => alert('Update Results modal for BAG2024001')}>Update Results</Button>
                <Button variant="outline-secondary" className="d-flex align-items-center gap-2">
                  <FileText size={16} /> View Full Report
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex gap-2">
                  <Badge bg="success" className="px-3 py-2">COMPLETED</Badge>
                  <Badge bg="success" className="bg-opacity-10 text-success border border-success px-3 py-2">SAFE</Badge>
                </div>
                <div className="text-end">
                  <small className="text-muted d-block fw-bold">Bag ID</small>
                  <span className="fw-bold">BAG2024003</span>
                </div>
              </div>

              <Row className="mb-4">
                <Col md={4} className="border-end">
                  <h6 className="text-muted mb-3">Donation Details</h6>
                  <div className="mb-2"><strong>Donor:</strong> Mike Williams</div>
                  <div className="mb-2"><strong>Blood Group:</strong> <span className="text-danger fw-bold">B+</span></div>
                  <div><strong>Collection Date:</strong> 2024-12-13</div>
                </Col>
                <Col md={8} className="ps-md-4">
                  <h6 className="text-muted mb-3">Test Results</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="success" className="p-2">HIV - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Hepatitis B - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Hepatitis C - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Syphilis - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Malaria - NEGATIVE</Badge>
                  </div>
                </Col>
              </Row>

              <div className="d-flex gap-2">
                <Button variant="success" className="d-flex align-items-center gap-2">
                  <CheckCircle size={18} /> Approve & Add to Inventory
                </Button>
                <Button variant="outline-secondary" className="d-flex align-items-center gap-2">
                  <FileText size={16} /> View Full Report
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="border-0 shadow-sm bg-danger bg-opacity-10">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex gap-2">
                  <Badge bg="success" className="px-3 py-2">COMPLETED</Badge>
                  <Badge bg="danger" className="px-3 py-2">UNSAFE</Badge>
                </div>
                <div className="text-end">
                  <small className="text-muted d-block fw-bold">Bag ID</small>
                  <span className="fw-bold">BAG2024004</span>
                </div>
              </div>

              <Row className="mb-4">
                <Col md={4} className="border-end border-danger border-opacity-25">
                  <h6 className="text-muted mb-3">Donation Details</h6>
                  <div className="mb-2"><strong>Donor:</strong> Emily Davis</div>
                  <div className="mb-2"><strong>Blood Group:</strong> <span className="text-danger fw-bold">AB+</span></div>
                  <div><strong>Collection Date:</strong> 2024-12-12</div>
                </Col>
                <Col md={8} className="ps-md-4">
                  <h6 className="text-muted mb-3">Test Results</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="success" className="p-2">HIV - NEGATIVE</Badge>
                    <Badge bg="danger" className="p-2">Hepatitis B - POSITIVE</Badge>
                    <Badge bg="success" className="p-2">Hepatitis C - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Syphilis - NEGATIVE</Badge>
                    <Badge bg="success" className="p-2">Malaria - NEGATIVE</Badge>
                  </div>
                </Col>
              </Row>

              <div className="d-flex gap-2">
                <Button variant="danger" className="d-flex align-items-center gap-2">
                  <XCircle size={18} /> Discard Blood Bag
                </Button>
                <Button variant="outline-danger" className="d-flex align-items-center gap-2 bg-white">
                  <FileText size={16} /> View Full Report
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Alert variant="danger" className="border-0 shadow-sm d-flex gap-3 align-items-center">
        <AlertCircle size={24} className="flex-shrink-0" />
        <div>
          <h5 className="alert-heading fw-bold mb-1">Safety Protocol</h5>
          <p className="mb-0 small">
            All blood donations must pass tests for HIV, Hepatitis B, Hepatitis C, Syphilis, and Malaria.
            Any positive result will automatically flag the bag as unsafe and must be discarded immediately.
          </p>
        </div>
      </Alert>
    </Container>
  );
}
