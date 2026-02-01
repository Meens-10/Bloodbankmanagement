import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

// Simulated JWT token generation
const generateToken = (userId, role) => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
        userId,
        role,
        iat: Date.now(),
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    }));
    const signature = btoa(`signature-${userId}-${role}`);
    return `${header}.${payload}.${signature}`;
};

// Mock user database with unique credentials per role
const mockUsers = [
    {
        id: '1',
        email: 'john.smith@donor.com',
        password: 'donor@123',
        name: 'John Smith',
        role: 'donor',
        phone: '+1 234-567-8900',
        bloodGroup: 'O+',
        address: '123 Main St, City, State 12345',
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop'
    },
    {
        id: '2',
        email: 'contact@cityhospital.com',
        password: 'hospital@123',
        name: 'Dr. Sarah Johnson',
        role: 'hospital',
        phone: '+1 234-567-8901',
        hospitalName: 'City Hospital',
        licenseNumber: 'HSP-2024-001',
        address: '456 Medical Plaza, City, State 12345'
    },
    {
        id: '3',
        email: 'admin@bloodbank.org',
        password: 'admin@123',
        name: 'Admin User',
        role: 'admin',
        phone: '+1 234-567-8902',
        address: 'Blood Bank HQ, City, State 12345'
    },
];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check for stored authentication on mount
        const storedUser = localStorage.getItem('auth_user');
        const storedToken = localStorage.getItem('auth_token');

        if (storedUser && storedToken) {
            try {
                const userData = JSON.parse(storedUser);
                // Verify token hasn't expired (simplified check)
                const payload = JSON.parse(atob(storedToken.split('.')[1]));
                if (payload.exp > Date.now()) {
                    setUser({ ...userData, token: storedToken });
                } else {
                    // Token expired, clear storage
                    localStorage.removeItem('auth_user');
                    localStorage.removeItem('auth_token');
                }
            } catch (error) {
                console.error('Error loading stored auth:', error);
                localStorage.removeItem('auth_user');
                localStorage.removeItem('auth_token');
            }
        }
    }, []);

    const login = async (email, password) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Find user in mock database (auto-detect role based on credentials)
        const foundUser = mockUsers.find(
            u => u.email === email && u.password === password
        );

        if (foundUser) {
            const token = generateToken(foundUser.id, foundUser.role);
            const userData = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
                token,
                phone: foundUser.phone,
                bloodGroup: foundUser.bloodGroup,
                address: foundUser.address,
                hospitalName: foundUser.hospitalName,
                licenseNumber: foundUser.licenseNumber,
                profileImage: foundUser.profileImage
            };

            setUser(userData);

            // Store in localStorage
            localStorage.setItem('auth_user', JSON.stringify({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                role: userData.role,
                phone: userData.phone,
                bloodGroup: userData.bloodGroup,
                address: userData.address,
                hospitalName: userData.hospitalName,
                licenseNumber: userData.licenseNumber,
                profileImage: userData.profileImage
            }));
            localStorage.setItem('auth_token', token);

            return true;
        }

        return false;
    };

    const updateProfile = (updates) => {
        if (user) {
            const updatedUser = { ...user, ...updates };
            setUser(updatedUser);

            // Update localStorage
            localStorage.setItem('auth_user', JSON.stringify({
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                phone: updatedUser.phone,
                bloodGroup: updatedUser.bloodGroup,
                address: updatedUser.address,
                hospitalName: updatedUser.hospitalName,
                licenseNumber: updatedUser.licenseNumber,
                profileImage: updatedUser.profileImage
            }));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
    };

    const hasRole = (role) => {
        return user?.role === role;
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
        hasRole,
        updateProfile
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
