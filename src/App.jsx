import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./frontpage-and-login/Home";
import Login from "./frontpage-and-login/Login";
import AdminLayout from "./admin/AdminLayout";
import Registration from "./Donordashboard/Registration";

import DonorDashboard from "./Donordashboard/DonorDashboard";
import DonorPortal from "./Donorportal/DonorPortal";

// HOSPITAL - Updated imports
import HospitalSearch from "./Hospitalportal/HospitalSearch";
import HospitalRequests from "./Hospitalportal/HospitalRequests";
import HospitalNewRequest from "./Hospitalportal/HospitalNewRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Donor */}
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/donorPortal" element={<DonorPortal />} />

        {/* Hospital */}
        <Route path="/hospital" element={<hospitalportal />} />
        {/* <Route path="/hospital/requests" element={<HospitalRequests />} />
        <Route path="/hospital/new" element={<HospitalNewRequest />} /> */}

        {/* Fallback */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;