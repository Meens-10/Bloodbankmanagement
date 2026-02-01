import {
    Users,
    TrendingUp,
    Droplet,
    FlaskConical,
    Package,
    UserCheck,
    Calendar,
    XCircle,
    Clock,
    CheckCircle,
} from 'lucide-react';
import { Row, Col, Card } from 'react-bootstrap';

export function AdminDashboard({ stats }) {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <Row className="g-4 mb-4">
                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <Users className="text-primary-red" size={24} />
                                </div>
                                <TrendingUp className="text-success" size={20} />
                            </div>
                            <h6 className="text-secondary mb-1">Total Donors</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.totalDonors}</h3>
                            <small className="text-success fw-bold">+12% from last month</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <Droplet className="text-primary-red" size={24} />
                                </div>
                                <TrendingUp className="text-success" size={20} />
                            </div>
                            <h6 className="text-secondary mb-1">Total Donations</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.totalDonations}</h3>
                            <small className="text-success fw-bold">+15% from last month</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <FlaskConical className="text-primary-red" size={24} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Pending Tests</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.pendingTests}</h3>
                            <small className="text-muted">Requires testing</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <Package className="text-primary-red" size={24} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Inventory Units</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.inventoryUnits}</h3>
                            <small className="text-muted">Across all locations</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <UserCheck className="text-primary-red" size={24} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Active Donors</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.activeDonors}</h3>
                            <small className="text-success fw-bold">+8% from last month</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <Calendar className="text-primary-red" size={24} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Upcoming Camps</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.upcomingCamps}</h3>
                            <small className="text-muted">This month</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <XCircle className="text-primary-red" size={24} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Discarded Bags</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.discardedBags}</h3>
                            <small className="text-muted">Safety protocols</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100 rounded-3 transition-all hover-shadow">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2 rounded" style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
                                    <Clock className="text-primary-red" size={20} />
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1">Pending Requests</h6>
                            <h3 className="fw-bold text-dark mb-1">{stats.pendingRequests}</h3>
                            <small className="text-muted">Requires attention</small>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Recent Activity */}
            <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                    <h5 className="mb-4 fw-bold">Recent Activity</h5>
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-start gap-3 pb-3 border-bottom">
                            <div className="bg-success bg-opacity-10 p-2 rounded">
                                <CheckCircle className="text-success" size={20} />
                            </div>
                            <div>
                                <p className="mb-1 text-dark fw-medium">Blood bag BAG2024003 cleared all tests</p>
                                <p className="mb-1 small text-muted">Added to inventory - B+ Blood Group</p>
                                <small className="text-secondary">2 hours ago</small>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 pb-3 border-bottom">
                            <div className="bg-danger bg-opacity-10 p-2 rounded">
                                <XCircle className="text-danger" size={20} />
                            </div>
                            <div>
                                <p className="mb-1 text-dark fw-medium">Blood bag BAG2024004 discarded</p>
                                <p className="mb-1 small text-muted">Hepatitis B positive - Safety protocol followed</p>
                                <small className="text-secondary">3 hours ago</small>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 pb-3 border-bottom">
                            <div className="bg-primary bg-opacity-10 p-2 rounded">
                                <Droplet className="text-primary" size={20} />
                            </div>
                            <div>
                                <p className="mb-1 text-dark fw-medium">Blood request fulfilled</p>
                                <p className="mb-1 small text-muted">City Hospital - 3 units A+</p>
                                <small className="text-secondary">4 hours ago</small>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="bg-warning bg-opacity-10 p-2 rounded">
                                <Calendar className="text-warning" size={20} />
                            </div>
                            <div>
                                <p className="mb-1 text-dark fw-medium">Blood camp completed</p>
                                <p className="mb-1 small text-muted">University Drive - 187 donations collected</p>
                                <small className="text-secondary">1 day ago</small>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
