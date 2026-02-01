import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import { Card, Button, Badge, Row, Col, Form } from 'react-bootstrap';

export function AdminCamps({ camps, handleSubmitCamp, newCamp, setNewCamp }) {

    const getBadgeVariant = (status) => {
        if (status === 'completed') return 'success';
        if (status === 'ongoing') return 'info';
        if (status === 'scheduled') return 'primary';
        return 'secondary';
    };

    return (
        <div className="space-y-6">

            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="mb-4">Organize New Camp</h5>
                <Form onSubmit={handleSubmitCamp}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Camp Name *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Community Drive"
                                    value={newCamp.name}
                                    onChange={e => setNewCamp({ ...newCamp, name: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Location *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. City Center"
                                    value={newCamp.location}
                                    onChange={e => setNewCamp({ ...newCamp, location: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Date *</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={newCamp.date}
                                    onChange={e => setNewCamp({ ...newCamp, date: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Time *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="09:00 AM - 05:00 PM"
                                    value={newCamp.time}
                                    onChange={e => setNewCamp({ ...newCamp, time: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Expected Donors *</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="100"
                                    value={newCamp.expectedDonors}
                                    onChange={e => setNewCamp({ ...newCamp, expectedDonors: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" variant="danger" className="mt-4 px-4">Create Camp</Button>
                </Form>
            </Card>

            <Card className="border-0 shadow-sm rounded-4 p-4">
                <h5 className="mb-4">Blood Donation Camps</h5>
                <div className="d-flex flex-column gap-3">
                    {camps.map(camp => (
                        <div key={camp.id} className="border rounded-3 p-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <Badge bg={getBadgeVariant(camp.status)}>{camp.status.toUpperCase()}</Badge>
                                <small className="text-muted">{camp.id}</small>
                            </div>
                            <h5 className="mb-3">{camp.name}</h5>

                            <Row className="g-3 mb-3">
                                <Col xs={6} md={3}>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <MapPin size={16} /> <small>Location</small>
                                    </div>
                                    <span className="d-block text-dark">{camp.location}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <Calendar size={16} /> <small>Date</small>
                                    </div>
                                    <span className="d-block text-dark">{camp.date}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <Clock size={16} /> <small>Time</small>
                                    </div>
                                    <span className="d-block text-dark">{camp.time}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <Users size={16} /> <small>Donors</small>
                                    </div>
                                    <span className="d-block text-dark">{camp.actualDonors} / {camp.expectedDonors}</span>
                                </Col>
                            </Row>

                            <div className="d-flex gap-2">
                                <Button variant="light" size="sm" className="border">View Details</Button>
                                {camp.status === 'scheduled' && (
                                    <>
                                        <Button variant="outline-primary" size="sm">Edit</Button>
                                        <Button variant="outline-danger" size="sm">Cancel</Button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
