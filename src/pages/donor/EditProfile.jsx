import { useState } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import { Camera, Save, X } from "lucide-react";

export default function EditProfile({ donor, onSave, onCancel }) {
  const [form, setForm] = useState({ ...donor });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({
        ...form,
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

    onSave({
      ...form,
      lastDonation: today
    });
  };

  return (
    <Container className="py-2">
      <Card className="border-0 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
        <Card.Header className="bg-white py-3">
          <h4 className="mb-0 fw-bold">Edit Profile</h4>
          <p className="text-muted small mb-0">Update your donor information</p>
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="g-4">
            {/* Photo Upload Section */}
            <Col md={4} className="text-center border-end-md">
              <div className="d-flex flex-column align-items-center gap-3">
                <div className="position-relative">
                  <div className="rounded-circle overflow-hidden border shadow-sm" style={{ width: '150px', height: '150px' }}>
                    <img
                      src={form.photo}
                      alt="Profile"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>

                <div>
                  <Form.Label htmlFor="photo-upload" className="btn btn-outline-primary btn-sm rounded-pill mb-0">
                    <Camera size={16} className="me-2" /> Change Photo
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    hidden
                    onChange={handlePhoto}
                  />
                  <div className="text-muted small mt-2">JPG or PNG • Max 5MB</div>
                </div>
              </div>
            </Col>

            {/* Form Fields Section */}
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-flex gap-2 justify-content-end pt-3 border-top">
                  <Button variant="light" onClick={onCancel} className="d-flex align-items-center gap-2">
                    <X size={18} /> Cancel
                  </Button>
                  <Button variant="danger" onClick={handleSave} className="d-flex align-items-center gap-2 px-4 fw-bold">
                    <Save size={18} /> Save Changes
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
