import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

// Dummy class roster
const initialRoster = [
  { name: 'Amani Njeri', present: false, notes: '' },
  { name: 'Brian Otieno', present: false, notes: '' },
  { name: 'Zahra Mwende', present: false, notes: '' },
];

export default function CaregiverDashboard() {
  const [roster, setRoster] = useState(initialRoster);

  // Toggle attendance
  const toggleAttendance = (index) => {
    const updated = [...roster];
    updated[index].present = !updated[index].present;
    setRoster(updated);
  };

  // Update health notes
  const updateNotes = (index, value) => {
    const updated = [...roster];
    updated[index].notes = value;
    setRoster(updated);
  };

  return (
    <>
      <Navbar role="caregiver" />
      <main style={{ padding: '2rem' }}>
        <h2>Caregiver Dashboard</h2>

        {/* Class Roster */}
        <section>
          <h3>Today's Class</h3>
          {roster.map((child, index) => (
            <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <p><strong>Name:</strong> {child.name}</p>
              <label>
                <input
                  type="checkbox"
                  checked={child.present}
                  onChange={() => toggleAttendance(index)}
                />
                Present
              </label>
              <br />
              <label>
                Health Notes:
                <input
                  type="text"
                  value={child.notes}
                  onChange={(e) => updateNotes(index, e.target.value)}
                  placeholder="e.g. sleepy, energetic"
                />
              </label>
              <a href="/attendance">
                <button>Open Attendance Tracker</button>
              </a>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
