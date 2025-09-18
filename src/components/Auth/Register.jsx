import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem(username, JSON.stringify({ role, password }));
    alert('Registration successful!');
    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="parent">Parent</option>
        <option value="caregiver">Caregiver</option>
        <option value="admin">Administrator</option>
      </select>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
