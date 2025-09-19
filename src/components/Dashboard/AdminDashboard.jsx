import Navbar from '../Navbar/Navbar';

const stats = {
  totalChildren: 42,
  totalCaregivers: 5,
  attendanceToday: 38,
};

const staffList = [
  { name: 'Ms. Wanjiku', role: 'Caregiver' },
  { name: 'Mr. Otieno', role: 'Caregiver' },
  { name: 'Admin Zablon', role: 'Administrator' },
];

export default function AdminDashboard() {
  return (
    <>
      <Navbar role="admin" />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Admin Dashboard</h2>

        <section>
          <h3>Center Overview</h3>
          <ul>
            <li><strong>Total Children:</strong> {stats.totalChildren}</li>
            <li><strong>Total Caregivers:</strong> {stats.totalCaregivers}</li>
            <li><strong>Attendance Today:</strong> {stats.attendanceToday}</li>
          </ul>
        </section>

        <section>
          <h3>Staff List</h3>
          <ul>
            {staffList.map((staff, index) => (
              <li key={index}>{staff.name} — {staff.role}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Enrollment Tracking</h3>
          <p>Feature coming soon: View and manage child enrollment records.</p>
        </section>
      </main>
    </>
  );
}
