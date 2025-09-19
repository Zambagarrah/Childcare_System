import React, { useState, useEffect } from 'react';

// Days of the week
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Attendance() {
  const [attendance, setAttendance] = useState({});

  // Load saved attendance from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('attendanceLog');
    if (saved) setAttendance(JSON.parse(saved));
  }, []);

  // Toggle check-in/check-out
  const toggleStatus = (day) => {
    const updated = { ...attendance };
    updated[day] = updated[day] === 'Checked In' ? 'Checked Out' : 'Checked In';
    setAttendance(updated);
    localStorage.setItem('attendanceLog', JSON.stringify(updated));
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Attendance Tracker</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
    </main>
  );
}
