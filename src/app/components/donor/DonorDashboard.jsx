import { Droplet, Calendar, Heart, Mail, Phone, MapPin, CheckCircle2, Clock, User } from 'lucide-react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

export function DonorDashboard() {
    const { user } = useAuth();

    
    const donorStats = {
        totalDonations: 12,
        livesSaved: '36+',
        status: 'Eligible',
        lastDonation: 'Sep 15, 2024',
        nextEligible: 'Dec 15, 2024'
    };

    const recentDonations = [
        { id: 'BBM2024091501', date: '2024-09-15', location: 'Central Blood Bank', units: '450ml', recipient: 'City Hospital - Patient #1234' },
        { id: 'BBM2024061002', date: '2024-06-10', location: 'City Hospital', units: '450ml', recipient: 'Regional Hospital - Patient #5678' },
        { id: 'BBM2024030503', date: '2024-03-05', location: 'Community Camp', units: '450ml', recipient: 'Emergency Ward - Patient #9012' },
    ];

    return (
        <div className="pb-5">

            <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4 bg-primary-red text-white">
                <Card.Body className="p-4 p-md-5">
                    <div className="mb-5">
                        <h1 className="display-4 fw-bold mb-1 text-white">{user?.name}</h1>
                        <p className="fs-5 text-primary-red-light mb-0 fw-medium">Blood Donor</p>
                    </div>

                    <Row className="mb-5 g-4 text-white">
                        <Col xs={4}>
                            <small className="text-primary-red-label d-block mb-1 fw-bold text-uppercase small" style={{ letterSpacing: '0.5px' }}>Blood Group</small>
                            <h2 className="fw-bold mb-0 display-6">O+</h2>
                        </Col>
                        <Col xs={4}>
                            <small className="text-primary-red-label d-block mb-1 fw-bold text-uppercase small" style={{ letterSpacing: '0.5px' }}>Total Donations</small>
                            <h2 className="fw-bold mb-0 display-6">12</h2>
                        </Col>
                        <Col xs={4}>
                            <small className="text-primary-red-label d-block mb-1 fw-bold text-uppercase small" style={{ letterSpacing: '0.5px' }}>Lives Saved</small>
                            <h2 className="fw-bold mb-0 display-6">36+</h2>
                        </Col>
                    </Row>

                    <div className="pt-4 border-top border-white border-opacity-20 mt-4 text-white">
                        <Row className="gy-3 align-items-center">
                            <Col md={4}>
                                <div className="d-flex align-items-center gap-2">
                                    <Phone size={16} className="text-primary-red-light" />
                                    <span>{user?.phone || '+91 9500457895'}</span>
                                </div>
                            </Col>
                            <Col md={4} className="d-flex justify-content-md-center">
                                <div className="d-flex align-items-center gap-2">
                                    <Mail size={16} className="text-primary-red-light" />
                                    <span>{user?.email || 'meens@donor.com'}</span>
                                </div>
                            </Col>
                            <Col md={4} className="d-flex justify-content-md-end">
                                <div className="d-flex align-items-center gap-2">
                                    <MapPin size={16} className="text-primary-red-light" />
                                    <span>{user?.address || '123 Main St, City, State 12345'}</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>


            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="d-flex align-items-center gap-3 p-4">
                            <div className="bg-success bg-opacity-10 p-3 rounded-4">
                                <CheckCircle2 className="text-success" size={28} />
                            </div>
                            <div>
                                <small className="text-secondary d-block">Donation Status</small>
                                <h5 className="fw-bold mb-0 text-success">{donorStats.status}</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="d-flex align-items-center gap-3 p-4">
                            <div className="bg-success bg-opacity-10 p-3 rounded-4">
                                <Calendar className="text-success" size={28} />
                            </div>
                            <div>
                                <small className="text-secondary d-block">Last Donation</small>
                                <h5 className="fw-bold mb-0 text-dark">{donorStats.lastDonation}</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="d-flex align-items-center gap-3 p-4">
                            <div className="bg-success bg-opacity-10 p-3 rounded-4">
                                <Clock className="text-success" size={28} />
                            </div>
                            <div>
                                <small className="text-secondary d-block">Next Eligible</small>
                                <h5 className="fw-bold mb-0 text-success">{donorStats.nextEligible}</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark mb-0">Recent Donations</h4>
                </div>
                <div className="d-flex flex-column gap-3">
                    {recentDonations.map((donation) => (
                        <Card key={donation.id} className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                            <Card.Body className="p-4">
                                <Row className="align-items-center g-3">
                                    <Col xs="auto">
                                        <div className="bg-light p-3 rounded-4">
                                            <Droplet className="text-primary-red" size={24} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                                            <div>
                                                <h6 className="fw-bold text-dark mb-1 fs-5">{donation.date}</h6>
                                                <p className="text-secondary mb-0">{donation.location}</p>
                                            </div>
                                            <span className="text-muted small">ID: {donation.id}</span>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3 border-top border-light">
                                            <div className="text-secondary">
                                                <small className="d-block mb-1">Units Collected</small>
                                                <strong>{donation.units}</strong>
                                            </div>
                                            <Badge bg="success" className="bg-opacity-10 text-success border border-success border-opacity-20 px-3 py-2 rounded-pill fw-medium">
                                                <div className="d-flex align-items-center gap-2">
                                                    <CheckCircle2 size={12} />
                                                    Received by: {donation.recipient}
                                                </div>
                                            </Badge>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
