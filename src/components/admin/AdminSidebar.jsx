import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FlaskConical, Users, Tent, UserCog, FileText, LogOut, Droplet, Store, UserPlus, X } from 'lucide-react';

export default function AdminSidebar({ isOpen, toggleSidebar }) {
    const location = useLocation();

    const navItems = [
        { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
        { path: "/admin/inventory", label: "Inventory", icon: Package },
        { path: "/admin/testing", label: "Testing", icon: FlaskConical },
        { path: "/admin/donors", label: "Donors", icon: Users },
        { path: "/admin/camp", label: "Camps", icon: Tent },
        { path: "/admin/users", label: "Users", icon: UserCog },
        { path: "/donor-register", label: "Register Donor", icon: UserPlus }, // Quick link
        { path: "/admin/reports", label: "Reports", icon: FileText },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ zIndex: 1035 }}
                onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <div
                className={`d-flex flex-column flex-shrink-0 bg-dark text-white vh-100 position-fixed transition-all sidebar-menu ${isOpen ? 'show-sidebar' : ''}`}
                style={{
                    width: '280px',
                    zIndex: 1040,
                    left: 0,
                    top: 0,
                }}
            >
                <div className="d-flex align-items-center justify-content-between p-4 border-bottom border-light border-opacity-10">
                    <div className="d-flex align-items-center">
                        <div className="bg-danger rounded-circle p-2 me-3 d-flex align-items-center justify-content-center">
                            <Droplet fill="white" size={24} className="text-white" />
                        </div>
                        <div>
                            <h5 className="fw-bold mb-0">Blood Bank</h5>
                            <small className="text-white-50">Admin Portal</small>
                        </div>
                    </div>
                    <button className="btn btn-link text-white d-md-none p-0" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <div className="p-3 overflow-auto flex-grow-1">
                    <small className="text-uppercase text-white-50 fw-bold px-3 mb-2 d-block" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Menu</small>
                    <Nav className="flex-column gap-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                            return (
                                <Nav.Item key={item.path}>
                                    <Nav.Link
                                        as={Link}
                                        to={item.path}
                                        onClick={() => window.innerWidth < 768 && toggleSidebar()}
                                        className={`d-flex align-items-center gap-3 px-3 py-3 rounded-3 transition-all ${isActive
                                            ? 'bg-danger text-white shadow'
                                            : 'text-white-50 hover-bg-light-opacity'
                                            }`}
                                        style={{ transition: 'all 0.2s ease' }}
                                    >
                                        <item.icon size={20} className={isActive ? 'text-white' : 'text-white-50'} />
                                        <span className="fw-medium">{item.label}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                </div>

                <div className="p-4 border-top border-light border-opacity-10">
                    <Link to="/login" className="d-flex align-items-center gap-3 text-white-50 text-decoration-none hover-text-white transition-all">
                        <LogOut size={20} />
                        <span className="fw-medium">Sign Out</span>
                    </Link>
                </div>
            </div>

            <style>{`
        .sidebar-menu {
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .sidebar-menu.show-sidebar {
          transform: translateX(0);
        }
        @media (min-width: 768px) {
          .sidebar-menu {
            transform: translateX(0) !important;
          }
        }
      `}</style>
        </>
    );
}
