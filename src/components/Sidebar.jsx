import React from 'react'
import { LayoutDashboard, Heart, Users, Briefcase, Share2, Megaphone, Globe, Lightbulb } from 'lucide-react'

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'fundraising', label: 'Fundraising', icon: Heart },
  { id: 'volunteers', label: 'Volunteers', icon: Users },
  { id: 'internships', label: 'Internships', icon: Briefcase },
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'insights', label: 'Insights', icon: Lightbulb },
]

export default function Sidebar({ active, onSelect }) {
  return (
    <aside style={{
      width: 220,
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 0 24px',
      flexShrink: 0,
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #f97316, #fb923c)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 800, color: '#fff', fontFamily: 'Sora',
          }}>N</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Sora', color: 'var(--text)' }}>NayePankh</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.05em' }}>ANALYTICS</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 10px', flex: 1 }}>
        <div style={{ fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px 8px', fontWeight: 600 }}>Dashboard</div>
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button key={id} onClick={() => onSelect(id)} style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: isActive ? 'var(--accent-dim)' : 'transparent',
              color: isActive ? 'var(--accent)' : 'var(--muted)',
              fontSize: 13, fontWeight: isActive ? 600 : 400,
              marginBottom: 2, transition: 'all 0.15s', textAlign: 'left',
            }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--muted)' } }}
            >
              <Icon size={15} />
              {label}
              {isActive && <div style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          background: 'var(--accent-dim)', border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: 10, padding: '12px 14px',
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', marginBottom: 3 }}>Internship Project</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>Data Analytics · 2024<br />Haseeb Ur Rehman</div>
        </div>
      </div>
    </aside>
  )
}
