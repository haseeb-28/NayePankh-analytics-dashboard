import React from 'react'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

const config = {
  warning: { icon: AlertTriangle, color: '#f97316', bg: 'rgba(249,115,22,0.08)' },
  success: { icon: CheckCircle, color: '#22c55e', bg: 'rgba(34,197,94,0.08)' },
  info: { icon: Info, color: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
}

export default function InsightCard({ type, title, desc, action }) {
  const { icon: Icon, color, bg } = config[type] || config.info
  return (
    <div style={{
      background: bg,
      border: `1px solid ${color}33`,
      borderRadius: 10,
      padding: '14px 16px',
      display: 'flex',
      gap: 12,
    }}>
      <Icon size={18} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 8 }}>{desc}</div>
        <div style={{
          display: 'inline-block',
          fontSize: 11,
          fontWeight: 600,
          color,
          background: `${color}1a`,
          padding: '3px 10px',
          borderRadius: 20,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>→ {action}</div>
      </div>
    </div>
  )
}
