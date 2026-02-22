import { CheckCircle, XCircle } from 'lucide-react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';

export function AdminDonors({ donorVerifications, handleVerifyDonor }) {

    const getBadgeVariant = (status) => {
        const s = (status || '').toLowerCase();
        if (s === 'approved') return 'success';
        if (s === 'pending') return 'warning';
        if (s === 'rejected') return 'danger';
        return 'secondary';
    };

    return (
        <Card className="border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-4">Donor Health Verification</h5>
            <div className="d-flex flex-column gap-3">
                {(donorVerifications || []).map((donor) => (
                    <div key={donor.id} className="border rounded-4 p-4 shadow-sm bg-white">
                        <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <Badge bg={getBadgeVariant(donor.status)} className="px-3 py-2 rounded-2 fw-bold">
                                        {(donor.status || 'PENDING').toUpperCase()}
                                    </Badge>
                                    <small className="text-muted fw-bold">ID: {donor.id}</small>
                                </div>

                                <Row className="g-4 text-start">
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Name</small>
                                        <h6 className="fw-bold mb-0">{donor.name}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Blood Group</small>
                                        <h6 className="mb-0">{donor.bloodGroup}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Last Donation</small>
                                        <h6 className="mb-0">{donor.lastDonationDate || 'First Time'}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Health Status</small>
                                        <h6 className={`mb-0 ${donor.healthStatus?.toLowerCase() === 'good' ? 'text-success' : 'text-danger'}`}>
                                            {donor.healthStatus || 'Good'}
                                        </h6>
                                    </Col>
                                </Row>
                            </div>

                            {(donor.status || '').toLowerCase() === 'pending' && (
                                <div className="d-flex align-items-center gap-2 border-start ps-md-4">
                                    <Button
                                        variant="success"
                                        className="d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-bold"
                                        onClick={() => handleVerifyDonor(donor.id, true)}
                                    >
                                        <CheckCircle size={16} /> Approve
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-bold"
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
