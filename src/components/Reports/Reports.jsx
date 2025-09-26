import { useState } from 'react';
import DashboardLayout from '../UI/DashboardLayout';
import Card from '../UI/Card';
import '../../styles/dashboard.css';

const reportData = [
  { child: 'Amani Njeri', attendance: '90%', enrolled: true },
  { child: 'Brian Otieno', attendance: '80%', enrolled: true },
  { child: 'Zahra Mwende', attendance: '95%', enrolled: true },
];

export default function Reports({ role = 'admin' }) {
  const [filter, setFilter] = useState('all');

  const filtered = reportData.filter((entry) => {
    const percent = parseInt(entry.attendance);
    if (filter === 'high') return percent >= 90;
    if (filter === 'low') return percent < 90;
    return true;
  });

  return (
    <DashboardLayout role={role}>
      <div className="dashboard-container">
        <h2>Reports & Analytics</h2>

        <Card title="Filter Attendance">
          <label>
            Show:
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="high">90% and above</option>
              <option value="low">Below 90%</option>
            </select>
          </label>
        </Card>

        <Card title="Attendance Summary">
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
        </Card>

        <Card title="Export Reports">
          <p>Feature coming soon: Export data to Excel or PDF for offline analysis and sharing.</p>
        </Card>
      </div>
    </DashboardLayout>
  );
}
