import Sidebar from './Sidebar';

export default function DashboardLayout({ role, children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={role} />
      <main style={{
        marginLeft: '220px',
        padding: '2rem',
        width: '100%',
        backgroundColor: 'var(--color-bg)',
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </div>
  );
}
