import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FileText, Download, Filter, BarChart2, PieChart, TrendingUp, Calendar } from 'lucide-react';

export default function Reports() {
   return (
      <Container fluid className="py-4">
         <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">Analytics & Reports</h2>
            <div className="d-flex gap-2">
               <Button variant="outline-secondary" className="d-flex align-items-center gap-2">
                  <Filter size={20} /> Filter
               </Button>
               <Button variant="outline-primary" className="d-flex align-items-center gap-2">
                  <Download size={20} /> Export All
               </Button>
            </div>
         </div>

         <Row className="g-4 mb-4">
            <Col md={4}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4 d-flex align-items-center">
                     <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <BarChart2 size={24} className="text-primary" />
                     </div>
                     <div>
                        <small className="text-muted fw-bold d-block mb-1">Total Donations</small>
                        <h3 className="fw-bold mb-0">1,248</h3>
                        <small className="text-success fw-medium"><TrendingUp size={14} /> +12% from last month</small>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col md={4}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4 d-flex align-items-center">
                     <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                        <PieChart size={24} className="text-success" />
                     </div>
                     <div>
                        <small className="text-muted fw-bold d-block mb-1">Blood Bags in Stock</small>
                        <h3 className="fw-bold mb-0">450</h3>
                        <small className="text-muted">Across all groups</small>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col md={4}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4 d-flex align-items-center">
                     <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                        <Calendar size={24} className="text-warning" />
                     </div>
                     <div>
                        <small className="text-muted fw-bold d-block mb-1">Camps Organized</small>
                        <h3 className="fw-bold mb-0">15</h3>
                        <small className="text-muted">This year</small>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         <Row className="mb-4">
            <Col>
               <h4 className="fw-bold mb-3">Available Reports</h4>
            </Col>
         </Row>

         <Row className="g-4">
            <Col md={6}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                     <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-2">
                           <FileText size={20} className="text-primary" />
                           <h5 className="fw-bold mb-0">Inventory Status Report</h5>
                        </div>
                        <Badge bg="info" className="bg-opacity-10 text-info border border-info px-2">WEEKLY</Badge>
                     </div>
                     <p className="text-muted mb-4">
                        Detailed breakdown of current blood stock, expirations, and shortages across all blood banks.
                     </p>
                     <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> PDF
                        </Button>
                        <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> Excel
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

            <Col md={6}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                     <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-2">
                           <FileText size={20} className="text-primary" />
                           <h5 className="fw-bold mb-0">Donor Demographics</h5>
                        </div>
                        <Badge bg="secondary" className="bg-opacity-10 text-secondary border px-2">MONTHLY</Badge>
                     </div>
                     <p className="text-muted mb-4">
                        Analysis of donor age, gender, location, and frequency of donations.
                     </p>
                     <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> PDF
                        </Button>
                        <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> Excel
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

            <Col md={6}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                     <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-2">
                           <FileText size={20} className="text-primary" />
                           <h5 className="fw-bold mb-0">Camp Performance</h5>
                        </div>
                        <Badge bg="secondary" className="bg-opacity-10 text-secondary border px-2">MONTHLY</Badge>
                     </div>
                     <p className="text-muted mb-4">
                        Overview of camps organized, donor turnout, and blood units collected per camp.
                     </p>
                     <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> PDF
                        </Button>
                        <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> Excel
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

            <Col md={6}>
               <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                     <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-2">
                           <FileText size={20} className="text-primary" />
                           <h5 className="fw-bold mb-0">Hospital Requests</h5>
                        </div>
                        <Badge bg="danger" className="bg-opacity-10 text-danger border border-danger px-2">DAILY</Badge>
                     </div>
                     <p className="text-muted mb-4">
                        Log of all blood requests from hospitals, including fulfilled and pending requests.
                     </p>
                     <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> PDF
                        </Button>
                        <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
                           <Download size={16} /> Excel
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         <Row className="mt-5">
            <Col>
               <h4 className="fw-bold mb-3">Quick Actions</h4>
               <div className="d-flex gap-3">
                  <Button variant="light" className="border shadow-sm">Generate Custom Report</Button>
                  <Button variant="light" className="border shadow-sm">Schedule Email Reports</Button>
                  <Button variant="light" className="border shadow-sm">View Archived Reports</Button>
               </div>
            </Col>
         </Row>
      </Container>
   );
}