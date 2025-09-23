import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ParentDashboard from '../components/Dashboard/ParentDashboard';
import CaregiverDashboard from '../components/Dashboard/CaregiverDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import ChildProfile from '../components/ChildProfile/ChildProfile';
import Attendance from '../components/Attendance/Attendance';
import Messaging from '../components/Messaging/Messaging';
import Billing from '../components/Billing/Billing';
import Reports from '../components/Reports/Reports'

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
        <Route path="/child-profile" element={<ChildProfile />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/billing" element={<Billing role="parent" />} />
        <Route path="/reports" element={<Reports role="admin" />} />
      </Routes>
    </Router>
  );
}
