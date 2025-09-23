import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../UI/Card';

const initialRoster = [
  { name: 'Amani Njeri', present: false, notes: '' },
  { name: 'Brian Otieno', present: false, notes: '' },
  { name: 'Zahra Mwende', present: false, notes: '' },
];

export default function CaregiverDashboard() {
  const [roster, setRoster] = useState(initialRoster);

  const toggleAttendance = (index) => {
    const updated = [...roster];
    updated[index].present = !updated[index].present;
    setRoster(updated);
  };

  const updateNotes = (index, value) => {
    const updated = [...roster];
    updated[index].notes = value;
    setRoster(updated);
  };

  return (
    <>
      <Navbar role="caregiver" />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Caregiver Dashboard</h2>

        <Card title="Today's Class">
          {roster.map((child, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
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
            </div>
          ))}
        </Card>

        <Card title="Tools">
          <a href="/attendance">
            <button>Open Attendance Tracker</button>
          </a>
          <a href="/messaging">
            <button>Open Messaging Center</button>
          </a>
        </Card>
      </main>
    </>
  );
}
