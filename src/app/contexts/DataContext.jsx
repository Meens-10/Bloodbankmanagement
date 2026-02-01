import { createContext, useContext, useState } from 'react';

const DataContext = createContext(undefined);

export function DataProvider({ children }) {
    const [inventory, setInventory] = useState([
        { id: 'INV001', bloodGroup: 'A+', units: 45, location: 'Central Bank', expiryDate: '2024-04-15', status: 'good' },
        { id: 'INV002', bloodGroup: 'O+', units: 52, location: 'Central Bank', expiryDate: '2024-04-20', status: 'good' },
        { id: 'INV003', bloodGroup: 'B-', units: 15, location: 'North Center', expiryDate: '2024-03-25', status: 'expiring' },
        { id: 'INV004', bloodGroup: 'AB+', units: 8, location: 'South Center', expiryDate: '2024-05-01', status: 'good' },
        { id: 'INV005', bloodGroup: 'O-', units: 12, location: 'Central Bank', expiryDate: '2024-03-22', status: 'expiring' },
        { id: 'INV006', bloodGroup: 'A-', units: 12, location: 'Central Bank', expiryDate: '2024-04-10', status: 'good' },
        { id: 'INV007', bloodGroup: 'B+', units: 38, location: 'North Center', expiryDate: '2024-04-05', status: 'good' },
        { id: 'INV008', bloodGroup: 'AB-', units: 5, location: 'South Center', expiryDate: '2024-03-30', status: 'good' },
    ]);

    const [hospitalRequests, setHospitalRequests] = useState([
        { id: 'REQ001', hospitalName: 'City Hospital', patientName: 'Robert Ford', bloodGroup: 'O-', unitsNeeded: 2, urgency: 'critical', status: 'pending', requestDate: '2024-03-18', reason: 'Emergency Surgery', contactPerson: 'Dr. House', contactPhone: '555-0123' },
        { id: 'REQ002', hospitalName: 'General Hospital', patientName: 'Mary Jane', bloodGroup: 'A+', unitsNeeded: 5, urgency: 'urgent', status: 'pending', requestDate: '2024-03-17', reason: 'Accident', contactPerson: 'Dr. Strange', contactPhone: '555-0199' },
        { id: 'REQ003', hospitalName: 'Valley Clinic', patientName: 'Peter Parker', bloodGroup: 'B+', unitsNeeded: 1, urgency: 'normal', status: 'fulfilled', requestDate: '2024-03-16', reason: 'Anemia', contactPerson: 'Dr. Banner', contactPhone: '555-0155' },
    ]);

    const [bloodTests, setBloodTests] = useState([
        { id: 'TEST001', bagId: 'BAG2024001', donorName: 'John Doe', bloodGroup: 'A+', collectionDate: '2024-03-15', hiv: 'negative', hepatitisB: 'negative', hepatitisC: 'negative', syphilis: 'negative', malaria: 'negative', testStatus: 'completed', isSafe: true },
        { id: 'TEST002', bagId: 'BAG2024002', donorName: 'Jane Smith', bloodGroup: 'O-', collectionDate: '2024-03-16', hiv: 'negative', hepatitisB: 'positive', hepatitisC: 'negative', syphilis: 'negative', malaria: 'negative', testStatus: 'completed', isSafe: false },
        { id: 'TEST003', bagId: 'BAG2024003', donorName: 'Mike Johnson', bloodGroup: 'B+', collectionDate: '2024-03-17', hiv: 'pending', hepatitisB: 'pending', hepatitisC: 'pending', syphilis: 'pending', malaria: 'pending', testStatus: 'testing', isSafe: null },
    ]);

    const addRequest = (request) => {
        setHospitalRequests(prev => [request, ...prev]);
    };

    const cancelRequest = (id) => {
        setHospitalRequests(prev => prev.filter(req => req.id !== id));
    };

    const updateRequestStatus = (id, status) => {
        setHospitalRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
    };

    const addInventory = (item) => {
        setInventory(prev => [...prev, item]);
    };

    const deleteInventory = (id) => {
        setInventory(prev => prev.filter(i => i.id !== id));
    };

    const updateInventory = (id, updates) => {
        setInventory(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i));
    };

    const updateTestResult = (testId, result) => {
        setBloodTests(prev => prev.map(test =>
            test.id === testId ? { ...test, testStatus: 'completed', isSafe: result === 'negative' } : test
        ));
    };

    const discardBloodBag = (bagId) => {
        setBloodTests(prev => prev.filter(test => test.bagId !== bagId));
    };

    return (
        <DataContext.Provider value={{
            inventory,
            hospitalRequests,
            bloodTests,
            addRequest,
            cancelRequest,
            updateRequestStatus,
            addInventory,
            deleteInventory,
            updateInventory,
            updateTestResult,
            discardBloodBag
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}
