import { useState } from 'react';

export default function Login() {
  const [role, setRole] = useState('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
      alert(`Welcome, ${user.role}!`);
      window.location.href = '/parent-dashboard';
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}
