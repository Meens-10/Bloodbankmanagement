import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontpage-and-login/Home";
import Login from "./frontpage-and-login/Login";
import AdminLayout from "./admin/AdminLayout";
import DonorDashboard from './Donordashboard/DonorDashboard';


function App() {
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
         <Route path="/donor-dashboard" element={<DonorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
