import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Heart, Calendar, Shield } from "lucide-react";

export default function WhyDonate() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light" id="why-donate">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="mb-4">
              <span className="text-danger fw-bold text-uppercase small">Help the Community</span>
              <h2 className="display-5 fw-bold mb-4">Why Blood Donation Matter?</h2>
              <p className="lead text-muted mb-4">
                Every two seconds, someone needs blood. Your donation can save up to
                three lives. Join thousands of donors who regularly contribute to
                saving lives in our community.
              </p>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-3">
                <div className="bg-danger bg-opacity-10 p-3 rounded h-100 text-danger">
                  <Heart size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Save Lives</h5>
                  <p className="text-muted mb-0">One donation can save up to 3 lives immediately.</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="bg-warning bg-opacity-10 p-3 rounded h-100 text-warning">
                  <Calendar size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Easy Scheduling</h5>
                  <p className="text-muted mb-0">Book appointments online at your convenience.</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded h-100 text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Safe & Secure</h5>
                  <p className="text-muted mb-0">We follow strict safety and hygiene protocols.</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-lg bg-danger text-white p-4">
              <Card.Body>
                <h3 className="fw-bold mb-4">Donation Requirements</h3>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
                  <li className="d-flex align-items-center gap-3">
                    <span className="bg-white bg-opacity-25 rounded-circle p-1 px-2 fw-bold">1</span>
                    <span className="fs-5">Age: 18-65 years</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="bg-white bg-opacity-25 rounded-circle p-1 px-2 fw-bold">2</span>
                    <span className="fs-5">Weight: Minimum 50 kg</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="bg-white bg-opacity-25 rounded-circle p-1 px-2 fw-bold">3</span>
                    <span className="fs-5">Good general health</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="bg-white bg-opacity-25 rounded-circle p-1 px-2 fw-bold">4</span>
                    <span className="fs-5">3 months gap between donations</span>
                  </li>
                </ul>
                <Button variant="light" size="lg" className="w-100 text-danger fw-bold rounded-pill" onClick={() => navigate("/donor-register")}>
                  Register as Donor
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
