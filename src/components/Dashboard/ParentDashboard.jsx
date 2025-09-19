import React from 'react';
import Navbar from '../Navbar/Navbar';

// Dummy child data for demonstration
const childData = {
  name: 'Amani Njeri',
  age: 4,
  attendance: ['Mon', 'Tue', 'Wed'],
  messages: ['Welcome to the new term!', 'Reminder: Bring water bottle tomorrow.'],
};

export default function ParentDashboard() {
  return (
    <>
      <Navbar role="parent" />
      <main style={{ padding: '2rem' }}>
        <h2>Parent Dashboard</h2>

        {/* Child Summary Section */}
        <section style={{ marginBottom: '2rem' }}>
          <h3>Child Profile</h3>
          <p><strong>Name:</strong> {childData.name}</p>
          <p><strong>Age:</strong> {childData.age} years</p>
          <a href="/child-profile">
            <button>View / Edit Profile</button>
          </a>
        </section>

        {/* Attendance Log */}
        <section style={{ marginBottom: '2rem' }}>
          <h3>Attendance This Week</h3>
          <ul>
            {childData.attendance.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </section>

        {/* Messaging Preview */}
        <section>
          <h3>Messages from Caregiver</h3>
          <ul>
            {childData.messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
