import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { Calendar, Clock, MapPin, Droplet, CheckCircle, AlertCircle } from 'lucide-react';

const Appointments = () => {
  return (
    <Container className="py-2">
      <Card className="border-0 bg-success bg-opacity-10 border-start border-4 border-success mb-5">
        <Card.Body className="d-flex align-items-center gap-3">
          <div className="bg-white p-2 rounded-circle text-success shadow-sm">
            <CheckCircle size={24} />
          </div>
          <div>
            <h5 className="fw-bold mb-1 text-success">You're Eligible to Donate!</h5>
            <p className="mb-0 text-success text-opacity-75 small">It's been more than 3 months since your last donation. Book an appointment below.</p>
          </div>
        </Card.Body>
      </Card>

      <Row className="g-5">
        {/* Booking Form */}
        <Col lg={5}>
          <h4 className="fw-bold mb-4">Book New Appointment</h4>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Select>
                    <option>Central Blood Bank</option>
                    <option>City Hospital</option>
                    <option>Regional Medical Center</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Donation Type</Form.Label>
                  <Form.Select>
                    <option>Whole Blood</option>
                    <option>Plasma</option>
                    <option>Platelets</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Preferred Time</Form.Label>
                  <Form.Select>
                    <option>09:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>02:00 PM - 03:00 PM</option>
                    <option>03:00 PM - 04:00 PM</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="danger" size="lg" className="w-100 fw-bold">
                  Book Appointment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Existing Appointments */}
        <Col lg={7}>
          <h4 className="fw-bold mb-4">Your Appointments</h4>
          <div className="d-flex flex-column gap-3">

            {/* Confirmed Appointment */}
            <Card className="border-0 shadow-sm border-start border-4 border-success">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Badge bg="success" className="px-3 py-2">CONFIRMED</Badge>
                  <small className="text-muted fw-bold">ID: APT001</small>
                </div>

                <Row className="g-3 mb-4">
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Calendar size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Date</small>
                        <strong>2024-12-20</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Clock size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Time</small>
                        <strong>10:00 AM</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><MapPin size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Location</small>
                        <strong>Central Blood Bank</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Droplet size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Type</small>
                        <strong>Blood Donation</strong>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex gap-2 justify-content-end">
                  <Button variant="outline-secondary" size="sm">Reschedule</Button>
                  <Button variant="outline-danger" size="sm">Cancel</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Pending Appointment */}
            <Card className="border-0 shadow-sm border-start border-4 border-warning">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Badge bg="warning" text="dark" className="px-3 py-2">PENDING</Badge>
                  <small className="text-muted fw-bold">ID: APT002</small>
                </div>

                <Row className="g-3 mb-4">
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Calendar size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Date</small>
                        <strong>2024-12-28</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Clock size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Time</small>
                        <strong>02:00 PM</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><MapPin size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Location</small>
                        <strong>City Hospital Camp</strong>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light p-2 rounded text-secondary"><Droplet size={18} /></div>
                      <div>
                        <small className="text-muted d-block">Type</small>
                        <strong>Blood Donation Camp</strong>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex gap-2 justify-content-end">
                  <Button variant="outline-secondary" size="sm">Reschedule</Button>
                  <Button variant="outline-danger" size="sm">Cancel</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointments;