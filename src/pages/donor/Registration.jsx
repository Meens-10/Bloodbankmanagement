import { useState } from "react";
import { Activity, CheckCircle, Trophy, Heart, Droplet } from "lucide-react";

import DonorNavbar from "../../components/donor/DonorNavbar";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Badge, ListGroup } from 'react-bootstrap';

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    weight: "",
    address: "",
    medicalConditions: "",
    password: "",
    confirmPassword: "",
  });


  const topDonors = [
    { rank: 1, name: 'Sarah Williams', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', bloodType: 'O+', donations: 48, livesSaved: 144, badge: 'PLATINUM' },
    { rank: 2, name: 'Michael Chen', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', bloodType: 'A+', donations: 42, livesSaved: 126, badge: 'GOLD' },
    { rank: 3, name: 'Emily Rodriguez', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', bloodType: 'B+', donations: 38, livesSaved: 114, badge: 'GOLD' },
    { rank: 4, name: 'David Thompson', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', bloodType: 'AB+', donations: 35, livesSaved: 105, badge: 'SILVER' },
    { rank: 5, name: 'Jennifer Park', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', bloodType: 'O-', donations: 32, livesSaved: 96, badge: 'SILVER' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (formData.age < 18 || formData.age > 65) {
      alert("Age must be between 18 and 65 years");
      return;
    }
    if (formData.weight < 50) {
      alert("Weight must be at least 50 kg");
      return;
    }
    console.log("Registered Donor Data:", formData);
    alert("✅ Donor Registered Successfully! Thank you for saving lives!");
    // Reset form...
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <DonorNavbar />
      <Container>
        <Row className="g-4">
          {/* Left Section - Registration Form */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white p-4 border-bottom-0">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-danger bg-opacity-10 p-2 rounded-circle me-3 text-danger">
                    <Activity size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="fw-bold mb-0">Register as Blood Donor</h2>
                    <p className="text-muted mb-0">Join our community of life-savers</p>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <h5 className="mb-3 text-primary border-bottom pb-2">Personal Information</h5>
                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="fullName">
                      <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" name="fullName" placeholder="Enter your full name" required value={formData.fullName} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="email">
                      <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="email" name="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="phone">
                      <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="tel" name="phone" placeholder="+1 234-567-8900" required value={formData.phone} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="bloodGroup">
                      <Form.Label>Blood Group <span className="text-danger">*</span></Form.Label>
                      <Form.Select name="bloodGroup" required value={formData.bloodGroup} onChange={handleChange}>
                        <option value="">Select Blood Group</option>
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <option key={g} value={g}>{g}</option>)}
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="age">
                      <Form.Label>Age <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="number" name="age" placeholder="Age (18-65)" min="18" max="65" required value={formData.age} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="weight">
                      <Form.Label>Weight (kg) <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="number" name="weight" placeholder="Minimum 50kg" min="50" required value={formData.weight} onChange={handleChange} />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="medicalConditions">
                    <Form.Label>Medical Conditions (if any)</Form.Label>
                    <Form.Control as="textarea" rows={3} name="medicalConditions" placeholder="List any medical conditions..." value={formData.medicalConditions} onChange={handleChange} />
                  </Form.Group>

                  <h5 className="mb-3 text-primary border-bottom pb-2">Account Security</h5>
                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="password">
                      <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="password" name="password" minLength={6} required value={formData.password} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="confirmPassword">
                      <Form.Label>Confirm Password <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} />
                    </Form.Group>
                  </Row>

                  <Card className="bg-light border-0 mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <CheckCircle size={20} className="text-success me-2" />
                        <h6 className="mb-0 fw-bold">Donor Eligibility Criteria</h6>
                      </div>
                      <ul className="mb-0 small text-muted">
                        <li>Age: 18–65 years</li>
                        <li>Weight: Minimum 50 kg</li>
                        <li>Good general health</li>
                        <li>3 months gap between donations</li>
                      </ul>
                    </Card.Body>
                  </Card>

                  <div className="d-flex gap-2">
                    <Button type="submit" variant="danger" size="lg" className="flex-grow-1">Register as Donor</Button>
                    <Button variant="outline-secondary" size="lg" onClick={() => navigate("/login")}>Login</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Section - Top Donors */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-warning bg-opacity-25 p-2 rounded-circle me-3 text-warning">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0">Top Donors</h4>
                    <p className="text-muted small mb-0">Community leaders saving lives</p>
                  </div>
                </div>

                {/* Top Donor */}
                <div className="text-center mb-4 p-3 bg-light rounded">
                  <div className="position-relative d-inline-block mb-2">
                    <img src={topDonors[0].image} alt={topDonors[0].name} className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                    <Badge bg="warning" text="dark" className="position-absolute bottom-0 start-50 translate-middle-x rounded-pill">
                      <Trophy size={10} className="me-1" />#{topDonors[0].rank}
                    </Badge>
                  </div>
                  <h5 className="fw-bold mb-3">{topDonors[0].name}</h5>
                  <div className="d-flex justify-content-center gap-2">
                    <div className="bg-white p-2 rounded shadow-sm text-center flex-grow-1">
                      <Droplet size={16} className="text-danger mb-1 d-block mx-auto" />
                      <small className="fw-bold">{topDonors[0].bloodType}</small>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm text-center flex-grow-1">
                      <Heart size={16} className="text-danger mb-1 d-block mx-auto" />
                      <small className="fw-bold d-block">{topDonors[0].donations}</small>
                      <span style={{ fontSize: '10px' }} className="text-muted">Donations</span>
                    </div>
                    <div className="bg-danger text-white p-2 rounded shadow-sm text-center flex-grow-1">
                      <Activity size={16} className="mb-1 d-block mx-auto" />
                      <small className="fw-bold d-block">{topDonors[0].livesSaved}</small>
                      <span style={{ fontSize: '10px' }} className="text-white-50">Lives</span>
                    </div>
                  </div>
                </div>

                <ListGroup variant="flush">
                  {topDonors.slice(1).map((donor) => (
                    <ListGroup.Item key={donor.rank} className="d-flex align-items-center px-0 py-3 border-bottom-0">
                      <div className="fw-bold me-3 text-muted">#{donor.rank}</div>
                      <img src={donor.image} alt={donor.name} className="rounded-circle me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                      <div className="flex-grow-1">
                        <h6 className="mb-0 fw-bold small">{donor.name}</h6>
                        <div className="small text-muted">
                          <span className="text-danger fw-bold">{donor.bloodType}</span> • {donor.donations} donations
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold small">{donor.livesSaved} lives</div>
                        <Badge bg={donor.badge === 'GOLD' ? 'warning' : 'secondary'} className="rounded-pill" style={{ fontSize: '10px' }}>
                          {donor.badge}
                        </Badge>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <div className="mt-4 text-center p-3 bg-danger bg-opacity-10 rounded text-danger">
                  <Heart size={32} className="mb-2" fill="currentColor" />
                  <h6 className="fw-bold">Every donation counts!</h6>
                  <small>Join these amazing donors and make a life-saving difference today.</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}