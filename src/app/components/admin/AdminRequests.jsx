import { Package, Droplet, Building2, FileText, Phone, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Card, Row, Col, Badge, Button, Alert } from 'react-bootstrap';

export function AdminRequests({ hospitalRequests, inventory, handleApproveRequest, handleRejectRequest }) {

    const pendingRequests = hospitalRequests.filter(r => r.status === 'pending');

    const getUrgencyVariant = (urgency) => {
        switch (urgency) {
            case 'critical': return 'danger';
            case 'urgent': return 'warning';
            default: return 'primary';
        }
    };

    return (
        <div className="space-y-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1">Hospital Blood Requests</h4>
                    <p className="text-muted mb-0 small">Review and manage pending requests</p>
                </div>
                <Badge bg="secondary" className="px-3 py-2 fs-6">
                    {pendingRequests.length} Pending
                </Badge>
            </div>

            {/* Inventory Quick View */}
            <Card className="border-primary bg-primary bg-opacity-10 mb-4">
                <Card.Body>
                    <h6 className="d-flex align-items-center gap-2 text-primary fw-bold mb-3">
                        <Package size={18} /> Current Inventory Quick View
                    </h6>
                    <Row className="g-2">
                        {inventory.map(item => (
                            <Col xs={6} md={3} lg={1} key={item.id}>
                                <Card className="border-0 shadow-sm text-center">
                                    <Card.Body className="p-2">
                                        <strong className="text-danger d-block">{item.bloodGroup}</strong>
                                        <h6 className="mb-0 fw-bold">{item.units}</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>

            {/* Requests List */}
            <div className="d-flex flex-column gap-3">
                {history.length === 0 && (
                    <div className="text-center py-5">
                        <div className="bg-light d-inline-block p-4 rounded-circle mb-3">
                            <CheckCircle size={48} className="text-success" />
                        </div>
                        <h4>All Caught Up!</h4>
                        <p className="text-muted">No pending requests at the moment.</p>
                    </div>
                )}

                {pendingRequests
                    .sort((a, b) => (a.urgency === 'critical' ? -1 : 1))
                    .map(request => {
                        const availableStock = inventory.find(i => i.bloodGroup === request.bloodGroup);
                        const hasStock = availableStock && availableStock.units >= request.unitsNeeded;

                        return (
                            <Card key={request.id} className={`border-0 shadow-sm border-start border-5 border-${getUrgencyVariant(request.urgency)}`}>
                                <Card.Body>
                                    <div className="d-flex flex-column flex-lg-row gap-4">
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <h5 className="mb-0 fw-bold">{request.hospitalName}</h5>
                                                <Badge bg={getUrgencyVariant(request.urgency)}>{request.urgency.toUpperCase()}</Badge>
                                            </div>
                                            <p className="text-muted small mb-3">Request ID: {request.id} • {request.requestDate}</p>

                                            <Row className="g-3 mb-3">
                                                <Col sm={6} md={3}>
                                                    <div className="bg-light p-3 rounded">
                                                        <small className="text-muted d-block mb-1">Blood Group</small>
                                                        <h5 className="mb-0 text-danger fw-bold d-flex align-items-center gap-2">
                                                            <Droplet size={18} /> {request.bloodGroup}
                                                        </h5>
                                                    </div>
                                                </Col>
                                                <Col sm={6} md={3}>
                                                    <div className="bg-light p-3 rounded">
                                                        <small className="text-muted d-block mb-1">Units Needed</small>
                                                        <h5 className="mb-0 fw-bold">{request.unitsNeeded} units</h5>
                                                    </div>
                                                </Col>
                                                <Col sm={6} md={3}>
                                                    <div className="bg-light p-3 rounded">
                                                        <small className="text-muted d-block mb-1">Available</small>
                                                        <h5 className={`mb-0 fw-bold ${hasStock ? 'text-success' : 'text-danger'}`}>
                                                            {availableStock?.units || 0} units
                                                        </h5>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className="d-flex flex-wrap gap-4 text-muted small">
                                                <span className="d-flex align-items-center gap-1"><Building2 size={14} /> Patient: <strong>{request.patientName}</strong></span>
                                                <span className="d-flex align-items-center gap-1"><FileText size={14} /> Reason: {request.reason}</span>
                                                <span className="d-flex align-items-center gap-1"><Phone size={14} /> Contact: {request.contactPerson} ({request.contactPhone})</span>
                                            </div>

                                            {!hasStock && (
                                                <Alert variant="danger" className="mt-3 py-2 px-3 d-flex align-items-center gap-2">
                                                    <AlertTriangle size={16} />
                                                    <small>Insufficient Stock! Short by {request.unitsNeeded - (availableStock?.units || 0)} units.</small>
                                                </Alert>
                                            )}
                                        </div>

                                        <div className="d-flex flex-column gap-2 justify-content-center border-start ps-lg-4" style={{ minWidth: '150px' }}>
                                            <Button
                                                variant={hasStock ? "success" : "secondary"}
                                                disabled={!hasStock}
                                                className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                                                onClick={() => handleApproveRequest(request.id, request.bloodGroup, request.unitsNeeded)}
                                            >
                                                <CheckCircle size={18} /> Approve
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                                                onClick={() => handleRejectRequest(request.id)}
                                            >
                                                <XCircle size={18} /> Reject
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        );
                    })}
            </div>
        </div>
    );
}
