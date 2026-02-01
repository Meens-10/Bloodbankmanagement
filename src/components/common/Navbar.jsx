import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";

function Navbar() {
  const navigate = useNavigate();

  return (
    <BsNavbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
      <Container>
        <BsNavbar.Brand href="/" className="d-flex align-items-center gap-2">
          <span className="fs-2">🩸</span>
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold fs-4 text-dark">Blood Bank</span>
            <span className="small text-muted" style={{ fontSize: '0.75rem' }}>Management System</span>
          </div>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-medium">
            <Nav.Link href="/" className="px-3">Home</Nav.Link>
            <Nav.Link href="#services" className="px-3">Services</Nav.Link>
            <Nav.Link href="#why-donate" className="px-3">Why Donate</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
          </Nav>

          <Button variant="danger" className="fw-bold px-4 rounded-pill" onClick={() => navigate("/login")}>
            Donor Login
          </Button>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;