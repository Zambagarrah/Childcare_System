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
      window.location.href = `/${user.role}-dashboard`;
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <main>
      <h2 style={{ color: 'var(--color-primary)' }}>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="button" onClick={() => window.location.href = '/register'}>New User? Sign up</button>
        <a href="/register" className="signup">Sign up</a>
      </form>
    </main>
  );
}
