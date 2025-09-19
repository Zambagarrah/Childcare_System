import React from 'react';

// Dummy data for demonstration
const stats = {
  totalChildren: 42,
  totalCaregivers: 5,
  attendanceToday: 38,
};

const staffList = [
  { name: 'Ms. Wanjiku', role: 'Caregiver' },
  { name: 'Mr. Otieno', role: 'Caregiver' },
  { name: 'Admin Marianna', role: 'Administrator' },
];

export default function AdminDashboard() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>

      {/* Center-wide Stats */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Center Overview</h3>
        <ul>
          <li><strong>Total Children:</strong> {stats.totalChildren}</li>
          <li><strong>Total Caregivers:</strong> {stats.totalCaregivers}</li>
          <li><strong>Attendance Today:</strong> {stats.attendanceToday}</li>
        </ul>
      </section>

      {/* Staff Management */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Staff List</h3>
        <ul>
          {staffList.map((staff, index) => (
            <li key={index}>{staff.name} — {staff.role}</li>
          ))}
        </ul>
      </section>

      {/* Enrollment Tracking Placeholder */}
      <section>
        <h3>Enrollment Tracking</h3>
        <p>Feature coming soon: View and manage child enrollment records.</p>
      </section>
    </main>
  );
}
