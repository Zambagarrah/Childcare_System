export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        Marianna Childcare System
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Empowering parents, caregivers, and administrators with care and clarity.
      </p>
      <a href="/register">
        <button>Get Started</button>
      </a>
    </main>
  );
}
