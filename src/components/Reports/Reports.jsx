import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

// Dummy report data
const reportData = [
  { child: 'Amani Njeri', attendance: '90%', enrolled: true },
  { child: 'Brian Otieno', attendance: '80%', enrolled: true },
  { child: 'Zahra Mwende', attendance: '95%', enrolled: true },
];

export default function Reports({ role = 'admin' }) {
  const [filter, setFilter] = useState('all');

  // Filter logic (demo only)
  const filtered = reportData.filter((entry) => {
    if (filter === 'high') return parseInt(entry.attendance) >= 90;
    if (filter === 'low') return parseInt(entry.attendance) < 90;
    return true;
  });

  return (
    <>
      <Navbar role={role} />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Reports & Analytics</h2>

        {/* Filter Controls */}
        <label>
          Filter by attendance:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="high">90% and above</option>
            <option value="low">Below 90%</option>
          </select>
        </label>

        {/* Report Table */}
        <table>
          <thead>
            <tr>
              <th>Child</th>
              <th>Attendance</th>
              <th>Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry, index) => (
              <tr key={index}>
                <td>{entry.child}</td>
                <td>{entry.attendance}</td>
                <td>{entry.enrolled ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Export Placeholder */}
        <section style={{ marginTop: '2rem' }}>
          <h3>Export Reports</h3>
          <p>Feature coming soon: Export data to Excel or PDF.</p>
        </section>
      </main>
    </>
  );
}
