import React from 'react';

// Reusable Card layout for consistent styling
export default function Card({ title, children }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      padding: '1rem',
      marginBottom: '1.5rem'
    }}>
      {title && <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{title}</h3>}
      {children}
    </div>
  );
}
