import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="card" style={{
      backgroundColor: 'var(--color-card)',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      padding: '1.5rem',
      marginBottom: '1.5rem'
    }}>
      {title && <h3 style={{ marginBottom: '1rem' }}>{title}</h3>}
      {children}
    </div>
  );
}
