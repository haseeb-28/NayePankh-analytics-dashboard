import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function KPICard({ label, value, change, sub, color }) {
  const positive = change >= 0
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = color}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: '12px 12px 0 0' }} />
      <span style={{ color: 'var(--muted)', fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
      <span style={{ fontSize: 26, fontWeight: 700, fontFamily: 'Sora', color: 'var(--text)', lineHeight: 1 }}>{value}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {positive
          ? <TrendingUp size={13} color="#22c55e" />
          : <TrendingDown size={13} color="#ef4444" />
        }
        <span style={{ fontSize: 12, color: positive ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
          {positive ? '+' : ''}{change}%
        </span>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>{sub}</span>
      </div>
    </div>
  )
}
