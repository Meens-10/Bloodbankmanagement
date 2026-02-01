import jsPDF from "jspdf";
import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { Award, Download, Calendar, MapPin, Droplet } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      id: "BBM2024091501",
      date: "2024-09-15",
      bloodGroup: "O+",
      units: "450ml",
      location: "Central Blood Bank"
    },
    {
      id: "BBM2024061002",
      date: "2024-06-10",
      bloodGroup: "A+",
      units: "450ml",
      location: "City Hospital"
    },
    {
      id: "BBM2024030503",
      date: "2024-03-05",
      bloodGroup: "B+",
      units: "350ml",
      location: "Community Camp"
    },
    {
      id: "BBM2023121204",
      date: "2023-12-12",
      bloodGroup: "O-",
      units: "450ml",
      location: "Regional Blood Center"
    },
    {
      id: "BBM2023110505",
      date: "2023-11-05",
      bloodGroup: "AB+",
      units: "350ml",
      location: "Metro Medical Camp"
    }
  ];


  const downloadCertificate = (cert) => {
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Blood Donation Certificate", 105, 30, { align: "center" });

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");

    pdf.text(`Certificate ID: ${cert.id}`, 20, 50);
    pdf.text(`Donation Date: ${cert.date}`, 20, 65);
    pdf.text(`Blood Group: ${cert.bloodGroup}`, 20, 80);
    pdf.text(`Units Donated: ${cert.units}`, 20, 95);
    pdf.text(`Location: ${cert.location}`, 20, 110);

    pdf.text(
      "Thank you for your noble contribution in saving lives.",
      20,
      140
    );

    pdf.setFontSize(10);
    pdf.text("Issued by Blood Bank Authority", 105, 170, { align: "center" });

    pdf.save(`Blood_Donation_Certificate_${cert.id}.pdf`);
  };

  return (
    <div className="py-2">
      <Row className="g-4">
        {certificates.map((cert) => (
          <Col md={6} xl={4} key={cert.id}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                    <Award size={28} />
                  </div>
                  <Badge bg="light" text="secondary" className="border fw-normal">
                    #{cert.id}
                  </Badge>
                </div>

                <h5 className="fw-bold mb-3">Blood Donation Certificate</h5>

                <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <Calendar size={16} className="text-secondary" />
                    <span>Date: <span className="fw-bold text-dark">{cert.date}</span></span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <Droplet size={16} className="text-secondary" />
                    <span>Blood Group: <span className="fw-bold text-dark">{cert.bloodGroup}</span> ({cert.units})</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <MapPin size={16} className="text-secondary" />
                    <span>{cert.location}</span>
                  </div>
                </div>

                <Button variant="outline-primary" className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2" onClick={() => downloadCertificate(cert)}>
                  <Download size={18} /> Download Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
