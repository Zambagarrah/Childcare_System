import DashboardLayout from '../UI/DashboardLayout';
import Card from '../UI/Card';

const childData = {
  name: 'Amani Njeri',
  age: 4,
  attendance: ['Mon', 'Tue', 'Wed'],
  messages: ['Welcome to the new term!', 'Reminder: Bring water bottle tomorrow.'],
};

export default function ParentDashboard() {
  return (
    <DashboardLayout role="parent">
      <h2 style={{ color: 'var(--color-primary)' }}>Parent Dashboard</h2>

      <Card title="Child Profile">
        <p><strong>Name:</strong> {childData.name}</p>
        <p><strong>Age:</strong> {childData.age} years</p>
        <a href="/child-profile">
          <button>View / Edit Profile</button>
        </a>
      </Card>

      <Card title="Attendance This Week">
        <ul>
          {childData.attendance.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </Card>

      <Card title="Messages from Caregiver">
        <ul>
          {childData.messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <a href="/messaging">
          <button>Open Messaging Center</button>
        </a>
      </Card>

      <Card title="Billing">
        <a href="/billing">
          <button>View Billing</button>
        </a>
      </Card>
    </DashboardLayout>
  );
}
