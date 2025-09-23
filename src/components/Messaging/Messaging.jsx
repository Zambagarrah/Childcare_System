import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../UI/Card';

const initialThread = [
  { sender: 'Caregiver', text: 'Amani had a great day today!' },
  { sender: 'Parent', text: 'Thank you! Did she nap well?' },
];

export default function Messaging({ role = 'parent' }) {
  const [thread, setThread] = useState(initialThread);
  const [reply, setReply] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('messageThread');
    if (saved) setThread(JSON.parse(saved));
  }, []);

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

        <Card title="Conversation">
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
        </Card>

        <Card title="Reply">
          <form onSubmit={sendReply}>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </Card>
      </main>
    </>
  );
}
