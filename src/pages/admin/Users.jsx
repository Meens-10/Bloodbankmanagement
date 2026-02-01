import React from 'react';
import { Container, Card, Button, Table, Badge } from 'react-bootstrap';
import { Plus, Edit, Trash2, Ban, CheckCircle } from 'lucide-react';

export default function Users() {
  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">User Account Management</h2>
        <Button variant="primary" className="d-flex align-items-center gap-2 fw-medium px-4" onClick={() => alert('Add User modal will open here')}>
          <Plus size={20} /> Add User
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="py-3 ps-4">User ID</th>
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
                <th className="py-3">Hospital</th>
                <th className="py-3">Status</th>
                <th className="py-3">Last Login</th>
                <th className="py-3 pe-4 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4 text-muted">USR001</td>
                <td className="fw-medium">Dr. Jane Smith</td>
                <td>jane.smith@cityhospital.com</td>
                <td><Badge bg="info" text="dark" className="bg-opacity-25 border border-info px-2">HOSPITAL</Badge></td>
                <td>City Hospital</td>
                <td><Badge bg="success" className="bg-opacity-10 text-success px-2 border border-success">ACTIVE</Badge></td>
                <td className="text-muted">2024-12-16</td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-1 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="me-1 text-warning" title="Disable"><Ban size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>

              <tr>
                <td className="ps-4 text-muted">USR002</td>
                <td className="fw-medium">Robert Johnson</td>
                <td>robert.j@bloodbank.org</td>
                <td><Badge bg="secondary" className="bg-opacity-25 text-dark border px-2">STAFF</Badge></td>
                <td className="text-muted">-</td>
                <td><Badge bg="success" className="bg-opacity-10 text-success px-2 border border-success">ACTIVE</Badge></td>
                <td className="text-muted">2024-12-17</td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-1 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="me-1 text-warning" title="Disable"><Ban size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>

              <tr>
                <td className="ps-4 text-muted">USR003</td>
                <td className="fw-medium">Admin User</td>
                <td>admin@bloodbank.org</td>
                <td><Badge bg="danger" className="px-2">ADMIN</Badge></td>
                <td className="text-muted">-</td>
                <td><Badge bg="success" className="bg-opacity-10 text-success px-2 border border-success">ACTIVE</Badge></td>
                <td className="text-muted">2024-12-17</td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-1 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="me-1 text-warning" title="Disable"><Ban size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>

              <tr>
                <td className="ps-4 text-muted">USR004</td>
                <td className="fw-medium">Dr. Michael Chen</td>
                <td>michael.chen@regionalhospital.com</td>
                <td><Badge bg="info" text="dark" className="bg-opacity-25 border border-info px-2">HOSPITAL</Badge></td>
                <td>Regional Hospital</td>
                <td><Badge bg="secondary" className="bg-opacity-25 text-secondary px-2 border">INACTIVE</Badge></td>
                <td className="text-muted">2024-11-25</td>
                <td className="pe-4 text-end">
                  <Button variant="light" size="sm" className="me-1 text-primary" title="Edit"><Edit size={16} /></Button>
                  <Button variant="light" size="sm" className="me-1 text-success" title="Enable"><CheckCircle size={16} /></Button>
                  <Button variant="light" size="sm" className="text-danger" title="Delete"><Trash2 size={16} /></Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
}
