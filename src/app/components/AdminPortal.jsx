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

import { useState, useMemo } from 'react';
import Swal, { showSuccess, showConfirm, showToast } from '../utils/swal';

export function AdminPortal() {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');

    const {
        inventory,
        hospitalRequests,
        bloodTests,
        donors,
        camps,
        addInventory,
        deleteInventory,
        updateInventory,
        updateRequestStatus,
        verifyDonor,
        updateTestResult,
        createUser,
        discardBloodBag,
        addCamp,
        deleteCamp,
        updateCamp
    } = useData();

    const [systemUsers, setSystemUsers] = useState([
        { id: 'USR001', name: 'Dr. Sarah Connor', email: 'sarah@bloodbank.org', role: 'admin', status: 'active', lastLogin: '2024-03-18 09:30' },
        { id: 'USR002', name: 'James Wright', email: 'james@cityhospital.com', role: 'hospital', hospital: 'City Hospital', status: 'active', lastLogin: '2024-03-17 14:20' },
        { id: 'USR003', name: 'Emily Chen', email: 'emily@bloodbank.org', role: 'hospital', status: 'active', lastLogin: '2024-03-18 08:45' },
    ]);

    const stats = useMemo(() => {
        return {
            totalDonors: donors.length,
            totalDonations: inventory.length + 120, // Example offset for historical data
            pendingTests: bloodTests.filter(t => (t.result || t.testStatus) === 'PENDING').length,
            inventoryUnits: inventory.reduce((sum, item) => sum + (item.units || 0), 0),
            activeDonors: donors.filter(d => d.status === 'APPROVED').length,
            upcomingCamps: camps.filter(c => c.status === 'scheduled').length,
            discardedBags: bloodTests.filter(t => (t.result || t.testStatus) === 'FAILED').length,
            pendingRequests: hospitalRequests.filter(r => r.status?.toUpperCase() === 'PENDING').length
        };
    }, [donors, inventory, bloodTests, camps, hospitalRequests]);

    const [showAddStockForm, setShowAddStockForm] = useState(false);
    const [newStock, setNewStock] = useState({ bloodGroup: '', units: '', location: '', expiryDate: '' });

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'hospital', hospital: '' });

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

    const handleUpdateTestResult = (bagId, testData) => {
        updateTestResult(bagId, testData);
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
            updateInventory(id, parseInt(newUnits) || item.units);
            showToast('Inventory updated!');
        }
    };

    const handleVerifyDonor = async (id, approved) => {
        const status = approved ? 'APPROVED' : 'REJECTED';
        await verifyDonor(id, status, 'Verified by Admin');
        showToast(`Donor ${status.toLowerCase()}!`);
    };

    const handleSubmitCamp = async (e) => {
        e.preventDefault();
        const camp = {
            name: newCamp.name,
            location: newCamp.location,
            date: newCamp.date,
            time: newCamp.time,
            expectedDonors: parseInt(newCamp.expectedDonors) || 0,
            actualDonors: 0,
            status: 'scheduled'
        };

        await addCamp(camp);
        setNewCamp({ name: '', location: '', date: '', time: '', expectedDonors: '' });
        showSuccess('Success', 'Donation camp scheduled successfully!');
    };

    const handleDeleteCamp = async (id) => {
        const result = await showConfirm('Cancel Camp', 'Are you sure you want to cancel this donation camp?');
        if (result.isConfirmed) {
            await deleteCamp(id);
            showToast('Camp cancelled.');
        }
    };

    const handleEditCamp = async (camp) => {
        // Simple prompt for updating expected donors for now
        const { value: newExpected } = await Swal.fire({
            title: `Update Expected Donors`,
            input: 'number',
            inputValue: camp.expectedDonors,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        });

        if (newExpected) {
            await updateCamp(camp.id, { ...camp, expectedDonors: parseInt(newExpected) });
            showToast('Camp updated!');
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();

        // Generate a random temporary password
        const tempPassword = Math.random().toString(36).slice(-8);

        // Map the FE role to Backend role
        const roleMap = {
            'admin': 'ADMIN',
            'donor': 'DONOR',
            'staff': 'STAFF',
            'hospital': 'HOSPITAL'
        };
        const backendRole = roleMap[newUser.role] || 'HOSPITAL';

        const userData = {
            name: newUser.name,
            email: newUser.email,
            password: tempPassword,
            role: backendRole
        };

        try {
            const response = await createUser(userData);

            if (response.ok) {
                // Success Modal with Credentials
                await Swal.fire({
                    title: 'Account Provisioned!',
                    html: `
                        <div class="text-start border rounded-3 p-3 bg-light">
                            <div class="mb-2 pe-1"><strong>Email:</strong> ${newUser.email}</div>
                            <div class="mb-2 pe-1"><strong>Temporal Password:</strong> <code style="font-size: 1.25rem;">${tempPassword}</code></div>
                            <div class="small text-danger mt-3">
                                <i class="bi bi-exclamation-triangle-fill me-1"></i>
                                Please share these credentials securely with the user.
                            </div>
                        </div>
                    `,
                    icon: 'success',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'I have copied the password'
                });

                setShowAddUserForm(false);
                setNewUser({ name: '', email: '', role: 'hospital', hospital: '' });
                // We should manually add the user to the list for UI update since we don't have a list from backend yet
                setSystemUsers(prev => [...prev, {
                    id: `USR${Math.floor(Math.random() * 1000)}`,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                    hospital: newUser.hospital,
                    status: 'active',
                    lastLogin: 'Never'
                }]);
            } else {
                const errorData = await response.text();
                showError('Provisioning Failed', errorData || 'Could not create user account.');
            }
        } catch (error) {
            showError('Network Error', 'Could not connect to authentication service.');
        }
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
                        />
                    )}

                    {activeTab === 'donors' && (
                        <AdminDonors
                            donorVerifications={donors}
                            handleVerifyDonor={handleVerifyDonor}
                        />
                    )}

                    {activeTab === 'camps' && (
                        <AdminCamps
                            camps={camps}
                            newCamp={newCamp}
                            setNewCamp={setNewCamp}
                            handleSubmitCamp={handleSubmitCamp}
                            handleDeleteCamp={handleDeleteCamp}
                            handleEditCamp={handleEditCamp}
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
