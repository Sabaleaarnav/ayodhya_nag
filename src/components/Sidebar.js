import React from 'react';

export default function Sidebar({ plot }) {
  if (!plot) return <div style={{ width: '30%', padding: '1rem' }}>Click a plot to see details.</div>;

  return (
    <div style={{ width: '30%', padding: '1rem', borderLeft: '1px solid #ccc' }}>
      <h2>{plot['Plot Number']}</h2>
      <ul>
        <li><b>Status:</b> {plot.Status}</li>
        <li><b>Size (sqm):</b> {plot.SizeSQM}</li>
        <li><b>Total Cost:</b> ₹{plot.TotalCost?.toLocaleString() || 0}</li>
        <li><b>Deposit:</b> ₹{plot.Deposit?.toLocaleString() || 0}</li>
        <li><b>Remaining Balance:</b> ₹{plot.RemainingBalance?.toLocaleString() || 0}</li>
      </ul>
    </div>
  );
}
