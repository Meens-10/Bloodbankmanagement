import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap';
import { LogOut, User } from 'lucide-react';

import MyDetails from "./MyDetails";
import Appointments from "./Appointment";
import Certificates from "./Certificates";
import EditProfile from "./EditProfile";
import History from "./History";

import { getDonor, saveDonor } from "../../services/donorStore";
import logo from "../../assets/logo.jpeg"; // Adjusted path

export default function DonorPortal() {
  const [tab, setTab] = useState("details");
  const [page, setPage] = useState("portal");
  const [donor, setDonor] = useState(getDonor());

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleSaveProfile = (updatedDonor) => {
    saveDonor(updatedDonor);
    setDonor(updatedDonor);
    setPage("portal");
  };

  if (page === "edit") {
    return (
      <EditProfile
        donor={donor}
        onSave={handleSaveProfile}
        onCancel={() => setPage("portal")}
      />
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <Card className="border-0 shadow-sm rounded-0 mb-4">
        <Card.Body className="py-2 px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={logo} alt="Blood Bank" style={{ height: '40px' }} />
              <div className="lh-1">
                <h5 className="mb-0 fw-bold">Blood Bank</h5>
                <small className="text-muted text-uppercase" style={{ fontSize: '10px' }}>Dashboard</small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="text-end d-none d-md-block lh-1">
                <div className="fw-bold">{donor.name}</div>
                <small className="text-muted">{donor.email}</small>
              </div>

              <div
                className="rounded-circle overflow-hidden border cursor-pointer"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                onClick={() => setPage("edit")}
                title="Edit Profile"
              >
                <img src={donor.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <Button variant="outline-danger" size="sm" onClick={handleLogout} className="d-flex align-items-center gap-2">
                <LogOut size={16} /> Logout
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Container>
        <div className="mb-4">
          <h2 className="fw-bold">Donor Portal</h2>
          <p className="text-muted">Manage your donations and view your impact</p>
        </div>

        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-bottom-0 pt-4 px-4 pb-0">
            <Nav variant="tabs" className="border-bottom-0 gap-2">
              <Nav.Item>
                <Nav.Link active={tab === "details"} onClick={() => setTab("details")} className={tab === "details" ? "text-danger border-bottom border-danger border-0 border-bottom-3 fw-bold" : "text-secondary border-0 hover-bg-light"}>
                  My Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link active={tab === "appointments"} onClick={() => setTab("appointments")} className={tab === "appointments" ? "text-danger border-bottom border-danger border-0 border-bottom-3 fw-bold" : "text-secondary border-0 hover-bg-light"}>
                  Appointments
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link active={tab === "certificates"} onClick={() => setTab("certificates")} className={tab === "certificates" ? "text-danger border-bottom border-danger border-0 border-bottom-3 fw-bold" : "text-secondary border-0 hover-bg-light"}>
                  Certificates
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link active={tab === "history"} onClick={() => setTab("history")} className={tab === "history" ? "text-danger border-bottom border-danger border-0 border-bottom-3 fw-bold" : "text-secondary border-0 hover-bg-light"}>
                  History
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="p-4 bg-white border-top">
            {tab === "details" && <MyDetails />}
            {tab === "appointments" && <Appointments />}
            {tab === "certificates" && <Certificates />}
            {tab === "history" && <History />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
