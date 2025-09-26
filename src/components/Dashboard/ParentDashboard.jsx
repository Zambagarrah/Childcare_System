import { FaChild, FaClipboardList, FaComments, FaMoneyBillWave } from 'react-icons/fa';
import DashboardLayout from '../UI/DashboardLayout';
import Card from '../UI/Card';
import '../../styles/dashboard.css';

const childData = {
  name: 'Amani Njeri',
  age: 4,
  attendance: ['Mon', 'Tue', 'Wed'],
  messages: ['Welcome to the new term!', 'Reminder: Bring water bottle tomorrow.'],
};

export default function ParentDashboard() {
  return (
    <DashboardLayout role="parent">
      <div className="dashboard-container">
        <h2>Parent Dashboard</h2>

        <Card title={<><FaChild /> Child Profile</>}>          <p><strong>Name:</strong> {childData.name}</p>
          <p><strong>Age:</strong> {childData.age} years</p>
          <a href="/child-profile">
            <button>View / Edit Profile</button>
          </a>
        </Card>

        <Card title={<><FaClipboardList /> Attendance This Week</>}>
          <ul>
            {childData.attendance.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </Card>

        <Card title={<><FaComments /> Messages from Caregiver</>}>
          <ul>
            {childData.messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
          <a href="/messaging">
            <button>Open Messaging Center</button>
          </a>
        </Card>

        <Card title={<><FaMoneyBillWave /> Billing</>}>
          <a href="/billing">
            <button>View Billing</button>
          </a>
        </Card>
      </div>
    </DashboardLayout>
  );
}
