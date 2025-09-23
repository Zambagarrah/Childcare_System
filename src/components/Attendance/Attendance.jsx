import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../UI/Card';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Attendance() {
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('attendanceLog');
    if (saved) setAttendance(JSON.parse(saved));
  }, []);

  const toggleStatus = (day) => {
    const updated = { ...attendance };
    updated[day] = updated[day] === 'Checked In' ? 'Checked Out' : 'Checked In';
    setAttendance(updated);
    localStorage.setItem('attendanceLog', JSON.stringify(updated));
  };

  return (
    <>
      <Navbar role="caregiver" />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Attendance Tracker</h2>

        <Card title="Weekly Attendance">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{attendance[day] || 'Not Marked'}</td>
                  <td>
                    <button onClick={() => toggleStatus(day)}>
                      {attendance[day] === 'Checked In' ? 'Check Out' : 'Check In'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </main>
    </>
  );
}
