import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";

import AdminLayout from "../layouts/AdminLayout";

import Registration from "../pages/donor/Registration";
import DonorPortal from "../pages/donor/DonorPortal";

import HospitalPortal from "../pages/hospital/HospitalPortal";
import HospitalSearch from "../pages/hospital/HospitalSearch";
import HospitalRequests from "../pages/hospital/HospitalRequests";
import HospitalNewRequest from "../pages/hospital/HospitalNewRequest";

import PublicLayout from "../layouts/PublicLayout";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminLayout />} />

            {/* Donor Routes */}
            <Route path="/donor-register" element={<Registration />} />
            <Route path="/donorportal" element={<DonorPortal />} />

            {/* Hospital Routes */}
            <Route path="/hospitalportal" element={<HospitalPortal />}>
                <Route index element={<HospitalSearch />} />
                <Route path="search" element={<HospitalSearch />} />
                <Route path="requests" element={<HospitalRequests />} />
                <Route path="new" element={<HospitalNewRequest />} />
            </Route>
        </Routes>
    );
}
