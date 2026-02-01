import React, { useState, useEffect } from "react";
// import "../Login.css"; // Removed custom CSS
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Users, Hospital, ShieldCheck, ArrowLeft } from "lucide-react"; // Assuming lucide-react is available as per package.json

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState("donor");

    useEffect(() => {
        if (location.state?.role) {
            setActiveTab(location.state.role);
        }
    }, [location.state]);

    const features = [
        {
            id: "donor",
            icon: <Users size={24} />,
            title: "Donor Portal",
            desc: "Register, schedule donations, and view history",
            color: "text-primary"
        },
        {
            id: "hospital",
            icon: <Hospital size={24} />,
            title: "Hospital Access",
            desc: "Search inventory and request blood units",
            color: "text-danger"
        },
        {
            id: "admin",
            icon: <ShieldCheck size={24} />,
            title: "Admin Control",
            desc: "Manage inventory, camps, and donor verification",
            color: "text-success"
        }
    ];

    const handleLogin = (role) => {
        let path = "/";
        if (role === "donor") path = "/donorportal"; // Corrected to point to actual portal
        if (role === "hospital") path = "/hospitalportal";
        if (role === "admin") path = "/admin";
        navigate(path);
    }

    return (
        <Container fluid className="vh-100 d-flex flex-column bg-light">
            <Row className="flex-grow-1">
                {/* Left Side - Info */}
                <Col md={6} lg={5} className="bg-white p-5 d-flex flex-column justify-content-center shadow-sm">
                    <div className="mb-4 text-secondary cursor-pointer" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                        <ArrowLeft size={20} className="me-2" /> Back to Home
                    </div>

                    <div className="mb-5">
                        <div className="d-flex align-items-center mb-3">
                            <span className="fs-1 me-2">🩸</span>
                            <div>
                                <h2 className="fw-bold mb-0">Blood Bank</h2>
                                <p className="text-muted mb-0">Management System</p>
                            </div>
                        </div>
                        <p className="lead text-secondary">
                            Secure authentication with role-based access control
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        {features.map((feature) => (
                            <Card
                                key={feature.id}
                                className={`border-0 shadow-sm cursor-pointer transition-all ${activeTab === feature.id ? 'bg-light border-start border-4 border-danger' : ''}`}
                                style={{ cursor: 'pointer', transition: 'all 0.2s', transform: activeTab === feature.id ? 'translateX(10px)' : 'none' }}
                                onClick={() => setActiveTab(feature.id)}
                            >
                                <Card.Body className="d-flex align-items-center">
                                    <div className={`p-3 rounded-circle bg-light me-3 ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h5 className="mb-1">{feature.title}</h5>
                                        <p className="text-muted small mb-0">{feature.desc}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Col>

                {/* Right Side - Login Form */}
                <Col md={6} lg={7} className="d-flex align-items-center justify-content-center bg-light p-5">
                    <Card className="border-0 shadow-lg p-4 w-100" style={{ maxWidth: '450px' }}>
                        <Card.Body>
                            <div className="text-center mb-4">
                                <h3 className="fw-bold">
                                    {activeTab === 'donor' && '👋 Donor Sign In'}
                                    {activeTab === 'hospital' && '👋 Hospital Sign In'}
                                    {activeTab === 'admin' && '👋 Admin Sign In'}
                                </h3>
                                <p className="text-muted">Enter your credentials to access your account</p>
                            </div>

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" size="lg" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" size="lg" />
                                </Form.Group>

                                <Button
                                    variant={activeTab === 'hospital' ? 'warning' : activeTab === 'admin' ? 'dark' : 'danger'}
                                    size="lg"
                                    className="w-100 text-white fw-bold"
                                    onClick={() => handleLogin(activeTab)}
                                >
                                    {activeTab === 'donor' && 'Sign In as Donor'}
                                    {activeTab === 'hospital' && 'Sign In as Hospital'}
                                    {activeTab === 'admin' && 'Sign In as Admin'}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
