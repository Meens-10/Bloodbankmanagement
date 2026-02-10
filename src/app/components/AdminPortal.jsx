import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import {
    BarChart3,
    Users,
    ClipboardList,
    Settings,
    LayoutDashboard,
    FlaskConical,
    Tent,
    FileText,
    Phone
} from 'lucide-react';
import { Container, Row, Col, Nav, Tab, Button, Badge } from 'react-bootstrap';

// Sub-components
import { AdminDashboard } from './admin/AdminDashboard';
import { AdminInventory } from './admin/AdminInventory';
import { AdminTesting } from './admin/AdminTesting';
import { AdminDonors } from './admin/AdminDonors';
import { AdminCamps } from './admin/AdminCamps';
import { AdminUsers } from './admin/AdminUsers';
import { AdminReports } from './admin/AdminReports';
import { AdminRequests } from './admin/AdminRequests';

import { useState } from 'react';
import Swal, { showSuccess, showConfirm, showToast } from '../utils/swal';

export function AdminPortal() {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');

    const {
        inventory,
        hospitalRequests,
        bloodTests,
        addInventory,
        deleteInventory,
        updateInventory,
        updateRequestStatus,
        updateTestResult,
        discardBloodBag
    } = useData();

    const [donorVerifications, setDonorVerifications] = useState([
        { id: 'DON001', donorName: 'Alice Brown', bloodGroup: 'AB+', lastDonation: '2023-11-20', healthStatus: 'Good', status: 'pending' },
        { id: 'DON002', donorName: 'Bob Wilson', bloodGroup: 'O+', lastDonation: '2023-12-05', healthStatus: 'Low Iron', status: 'rejected' },
        { id: 'DON003', donorName: 'Charlie Davis', bloodGroup: 'A-', lastDonation: '2024-01-15', healthStatus: 'Good', status: 'approved' },
    ]);

    const [camps, setCamps] = useState([
        { id: 'CAMP001', name: 'City Center Drive', location: 'City Mall', date: '2024-03-20', time: '09:00 - 17:00', expectedDonors: 150, actualDonors: 0, status: 'scheduled' },
        { id: 'CAMP002', name: 'University Camp', location: 'State University', date: '2024-03-10', time: '10:00 - 16:00', expectedDonors: 200, actualDonors: 185, status: 'completed' },
    ]);

    const [systemUsers, setSystemUsers] = useState([
        { id: 'USR001', name: 'Dr. Sarah Connor', email: 'sarah@bloodbank.org', role: 'admin', status: 'active', lastLogin: '2024-03-18 09:30' },
        { id: 'USR002', name: 'James Wright', email: 'james@cityhospital.com', role: 'hospital', hospital: 'City Hospital', status: 'active', lastLogin: '2024-03-17 14:20' },
        { id: 'USR003', name: 'Emily Chen', email: 'emily@bloodbank.org', role: 'staff', status: 'active', lastLogin: '2024-03-18 08:45' },
    ]);

    const [stats] = useState({
        totalDonors: 1250,
        totalDonations: 3420,
        pendingTests: 15,
        inventoryUnits: 450,
        activeDonors: 890,
        upcomingCamps: 3,
        discardedBags: 24,
        pendingRequests: 5
    });

    const [showAddStockForm, setShowAddStockForm] = useState(false);
    const [newStock, setNewStock] = useState({ bloodGroup: '', units: '', location: '', expiryDate: '' });

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'staff', hospital: '' });

    const [newCamp, setNewCamp] = useState({ name: '', location: '', date: '', time: '', expectedDonors: '' });

    // --- HANDLERS ---
    const handleSubmitStock = (e) => {
        e.preventDefault();
        const stockItem = {
            id: `INV${Math.floor(Math.random() * 1000)}`,
            status: 'good',
            ...newStock,
            units: parseInt(newStock.units)
        };
        addInventory(stockItem);
        setShowAddStockForm(false);
        setNewStock({ bloodGroup: '', units: '', location: '', expiryDate: '' });
    };

    const handleUpdateTestResult = (testId, testType, result) => {
        updateTestResult(testId, result);
    };

    const handleApproveBloodBag = (bagId) => {
        showSuccess('Approved', `Blood bag ${bagId} approved and added to inventory.`);
    };

    const handleDiscardBloodBag = async (bagId) => {
        const result = await showConfirm('Discard Blood Bag', `Are you sure you want to discard blood bag ${bagId}?`);
        if (result.isConfirmed) {
            discardBloodBag(bagId);
            showSuccess('Discarded', `Blood bag ${bagId} discarded safely and removed from testing list.`);
        }
    };

    const handleDeleteInventory = async (id) => {
        const result = await showConfirm('Delete Item', 'Are you sure you want to delete this inventory item?');
        if (result.isConfirmed) {
            deleteInventory(id);
            showToast('Item removed from inventory.');
        }
    };

    const handleEditInventory = async (id) => {
        const item = inventory.find(i => i.id === id);
        const { value: newUnits } = await Swal.fire({
            title: `Update Units for ${item.bloodGroup}`,
            input: 'number',
            inputLabel: 'Enter new unit count',
            inputValue: item.units,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        });

        if (newUnits !== undefined && newUnits !== null) {
            updateInventory(id, { units: parseInt(newUnits) || item.units });
            showToast('Inventory updated!');
        }
    };

    const handleVerifyDonor = (id, approved) => {
        setDonorVerifications(donors => donors.map(d =>
            d.id === id ? { ...d, status: approved ? 'approved' : 'rejected' } : d
        ));
    };

    const handleSubmitCamp = (e) => {
        e.preventDefault();
        const camp = {
            id: `CAMP${Math.floor(Math.random() * 1000)}`,
            status: 'scheduled',
            actualDonors: 0,
            ...newCamp
        };
        setCamps([...camps, camp]);
        setNewCamp({ name: '', location: '', date: '', time: '', expectedDonors: '' });
        showSuccess('Success', 'Camp created successfully!');
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        const user = {
            id: `USR${Math.floor(Math.random() * 1000)}`,
            status: 'active',
            lastLogin: '-',
            ...newUser
        };
        setSystemUsers([...systemUsers, user]);
        setShowAddUserForm(false);
        setNewUser({ name: '', email: '', role: 'staff', hospital: '' });
    };

    const handleToggleUserStatus = (userId, currentStatus) => {
        setSystemUsers(users => users.map(u =>
            u.id === userId ? { ...u, status: currentStatus === 'active' ? 'inactive' : 'active' } : u
        ));
    };

    const handleDeleteUser = async (userId) => {
        const result = await showConfirm('Delete User', 'Are you sure you want to delete this user?');
        if (result.isConfirmed) {
            setSystemUsers(users => users.filter(u => u.id !== userId));
            showToast('User deleted.');
        }
    };

    const handleApproveRequest = (id, bloodGroup, units) => {
        updateRequestStatus(id, 'fulfilled');
    
        showSuccess('Request Approved', `Request ${id} approved. ${units} units of ${bloodGroup} dispatched.`);
    };

    const handleRejectRequest = async (id) => {
        const result = await showConfirm('Reject Request', 'Reject this request?');
        if (result.isConfirmed) {
            updateRequestStatus(id, 'rejected');
            showToast('Request rejected.');
        }
    };

    const getStatusColor = (status) => {
        // Helper for consistency if needed props down the line
        return status;
    };

    // --- RENDER ---
    return (
        <div className="d-flex min-vh-100 bg-light" style={{ marginTop: '0px' }}>

            <div className="d-none d-lg-block bg-white border-end" style={{ width: '260px', position: 'fixed', top: '73px', bottom: 0, overflowY: 'auto', zIndex: 1020 }}>
                <div className="p-3 border-bottom bg-light bg-opacity-50">
                    <h6 className="fw-bold text-secondary mb-0 text-uppercase small" style={{ letterSpacing: '1px' }}>Admin Menu</h6>
                </div>
                <div className="p-3">
                    <Nav className="flex-column gap-2">
                        {[
                            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
                            { id: 'inventory', icon: BarChart3, label: 'Inventory' },
                            { id: 'testing', icon: FlaskConical, label: 'Blood Testing' },
                            { id: 'donors', icon: Users, label: 'Donor Verification' },
                            { id: 'camps', icon: Tent, label: 'Donation Camps' },
                            { id: 'users', icon: Settings, label: 'User Management' },
                            { id: 'reports', icon: FileText, label: 'Reports' },
                            { id: 'requests', icon: Phone, label: 'Requests' },
                        ].map(item => (
                            <Nav.Link
                                key={item.id}
                                active={activeTab === item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-secondary ${activeTab === item.id ? 'bg-danger bg-opacity-10 text-danger fw-bold shadow-sm' : 'hover-bg-light'}`}
                                style={{
                                    cursor: 'pointer',
                                    border: activeTab === item.id ? '1px solid #FECACA' : '1px solid transparent'
                                }}
                            >
                                <item.icon size={18} />
                                <span className="small fw-bold">{item.label}</span>
                                {item.id === 'requests' && hospitalRequests.filter(r => r.status === 'pending').length > 0 && (
                                    <Badge bg="danger" pill className="ms-auto" style={{ fontSize: '10px' }}>
                                        {hospitalRequests.filter(r => r.status === 'pending').length}
                                    </Badge>
                                )}
                            </Nav.Link>
                        ))}
                    </Nav>
                </div>

            </div>


            <div className="flex-grow-1" style={{ marginLeft: '260px' }}> 
                <Container fluid className="p-4">

                    <div className="d-lg-none mb-4 d-flex justify-content-between align-items-center bg-white p-3 rounded-4 shadow-sm">
                        <h5 className="fw-bold text-danger mb-0">Admin Panel</h5>
                        <Badge bg="danger">ADMIN</Badge>
                    </div>

                    {activeTab === 'dashboard' && <AdminDashboard stats={stats} />}

                    {activeTab === 'inventory' && (
                        <AdminInventory
                            inventory={inventory}
                            showAddStockForm={showAddStockForm}
                            setShowAddStockForm={setShowAddStockForm}
                            newStock={newStock}
                            setNewStock={setNewStock}
                            handleSubmitStock={handleSubmitStock}
                            handleDeleteInventory={handleDeleteInventory}
                            handleEditInventory={handleEditInventory}
                        />
                    )}

                    {activeTab === 'testing' && (
                        <AdminTesting
                            bloodTests={bloodTests}
                            handleUpdateTestResult={handleUpdateTestResult}
                            handleApproveBloodBag={handleApproveBloodBag}
                            handleDiscardBloodBag={handleDiscardBloodBag}
                            getStatusColor={getStatusColor}
                        />
                    )}

                    {activeTab === 'donors' && (
                        <AdminDonors
                            donorVerifications={donorVerifications}
                            handleVerifyDonor={handleVerifyDonor}
                        />
                    )}

                    {activeTab === 'camps' && (
                        <AdminCamps
                            camps={camps}
                            newCamp={newCamp}
                            setNewCamp={setNewCamp}
                            handleSubmitCamp={handleSubmitCamp}
                        />
                    )}

                    {activeTab === 'users' && (
                        <AdminUsers
                            systemUsers={systemUsers}
                            showAddUserForm={showAddUserForm}
                            setShowAddUserForm={setShowAddUserForm}
                            newUser={newUser}
                            setNewUser={setNewUser}
                            handleAddUser={handleAddUser}
                            handleToggleUserStatus={handleToggleUserStatus}
                            handleDeleteUser={handleDeleteUser}
                        />
                    )}

                    {activeTab === 'reports' && <AdminReports />}

                    {activeTab === 'requests' && (
                        <AdminRequests
                            hospitalRequests={hospitalRequests}
                            inventory={inventory}
                            handleApproveRequest={handleApproveRequest}
                            handleRejectRequest={handleRejectRequest}
                        />
                    )}
                </Container>
            </div>
        </div>
    );
}
