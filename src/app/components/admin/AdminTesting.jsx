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
}) {

    const getBadgeVariant = (status) => {
        const s = (status || '').toLowerCase();
        if (s === 'completed' || s === 'negative' || s === 'safe') return 'success';
        if (s === 'testing' || s === 'pending') return 'warning';
        if (s === 'positive' || s === 'unsafe') return 'danger';
        return 'secondary';
    };

    const getStatusText = (status) => (status || 'PENDING').toUpperCase();

    return (
        <div className="space-y-6">
            <Card className="border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-4">Blood Testing & Quality Control</h5>
                <div className="d-flex flex-column gap-4">
                    {(bloodTests || []).map((test) => {
                        const isSafe = test.result === 'PASSED';
                        const isSafetyChecked = test.testStatus === 'completed' || test.result;

                        return (
                            <div key={test.id} className="border rounded-4 p-4 shadow-sm bg-white">
                                <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                                    <Badge bg={getBadgeVariant(test.testStatus || 'testing')} className="px-3 py-2 rounded-2">
                                        {getStatusText(test.testStatus || 'testing')}
                                    </Badge>
                                    {isSafetyChecked && (
                                        <Badge bg={isSafe ? 'success' : 'danger'} className="px-3 py-2 rounded-2">
                                            {isSafe ? 'SAFE' : 'UNSAFE'}
                                        </Badge>
                                    )}
                                </div>

                                <Row className="mb-4 g-4 text-start">
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Bag ID</small>
                                        <h6 className="fw-bold mb-0">{test.bloodBagId}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Donor</small>
                                        <h6 className="mb-0">{test.donorName || 'John Doe'}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Blood Group</small>
                                        <h6 className="mb-0">{test.bloodGroup}</h6>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small className="text-muted d-block mb-1 text-uppercase fw-bold letter-spacing-1" style={{ fontSize: '11px' }}>Collection Date</small>
                                        <h6 className="mb-0">{test.collectionDate || '2024-03-15'}</h6>
                                    </Col>
                                </Row>

                                <Row className="g-2 mb-4">
                                    {[
                                        { label: 'HIV', value: test.hiv },
                                        { label: 'Hep B', value: test.hbv },
                                        { label: 'Hep C', value: test.hcv },
                                        { label: 'Syphilis', value: test.syphilis },
                                        { label: 'Malaria', value: test.malaria }
                                    ].map((t, idx) => (
                                        <Col key={idx} className="flex-grow-1">
                                            <div className="border rounded-3 p-3 text-center bg-light bg-opacity-50">
                                                <small className="d-block text-muted mb-2 fw-bold" style={{ fontSize: '11px' }}>{t.label}</small>
                                                <Badge
                                                    bg={t.value === undefined ? 'warning' : (t.value ? 'danger' : 'success')}
                                                    className="w-100 py-2 rounded-2"
                                                >
                                                    {t.value === undefined ? 'PENDING' : (t.value ? 'POSITIVE' : 'NEGATIVE')}
                                                </Badge>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>

                                <div className="d-flex flex-wrap gap-2">
                                    {test.testStatus !== 'completed' ? (
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            className="px-4 py-2 rounded-3 fw-bold"
                                            onClick={() => handleUpdateTestResult(test.bloodBagId, {
                                                hiv: false, hbv: false, hcv: false, syphilis: false, malaria: false
                                            })}
                                        >
                                            Update Results
                                        </Button>
                                    ) : (
                                        <>
                                            {isSafe ? (
                                                <Button
                                                    size="sm"
                                                    variant="success"
                                                    className="px-4 py-2 rounded-3 fw-bold d-flex align-items-center gap-2"
                                                    onClick={() => handleApproveBloodBag(test.bloodBagId)}
                                                >
                                                    <CheckCircle size={16} /> Approve
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    className="px-4 py-2 rounded-3 fw-bold d-flex align-items-center gap-2"
                                                    onClick={() => handleDiscardBloodBag(test.bloodBagId)}
                                                >
                                                    <XCircle size={16} /> Discard
                                                </Button>
                                            )}
                                        </>
                                    )}
                                    <Button size="sm" variant="light" className="px-4 py-2 rounded-3 fw-bold border">View Full Report</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            <div className="bg-danger bg-opacity-10 border border-danger p-4 rounded-4 d-flex gap-3 shadow-sm">
                <AlertTriangle className="text-danger flex-shrink-0" size={24} />
                <div>
                    <h6 className="text-danger fw-bold mb-1">Safety Protocol</h6>
                    <p className="text-danger small mb-0 opacity-75">
                        All blood donations must pass the following tests before being added to inventory: HIV, Hepatitis B,
                        Hepatitis C, Syphilis, and Malaria. Any positive result will automatically flag the bag as unsafe and mark for discard.
                    </p>
                </div>
            </div>
        </div>
    );
}
