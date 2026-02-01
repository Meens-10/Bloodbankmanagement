import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { AlertTriangle } from 'lucide-react';

export default function HospitalNewRequest() {
  return (
    <div className="py-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white p-4 mx-2 border-bottom-0">
          <h3 className="fw-bold mb-0">Submit Blood Request</h3>
          <p className="text-muted mb-0">Enter patient and requirement details</p>
        </Card.Header>
        <Card.Body className="p-4 mx-2">
          <Form>
            <Row className="g-3 mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Blood Group <span className="text-danger">*</span></Form.Label>
                  <Form.Select required>
                    <option value="">Select</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <option key={g} value={g}>{g}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Units Required <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="number" placeholder="e.g. 2" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Urgency Level <span className="text-danger">*</span></Form.Label>
                  <Form.Select required>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Patient Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Full Name" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Patient Age <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="number" placeholder="Age" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Required Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label>Medical Reason / Description <span className="text-danger">*</span></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the medical reason for this request..." required />
            </Form.Group>

            <Alert variant="warning" className="d-flex align-items-center">
              <AlertTriangle className="me-2" size={20} />
              <div className="small">Please ensure all information is accurate. For critical requests, call emergency hotline: <strong>1-800-BLOOD-911</strong></div>
            </Alert>

            <div className="d-flex gap-2 pt-2">
              <Button variant="danger" size="lg" type="submit" className="px-5">Submit Request</Button>
              <Button variant="outline-secondary" size="lg" type="reset">Reset</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
