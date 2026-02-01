
import React from 'react';
import { User, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Button, Dropdown } from 'react-bootstrap';

const AdminNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login');

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-2 border-bottom">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center gap-3">
            <Button
              variant="link"
              className="text-dark p-0 d-md-none"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </Button>
            <h5 className="mb-0 fw-bold text-dark">Blood Bank Admin</h5>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" className="d-flex align-items-center gap-2 border-0 bg-transparent p-0 after-none" id="user-dropdown">
                <div className="text-end lh-1 d-none d-md-block me-1">
                  <div className="fw-bold small text-dark">Admin User</div>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>Administrator</small>
                </div>
                <div className="bg-danger bg-opacity-10 p-2 rounded-circle">
                  <User size={20} className="text-danger" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="shadow border-0 mt-2">
                <Dropdown.Item onClick={handleLogout} className="text-danger fw-medium">
                  <LogOut size={16} className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
export default AdminNavbar;