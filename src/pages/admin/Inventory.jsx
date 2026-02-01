import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Alert } from 'react-bootstrap';
import { Plus, Edit, Trash2, AlertTriangle, Droplet } from 'lucide-react';

export default function Inventory() {
  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Blood Inventory Management</h2>
        <Button variant="danger" className="d-flex align-items-center gap-2 fw-medium px-4" onClick={() => alert('Add Stock modal will open here')}>
          <Plus size={20} /> Add Stock
        </Button>
      </div>

      <Card className="border-0 shadow-sm mb-4">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="py-3 ps-4">ID</th>
                <th className="py-3">Blood Group</th>
                <th className="py-3">Units</th>
                <th className="py-3">Location</th>
                <th className="py-3">Expiry Date</th>
                <th className="py-3">Status</th>
                <th className="py-3 pe-4 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4 fw-medium">INV001</td>
                <td><Badge bg="danger" className="text-white p-2">A+</Badge></td>
                <td className="fw-bold fs-5">45</td>
                <td className="text-muted">Central Bank</td>
                <td>2025-01-15</td>
                <td><Badge bg="success" bg-opacity="10" className="text-success bg-opacity-10 px-3 py-2">GOOD</Badge></td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-2 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-medium">INV002</td>
                <td><Badge bg="danger" className="text-white p-2">O-</Badge></td>
                <td className="fw-bold fs-5">18</td>
                <td className="text-muted">Central Bank</td>
                <td>2024-12-22</td>
                <td><Badge bg="warning" text="dark" className="bg-opacity-25 px-3 py-2">EXPIRING</Badge></td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-2 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-medium">INV003</td>
                <td><Badge bg="danger" className="text-white p-2">B+</Badge></td>
                <td className="fw-bold fs-5">38</td>
                <td className="text-muted">North Center</td>
                <td>2025-02-10</td>
                <td><Badge bg="success" bg-opacity="10" className="text-success bg-opacity-10 px-3 py-2">GOOD</Badge></td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-2 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-medium">INV004</td>
                <td><Badge bg="danger" className="text-white p-2">AB+</Badge></td>
                <td className="fw-bold fs-5">15</td>
                <td className="text-muted">South Center</td>
                <td>2024-12-18</td>
                <td><Badge bg="warning" text="dark" className="bg-opacity-25 px-3 py-2">EXPIRING</Badge></td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-2 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>

      <Alert variant="warning" className="border-0 shadow-sm">
        <div className="d-flex gap-3">
          <AlertTriangle size={24} className="text-warning mt-1" />
          <div>
            <h5 className="alert-heading fw-bold">Inventory Alerts</h5>
            <ul className="mb-0 ps-3">
              <li>2 units of O- blood expiring in 5 days</li>
              <li>1 unit of AB+ blood expiring in 1 day</li>
              <li>Low stock alert: AB- blood (5 units remaining)</li>
            </ul>
          </div>
        </div>
      </Alert>
    </Container>
  );
}
