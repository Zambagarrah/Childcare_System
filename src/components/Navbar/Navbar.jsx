import React from 'react';
import { Link } from 'react-router-dom';

// Simple role-aware navbar (can be expanded later)
export default function Navbar({ role }) {
  return (
    <nav style={{ background: '#4caf50', padding: '1rem', color: 'white' }}>
      <h3>Marianna Childcare</h3>
      <div style={{ marginTop: '0.5rem' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>

        {/* Role-specific links */}
        {role === 'parent' && (
          <>
            <Link to="/parent-dashboard" style={{ marginRight: '1rem', color: 'white' }}>Dashboard</Link>
            <Link to="/child-profile" style={{ marginRight: '1rem', color: 'white' }}>Child Profile</Link>
          </>
        )}

        {role === 'caregiver' && (
          <>
            <Link to="/caregiver-dashboard" style={{ marginRight: '1rem', color: 'white' }}>Dashboard</Link>
            <Link to="/attendance" style={{ marginRight: '1rem', color: 'white' }}>Attendance</Link>
          </>
        )}

        {role === 'admin' && (
          <Link to="/admin-dashboard" style={{ marginRight: '1rem', color: 'white' }}>Dashboard</Link>
        )}

        <Link to="/login" style={{ color: 'white' }}>Logout</Link>
      </div>
    </nav>
  );
}
