import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.jpeg";
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { LogOut, User } from 'lucide-react';

export default function HospitalPortal() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === `/hospitalportal${path}`;

  return (
    <div className="min-vh-100 bg-light font-sans">
      <Navbar bg="white" expand="lg" className="mb-4 shadow-sm py-2">
        <Container fluid>
          <Navbar.Brand className="d-flex align-items-center gap-3">
            <img src={logo} alt="Blood Bank Logo" style={{ height: '45px' }} />
            <div className="d-flex flex-column lh-1">
              <span className="fw-bold fs-5 text-dark">Blood Bank</span>
              <span className="small text-muted text-uppercase" style={{ fontSize: '0.75rem' }}>HOSPITAL DASHBOARD</span>
            </div>
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-4 ms-auto">
            <div className="d-none d-md-flex align-items-center gap-3 border-end pe-4">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold">HOSPITAL</div>
              <div className="text-end lh-sm">
                <div className="fw-bold text-dark">Dr. Sarah Johnson</div>
                <div className="small text-muted">contact@cityhospital.com</div>
              </div>
            </div>

            <Button variant="light" className="rounded-circle p-2 border" title="Profile">
              <User size={20} className="text-secondary" />
            </Button>

            <Button variant="outline-danger" size="sm" onClick={() => navigate("/login")} className="d-flex align-items-center gap-2">
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container>
        <div className="mb-4">
          <h1 className="fw-bold mb-1">Hospital Portal</h1>
          <p className="text-muted">Search blood inventory and manage requests</p>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden mb-4">
          <Nav variant="tabs" className="px-4 pt-3 border-bottom-0 gap-3">
            {[
              { path: "", icon: "🔍", label: "Search Inventory" },
              { path: "/requests", icon: "📋", label: "My Requests" },
              { path: "/new", icon: "➕", label: "New Request" }
            ].map(tab => (
              <Nav.Item key={tab.path}>
                <Nav.Link
                  as={Link}
                  to={`/hospitalportal${tab.path}`}
                  active={isActive(tab.path)}
                  className={`d-flex align-items-center gap-2 border-0 border-bottom border-3 rounded-0 px-3 py-3 ${isActive(tab.path) ? 'border-primary text-primary fw-bold bg-transparent' : 'border-transparent text-secondary hover-bg-light'}`}
                >
                  <span>{tab.icon}</span> {tab.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <div className="border-top"></div>

          <div className="p-4 bg-light bg-opacity-50">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}
