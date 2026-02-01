import React from "react";
import { getDonor } from "../../services/donorStore";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Phone, Mail, Droplet, User, Heart, Calendar, CheckCircle } from "lucide-react";

export default function MyDetails() {
  const donor = getDonor();

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      hospital: "City Hospital",
      message:
        "Thank you so much for your donation! Your blood helped save my life during a critical surgery. I am forever grateful.",
      bloodGroup: "O+"
    },
    {
      id: 2,
      name: "Michael Chen",
      hospital: "Regional Hospital",
      message:
        "Your generous donation helped me during my emergency treatment. Thank you for being a hero!",
      bloodGroup: "O+"
    },
    {
      id: 3,
      name: "Emily Davis",
      hospital: "Community Hospital",
      message:
        "Words cannot express my gratitude. Your selfless act gave me a second chance at life.",
      bloodGroup: "O+"
    }
  ];

  return (
    <Container className="py-2">
      <Row className="mb-4">
        <Col lg={8}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                  <User size={32} className="text-danger" />
                </div>
                <div>
                  <h3 className="fw-bold mb-0">{donor.name}</h3>
                  <p className="text-muted mb-0">Blood Donor</p>
                </div>
                <div className="ms-auto text-end">
                  <Badge bg="danger" className="fs-6 py-2 px-3">
                    {donor.bloodGroup}
                  </Badge>
                  <div className="small text-muted mt-1">Blood Group</div>
                </div>
              </div>

              <Row className="g-4 mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                    <Phone size={20} className="text-secondary" />
                    <div>
                      <div className="small text-muted">Phone</div>
                      <div className="fw-medium">{donor.phone}</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                    <Mail size={20} className="text-secondary" />
                    <div>
                      <div className="small text-muted">Email</div>
                      <div className="fw-medium">{donor.email}</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="d-flex justify-content-between text-center pt-3 border-top">
                <div>
                  <h4 className="fw-bold mb-0">12</h4>
                  <small className="text-muted">Total Donations</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">36+</h4>
                  <small className="text-muted">Lives Saved</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">4</h4>
                  <small className="text-muted">Badges Earned</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <div className="d-flex flex-column gap-3 h-100">
            <Card className="border-0 shadow-sm bg-success text-white">
              <Card.Body className="d-flex align-items-center gap-3">
                <div className="bg-white bg-opacity-25 p-3 rounded-circle">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="opacity-75 small">Donation Status</div>
                  <div className="fw-bold fs-5">Eligible</div>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm bg-primary text-white">
              <Card.Body className="d-flex align-items-center gap-3">
                <div className="bg-white bg-opacity-25 p-3 rounded-circle">
                  <Droplet size={24} />
                </div>
                <div>
                  <div className="opacity-75 small">Last Donation</div>
                  <div className="fw-bold fs-5">{donor.lastDonation}</div>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm bg-secondary text-white">
              <Card.Body className="d-flex align-items-center gap-3">
                <div className="bg-white bg-opacity-25 p-3 rounded-circle">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="opacity-75 small">Next Eligible</div>
                  <div className="fw-bold fs-5">Dec 15, 2024</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <h4 className="fw-bold mb-3">Reviews from Recipients</h4>
      <Row className="g-4">
        {reviews.map((r) => (
          <Col md={4} key={r.id}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h6 className="fw-bold mb-0">{r.name}</h6>
                    <small className="text-muted">{r.hospital}</small>
                  </div>
                  <Heart size={16} className="text-danger" fill="currentColor" />
                </div>
                <p className="small text-secondary mb-3">"{r.message}"</p>
                <div className="border-top pt-2">
                  <Badge bg="light" text="dark" className="fw-normal">
                    Recipient Blood Group: <span className="fw-bold">{r.bloodGroup}</span>
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
