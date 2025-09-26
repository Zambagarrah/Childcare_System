import '../../styles/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Marianna Childcare System</h1>
      <p>
        Welcome to a platform built for care, clarity, and connection. Whether you're a parent, caregiver, or administrator, Marianna helps you support every child’s journey.
      </p>

      <div className="role-buttons">
        <a href="/register">
          <button>I'm a Parent</button>
        </a>
        <a href="/register">
          <button>I'm a Caregiver</button>
        </a>
        <a href="/register">
          <button>I'm an Administrator</button>
        </a>
      </div>
    </div>
  );
}
