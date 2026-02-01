import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Heart, Activity } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      hospital: "City Hospital",
      message: "Thank you so much for your donation! Your blood helped save my life during a critical surgery. I am forever grateful.",
      bloodGroup: "O+"
    },
    {
      id: 2,
      name: "Michael Chen",
      hospital: "Regional Hospital",
      message: "Your generous donation helped me during my emergency treatment. Thank you for being a hero!",
      bloodGroup: "O+"
    },
    {
      id: 3,
      name: "Emily Davis",
      hospital: "Community Hospital",
      message: "Words cannot express my gratitude. Your selfless act gave me a second chance at life.",
      bloodGroup: "O+"
    }
  ];

  return (
    <div className="py-2">
      <h4 className="fw-bold mb-4">Reviews from Recipients</h4>
      <Row className="g-4">
        {reviews.map((r) => (
          <Col md={6} lg={4} key={r.id}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-circle text-danger">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <Badge bg="light" text="dark" className="border fw-normal">
                    {r.hospital}
                  </Badge>
                </div>

                <div className="mb-3 flex-grow-1">
                  <h5 className="fw-bold mb-1">{r.name}</h5>
                  <p className="text-muted small fst-italic">"{r.message}"</p>
                </div>

                <div className="pt-3 border-top d-flex align-items-center gap-2">
                  <Activity size={16} className="text-danger" />
                  <span className="small text-muted">Recipient Blood Group: <span className="fw-bold text-dark">{r.bloodGroup}</span></span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
