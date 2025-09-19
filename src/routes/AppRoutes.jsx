import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ParentDashboard from '../components/Dashboard/ParentDashboard';
import CaregiverDashboard from '../components/Dashboard/CaregiverDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
