import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Hospital, ShieldCheck } from "lucide-react";

function Services() {
  const navigate = useNavigate();

  const goToLogin = (role) => {
    navigate("/login", { state: { role } });
  };

  return (
    <section className="py-5 bg-white" id="services">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive blood bank management for everyone
          </p>
        </div>

        <Row className="justify-content-center g-4">
          <Col md={5}>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all text-center p-4">
              <Card.Body>
                <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-block mb-4">
                  <Hospital size={40} className="text-primary" />
                </div>
                <h3 className="fw-bold mb-3">For Hospitals</h3>
                <ul className="list-unstyled text-start mx-auto mb-4" style={{ maxWidth: '250px' }}>
                  <li className="mb-2">✅ Search blood availability</li>
                  <li className="mb-2">✅ Request blood units</li>
                  <li className="mb-2">✅ Track request status</li>
                  <li className="mb-2">✅ Emergency blood requests</li>
                </ul>
                <Button variant="outline-primary" size="lg" className="w-100 rounded-pill" onClick={() => goToLogin("hospital")}>
                  Hospital Access
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all text-center p-4">
              <Card.Body>
                <div className="bg-success bg-opacity-10 p-4 rounded-circle d-inline-block mb-4">
                  <ShieldCheck size={40} className="text-success" />
                </div>
                <h3 className="fw-bold mb-3">For Admins</h3>
                <ul className="list-unstyled text-start mx-auto mb-4" style={{ maxWidth: '250px' }}>
                  <li className="mb-2">✅ Manage blood inventory</li>
                  <li className="mb-2">✅ Organize donation camps</li>
                  <li className="mb-2">✅ Verify donor health status</li>
                  <li className="mb-2">✅ Generate reports</li>
                </ul>
                <Button variant="outline-success" size="lg" className="w-100 rounded-pill" onClick={() => goToLogin("admin")}>
                  Admin Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
