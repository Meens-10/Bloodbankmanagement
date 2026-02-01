import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone, AlertCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 mt-auto" id="contact">
      <Container>
        <Row className="g-4 mb-4">
          <Col md={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="fs-3">🩸</span>
              <h3 className="mb-0 fw-bold">Blood Bank</h3>
            </div>
            <p className="text-white-50">
              Saving lives through efficient blood donation management. We connect donors, hospitals, and patients.
            </p>
          </Col>

          <Col md={2} sm={6} xs={6}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#contact" className="text-reset text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Donate Blood</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Request Blood</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Blood Camps</a></li>
              <li className="mb-2"><a href="#" className="text-reset text-decoration-none">Health Tips</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2 d-flex gap-2">
                <AlertCircle size={18} className="mt-1" />
                <span>Emergency: 911</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <Phone size={18} className="mt-1" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <Mail size={18} className="mt-1" />
                <span>info@bloodbank.org</span>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="border-top border-secondary py-4 text-center text-white-50 small">
          © 2024 Blood Bank Management System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
