import {
    CheckCircle,
    XCircle,
    AlertTriangle
} from 'lucide-react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

export function AdminTesting({
    bloodTests,
    handleUpdateTestResult,
    handleApproveBloodBag,
    handleDiscardBloodBag,
    getStatusColor
}) {

    // Reusing the getStatusColor helper logic but mapping to Bootstrap variants
    const getBadgeVariant = (status) => {
        if (status === 'completed' || status === 'negative' || status === 'safe') return 'success';
        if (status === 'testing' || status === 'pending') return 'warning';
        if (status === 'positive' || status === 'unsafe') return 'danger';
        return 'secondary';
    };

    return (
        <div className="space-y-6">
            <Card className="border-0 shadow-sm rounded-4 p-4">
                <h5 className="mb-4">Blood Testing & Quality Control</h5>
                <div className="d-flex flex-column gap-3">
                    {bloodTests.map((test) => (
                        <div key={test.id} className="border rounded-3 p-3">
                            <Row className="g-3">
                                <Col lg={12}>
                                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                                        <Badge bg={getBadgeVariant(test.testStatus)}>{test.testStatus.toUpperCase()}</Badge>
                                        {test.isSafe === true && <Badge bg="success">SAFE</Badge>}
                                        {test.isSafe === false && <Badge bg="danger">UNSAFE</Badge>}
                                    </div>

                                    <Row className="mb-3 g-3">
                                        <Col xs={6} md={3}>
                                            <small className="text-muted d-block">Bag ID</small>
                                            <strong>{test.bagId}</strong>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <small className="text-muted d-block">Donor</small>
                                            <span>{test.donorName}</span>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <small className="text-muted d-block">Blood Group</small>
                                            <span>{test.bloodGroup}</span>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <small className="text-muted d-block">Collection Date</small>
                                            <span>{test.collectionDate}</span>
                                        </Col>
                                    </Row>

                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {['HIV', 'Hepatitis B', 'Hepatitis C', 'Syphilis', 'Malaria'].map(disease => {
                                            const key = disease.toLowerCase().replace(' ', '');
                                            const result = test[key] || test.malaria; // Fallback for demo
                                            // Note: actual mapping should be precise based on props
                                            // Using a simplified mapping for this loop or manual:
                                            return null;
                                        })}
                                        {/* Manual Grid for Test Results */}
                                        <div className="border rounded p-2 flex-grow-1 text-center">
                                            <small className="d-block text-muted mb-1">HIV</small>
                                            <Badge bg={getBadgeVariant(test.hiv)}>{test.hiv.toUpperCase()}</Badge>
                                        </div>
                                        <div className="border rounded p-2 flex-grow-1 text-center">
                                            <small className="d-block text-muted mb-1">Hep B</small>
                                            <Badge bg={getBadgeVariant(test.hepatitisB)}>{test.hepatitisB.toUpperCase()}</Badge>
                                        </div>
                                        <div className="border rounded p-2 flex-grow-1 text-center">
                                            <small className="d-block text-muted mb-1">Hep C</small>
                                            <Badge bg={getBadgeVariant(test.hepatitisC)}>{test.hepatitisC.toUpperCase()}</Badge>
                                        </div>
                                        <div className="border rounded p-2 flex-grow-1 text-center">
                                            <small className="d-block text-muted mb-1">Syphilis</small>
                                            <Badge bg={getBadgeVariant(test.syphilis)}>{test.syphilis.toUpperCase()}</Badge>
                                        </div>
                                        <div className="border rounded p-2 flex-grow-1 text-center">
                                            <small className="d-block text-muted mb-1">Malaria</small>
                                            <Badge bg={getBadgeVariant(test.malaria)}>{test.malaria.toUpperCase()}</Badge>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2 mt-3">
                                        {test.testStatus !== 'completed' && (
                                            <Button size="sm" variant="primary" onClick={() => handleUpdateTestResult(test.id, 'all', 'negative')}>Update Results</Button>
                                        )}
                                        {test.testStatus === 'completed' && test.isSafe === true && (
                                            <Button size="sm" variant="success" onClick={() => handleApproveBloodBag(test.bagId)}>
                                                <CheckCircle size={16} className="me-1 d-inline" /> Approve
                                            </Button>
                                        )}
                                        {test.testStatus === 'completed' && test.isSafe === false && (
                                            <Button size="sm" variant="danger" onClick={() => handleDiscardBloodBag(test.bagId)}>
                                                <XCircle size={16} className="me-1 d-inline" /> Discard
                                            </Button>
                                        )}
                                        <Button size="sm" variant="light" className="border">View Full Report</Button>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            </Card>

            <div className="bg-danger bg-opacity-10 border border-danger p-3 rounded-3 d-flex gap-3">
                <AlertTriangle className="text-danger mt-1" size={24} />
                <div>
                    <h6 className="text-danger fw-bold">Safety Protocol</h6>
                    <small className="text-danger">
                        All blood donations must pass the following tests before being added to inventory: HIV, Hepatitis B,
                        Hepatitis C, Syphilis, and Malaria. Any positive result will automatically flag the bag as unsafe.
                    </small>
                </div>
            </div>
        </div>
    );
}
