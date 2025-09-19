import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

// Dummy thread for demonstration
const initialThread = [
  { sender: 'Caregiver', text: 'Amani had a great day today!' },
  { sender: 'Parent', text: 'Thank you! Did she nap well?' },
];

export default function Messaging({ role = 'parent' }) {
  const [thread, setThread] = useState(initialThread);
  const [reply, setReply] = useState('');

  // Load saved thread from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('messageThread');
    if (saved) setThread(JSON.parse(saved));
  }, []);

  // Handle reply submission
  const sendReply = (e) => {
    e.preventDefault();
    const newMessage = { sender: role.charAt(0).toUpperCase() + role.slice(1), text: reply };
    const updatedThread = [...thread, newMessage];
    setThread(updatedThread);
    localStorage.setItem('messageThread', JSON.stringify(updatedThread));
    setReply('');
  };

  return (
    <>
      <Navbar role={role} />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Messaging Center</h2>

        {/* Message Thread */}
        <section style={{ marginBottom: '2rem' }}>
          {thread.map((msg, index) => (
            <div key={index} style={{
              backgroundColor: msg.sender === 'Parent' ? 'var(--color-accent)' : 'var(--color-success)',
              padding: '0.75rem',
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </section>

        {/* Reply Box */}
        <form onSubmit={sendReply}>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
