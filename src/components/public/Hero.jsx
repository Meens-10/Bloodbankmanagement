import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ImageSlider from "../../components/common/ImageSlider";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-light">
      <section className="py-5 bg-danger text-white text-center">
        <Container>
          <div className="py-5">
            <span className="bg-white text-danger px-3 py-1 rounded-pill fw-bold small text-uppercase mb-3 d-inline-block">
              Save Lives, Donate Blood
            </span>
            <h1 className="display-3 fw-bold mb-3">
              Every Drop Counts, <br /> Every Donor Matters
            </h1>
            <p className="lead opacity-75 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
              Join our comprehensive blood bank management system. Whether you're a
              donor, hospital, or administrator, we make blood donation and
              distribution seamless and efficient.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button variant="light" size="lg" className="fw-bold px-4 text-danger" onClick={() => navigate("/donor-register")}>
                Get Started →
              </Button>
              <Button variant="outline-light" size="lg" className="fw-bold px-4">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="text-center g-4 mb-5">
          {[
            { count: "1,245+", label: "Donors" },
            { count: "3,421", label: "Lives Saved" },
            { count: "50+", label: "Camps" },
            { count: "24/7", label: "Service" }
          ].map((stat, idx) => (
            <Col key={idx} md={3} sm={6}>
              <div className="p-4 rounded shadow-sm bg-white h-100 border-bottom border-danger border-4">
                <div className="display-6 fw-bold text-dark">{stat.count}</div>
                <div className="text-muted text-uppercase small fw-bold">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        <section className="text-center py-5">
          <h2 className="mb-4 fw-bold">Blood Donation & Testing Lab</h2>
          <div className="rounded overflow-hidden shadow-lg mx-auto" style={{ maxWidth: "900px" }}>
            <ImageSlider />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Hero;
