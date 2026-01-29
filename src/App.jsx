import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./frontpage-and-login/Home";
import Login from "./frontpage-and-login/Login";
import AdminLayout from "./admin/AdminLayout";

import DonorDashboard from "./Donordashboard/DonorDashboard";
import DonorPortal from "./DonorPortal/DonorPortal";
import Registration from "./Donordashboard/Registration";

import Hospitalportal from "./Hospitalportal/Hospitalportal";
import HospitalSearch from "./Hospitalportal/HospitalSearch";
import HospitalRequests from "./Hospitalportal/HospitalRequests";
import HospitalNewRequest from "./Hospitalportal/HospitalNewRequest";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Donor */}
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/donorPortal" element={<DonorPortal />} />

        {/* Hospital */}
        <Route path="/hospital" element={<Hospitalportal />}>
          <Route index element={<HospitalSearch />} />
          <Route path="requests" element={<HospitalRequests />} />
          <Route path="new" element={<HospitalNewRequest />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
