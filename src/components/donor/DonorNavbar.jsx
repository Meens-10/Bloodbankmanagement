import React from 'react';
import { ArrowLeft, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

const DonorNavbar = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => navigate('/');

  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Droplet fill="white" size={24} />
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold fs-5">Blood Bank</span>
            <span className="small text-white-50" style={{ fontSize: '0.75rem' }}>DONOR REGISTRATION</span>
          </div>
        </Navbar.Brand>

        <div className="ms-auto">
          <Button variant="outline-light" size="sm" onClick={handleBackToHome} className="d-flex align-items-center gap-2">
            <ArrowLeft size={16} /> Back To Home
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};
export default DonorNavbar;