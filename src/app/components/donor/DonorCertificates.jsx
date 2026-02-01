import { Award, Download } from 'lucide-react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { showToast } from '../../utils/swal';

export function DonorCertificates() {
    const certificates = [
        {
            id: 'BBM2024091501',
            date: '2024-09-15',
            bloodGroup: 'O+',
            units: '450ml',
            location: 'Central Blood Bank'
        },
        {
            id: 'BBM2024061002',
            date: '2024-06-10',
            bloodGroup: 'O+',
            units: '450ml',
            location: 'City Hospital'
        },
        {
            id: 'BBM2024030503',
            date: '2024-03-05',
            bloodGroup: 'O+',
            units: '450ml',
            location: 'Community Camp'
        }
    ];

    return (
        <div>
            <h5 className="fw-bold mb-4">Donation Certificates</h5>

            <Row className="g-4">
                {certificates.map(cert => (
                    <Col md={6} key={cert.id}>
                        <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
                            <Card.Body className="p-4 position-relative">
                                <div className="position-absolute top-0 end-0 bg-danger bg-opacity-10 rounded-bottom-start-pill" style={{ width: '80px', height: '80px' }}></div>

                                <div className="d-flex justify-content-between align-items-start mb-4 position-relative">
                                    <div className="bg-danger bg-opacity-10 p-2 rounded">
                                        <Award className="text-danger" size={24} />
                                    </div>
                                    <small className="text-muted">#{cert.id}</small>
                                </div>

                                <h6 className="fw-bold mb-3">Blood Donation Certificate</h6>

                                <div className="small text-secondary space-y-2 mb-4">
                                    <div className="d-flex justify-content-between">
                                        <span>Donation Date:</span>
                                        <span className="text-dark fw-medium">{cert.date}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Blood Group:</span>
                                        <span className="text-dark fw-medium">{cert.bloodGroup}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Units:</span>
                                        <span className="text-dark fw-medium">{cert.units}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Location:</span>
                                        <span className="text-dark fw-medium">{cert.location}</span>
                                    </div>
                                </div>

                                <Button
                                    variant="danger"
                                    className="w-100 d-flex align-items-center justify-content-center gap-2"
                                    onClick={() => {
                                        const element = document.createElement("a");
                                        const file = new Blob([`
                                            BLOOD DONATION CERTIFICATE
                                            ---------------------------
                                            Certificate ID: ${cert.id}
                                            Date: ${cert.date}
                                            Blood Group: ${cert.bloodGroup}
                                            Units: ${cert.units}
                                            Location: ${cert.location}

                                            Thank you for your life-saving contribution!
                                        `], { type: 'text/plain' });
                                        element.href = URL.createObjectURL(file);
                                        element.download = `Certificate_${cert.id}.txt`;
                                        document.body.appendChild(element);
                                        element.click();
                                        showToast('Certificate download started!');
                                    }}
                                >
                                    <Download size={16} /> Download Certificate
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
