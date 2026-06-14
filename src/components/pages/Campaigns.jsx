import React from 'react'
import { campaignPerformance } from '../../data/analyticsData'
import Section from '../Section'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

export default function Campaigns() {
  const best = campaignPerformance.reduce((a, b) => a.donations > b.donations ? a : b)
  const totalRaised = campaignPerformance.reduce((s, c) => s + c.donations, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Campaign Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Reach, conversions & ROI across all 2024 campaigns</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { label: 'Total Campaigns', value: '6', color: '#f97316' },
          { label: 'Best Campaign', value: best.name, color: '#22c55e' },
          { label: 'Total Campaign Revenue', value: `₨${(totalRaised/100000).toFixed(1)}L`, color: '#3b82f6' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '16px 18px', borderTop: `3px solid ${s.color}`,
          }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: i === 1 ? 18 : 26, fontWeight: 800, fontFamily: 'Sora', color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Section title="Donations Raised by Campaign" subtitle="PKR — all 2024 campaigns">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={campaignPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis type="number" tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `₨${(v/1000).toFixed(0)}K`} />
              <YAxis dataKey="name" type="category" tick={{ fill: '#7d8590', fontSize: 10 }} width={120} />
              <Tooltip {...tooltipStyle} formatter={v => [`₨${v.toLocaleString()}`, 'Raised']} />
              <Bar dataKey="donations" fill="#f97316" radius={[0,4,4,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Reach vs Conversions" subtitle="Higher = more effective campaign">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="name" tick={{ fill: '#7d8590', fontSize: 9 }} angle={-20} textAnchor="end" height={50} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="reach" name="Reach" fill="#3b82f6" radius={[3,3,0,0]} />
              <Bar dataKey="conversions" name="Conversions" fill="#22c55e" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Section>
      </div>

      {/* Campaign comparison table */}
      <Section title="Campaign Performance Table" subtitle="Detailed breakdown with conversion rates">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Campaign', 'Reach', 'Conversions', 'Conv. Rate', 'Donations (PKR)', 'ROI Score'].map(h => (
                  <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: 'var(--muted)', fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campaignPerformance.map((c, i) => {
                const convRate = ((c.conversions / c.reach) * 100).toFixed(1)
                const roi = (c.donations / c.reach).toFixed(1)
                return (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--surface2)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', fontWeight: 500 }}>{c.name}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--muted)' }}>{c.reach.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--muted)' }}>{c.conversions.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{
                        background: parseFloat(convRate) > 7 ? 'rgba(34,197,94,0.1)' : 'rgba(249,115,22,0.1)',
                        color: parseFloat(convRate) > 7 ? '#22c55e' : '#f97316',
                        padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                      }}>{convRate}%</span>
                    </td>
                    <td style={{ padding: '10px 12px', color: '#f97316', fontWeight: 600 }}>₨{c.donations.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', color: '#a855f7', fontWeight: 600 }}>₨{roi}/reach</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
