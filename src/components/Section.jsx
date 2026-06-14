import React from 'react'

export default function Section({ title, subtitle, children, fullWidth }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '22px 24px',
      gridColumn: fullWidth ? '1 / -1' : undefined,
    }}>
      <div style={{ marginBottom: 18 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{title}</h3>
        {subtitle && <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}
