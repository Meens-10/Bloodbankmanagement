import { CheckCircle, XCircle } from 'lucide-react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';

export function AdminDonors({ donorVerifications, handleVerifyDonor }) {

    const getBadgeVariant = (status) => {
        if (status === 'approved') return 'success';
        if (status === 'pending') return 'warning';
        if (status === 'rejected') return 'danger';
        return 'secondary';
    };

    return (
        <Card className="border-0 shadow-sm rounded-4 p-4">
            <h5 className="mb-4">Donor Health Verification</h5>
            <div className="d-flex flex-column gap-3">
                {donorVerifications.map((donor) => (
                    <div key={donor.id} className="border rounded-3 p-3">
                        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <Badge bg={getBadgeVariant(donor.status)}>{donor.status.toUpperCase()}</Badge>
                                    <small className="text-muted">ID: {donor.id}</small>
                                </div>

                                <Row className="g-3">
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block">Name</small>
                                        <strong>{donor.donorName}</strong>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block">Blood Group</small>
                                        <span>{donor.bloodGroup}</span>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block">Last Donation</small>
                                        <span>{donor.lastDonation}</span>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block">Health Status</small>
                                        <span>{donor.healthStatus}</span>
                                    </Col>
                                </Row>
                            </div>

                            {donor.status === 'pending' && (
                                <div className="d-flex align-items-start gap-2">
                                    <Button
                                        variant="success"
                                        size="sm"
                                        className="d-flex align-items-center gap-1"
                                        onClick={() => handleVerifyDonor(donor.id, true)}
                                    >
                                        <CheckCircle size={16} /> Approve
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="d-flex align-items-center gap-1"
                                        onClick={() => handleVerifyDonor(donor.id, false)}
                                    >
                                        <XCircle size={16} /> Reject
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
