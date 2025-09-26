import DashboardLayout from '../UI/DashboardLayout';
import Card from '../UI/Card';
import '../../styles/dashboard.css';

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
    <DashboardLayout role="admin">
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>

        <Card title="Center Overview">
          <ul>
            <li><strong>Total Children:</strong> {stats.totalChildren}</li>
            <li><strong>Total Caregivers:</strong> {stats.totalCaregivers}</li>
            <li><strong>Attendance Today:</strong> {stats.attendanceToday}</li>
          </ul>
        </Card>

        <Card title="Staff List">
          <ul>
            {staffList.map((staff, index) => (
              <li key={index}>{staff.name} — {staff.role}</li>
            ))}
          </ul>
        </Card>

        <Card title="Tools">
          <a href="/reports">
            <button>View Reports</button>
          </a>
        </Card>
      </div>
    </DashboardLayout>
  );
}
