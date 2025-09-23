import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

// Dummy billing data
const initialInvoices = [
  { id: 'INV001', amount: 2500, status: 'Paid', date: '2025-09-01' },
  { id: 'INV002', amount: 2500, status: 'Pending', date: '2025-10-01' },
];

export default function Billing({ role = 'parent' }) {
  const [invoices, setInvoices] = useState(initialInvoices);

  // Load saved invoices from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('billingHistory');
    if (saved) setInvoices(JSON.parse(saved));
  }, []);

  return (
    <>
      <Navbar role={role} />
      <main>
        <h2 style={{ color: 'var(--color-primary)' }}>Billing Overview</h2>

        {/* Invoice Table */}
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Amount (KES)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.amount}</td>
                <td style={{ color: invoice.status === 'Paid' ? 'green' : 'orange' }}>
                  {invoice.status}
                </td>
                <td>{invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Integration Placeholder */}
        <section style={{ marginTop: '2rem' }}>
          <h3>Payment Gateway</h3>
          <p>Feature coming soon: Pay invoices directly via M-Pesa or card.</p>
        </section>
      </main>
    </>
  );
}
