import React from 'react';
import { Link } from 'react-router-dom';

// Sidebar navigation based on role
export default function Sidebar({ role }) {
  const links = {
    parent: [
      { label: 'Dashboard', path: '/parent-dashboard' },
      { label: 'Child Profile', path: '/child-profile' },
      { label: 'Messaging', path: '/messaging' },
      { label: 'Billing', path: '/billing' },
    ],
    caregiver: [
      { label: 'Dashboard', path: '/caregiver-dashboard' },
      { label: 'Attendance', path: '/attendance' },
      { label: 'Messaging', path: '/messaging' },
    ],
    admin: [
      { label: 'Dashboard', path: '/admin-dashboard' },
      { label: 'Reports', path: '/reports' },
    ],
  };

  return (
    <aside style={{
      width: '220px',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: '1rem',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflowY: 'auto'
    }}>
      <h3>Marianna</h3>
      <nav style={{ marginTop: '1rem' }}>
        {links[role].map((link, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <Link to={link.path} style={{ color: 'white', textDecoration: 'none' }}>
              {link.label}
            </Link>
          </div>
        ))}
        <div>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
        </div>
      </nav>
    </aside>
  );
}
