import React from 'react'
import { donationTrend, donorSegments } from '../../data/analyticsData'
import Section from '../Section'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

const donorRetentionData = [
  { month: 'Jan', retention: 61 }, { month: 'Feb', retention: 63 },
  { month: 'Mar', retention: 67 }, { month: 'Apr', retention: 65 },
  { month: 'May', retention: 70 }, { month: 'Jun', retention: 72 },
  { month: 'Jul', retention: 69 }, { month: 'Aug', retention: 74 },
  { month: 'Sep', retention: 78 }, { month: 'Oct', retention: 76 },
  { month: 'Nov', retention: 81 }, { month: 'Dec', retention: 83 },
]

export default function Fundraising() {
  const total = donationTrend.reduce((s, d) => s + d.donations, 0)
  const avgMonthly = Math.round(total / 12)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Fundraising Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Donation trends, donor segments & retention · 2024</p>
      </div>

      {/* Summary Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { label: 'Total Raised (2024)', value: `₨${(total/100000).toFixed(1)}L`, color: '#f97316' },
          { label: 'Monthly Average', value: `₨${(avgMonthly/1000).toFixed(0)}K`, color: '#3b82f6' },
          { label: 'Unique Donors', value: '834', color: '#a855f7' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '18px 20px',
          }}>
            <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'Sora', color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <Section title="Monthly Donation Trend" subtitle="PKR collected each month in 2024">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={donationTrend}>
              <defs>
                <linearGradient id="dg2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `₨${(v/1000).toFixed(0)}K`} />
              <Tooltip {...tooltipStyle} formatter={v => [`₨${v.toLocaleString()}`, 'Donations']} />
              <Area type="monotone" dataKey="donations" stroke="#f97316" strokeWidth={2.5} fill="url(#dg2)" />
            </AreaChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Donor Segments" subtitle="By giving frequency">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={donorSegments} cx="50%" cy="50%" innerRadius={55} outerRadius={90}
                dataKey="value" nameKey="name" paddingAngle={3}>
                {donorSegments.map((s, i) => <Cell key={i} fill={s.color} />)}
              </Pie>
              <Tooltip {...tooltipStyle} formatter={v => [`${v}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
            {donorSegments.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--muted)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
                {s.name} ({s.value}%)
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Donor Retention Rate (%)" subtitle="% of prior donors who gave again the next month">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={donorRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis domain={[55, 90]} tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `${v}%`} />
            <Tooltip {...tooltipStyle} formatter={v => [`${v}%`, 'Retention']} />
            <Line type="monotone" dataKey="retention" stroke="#22c55e" strokeWidth={2.5} dot={{ fill: '#22c55e', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      {/* Recommendations */}
      <Section title="Fundraising Recommendations" subtitle="Based on the data above">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { num: '01', title: 'Monthly Giving Conversion', desc: 'Target one-time donors (44%) with a 3-email nurture campaign. Even 15% conversion = ₨2.8L additional annual revenue.', color: '#f97316' },
            { num: '02', title: 'Q4 Giving Season Boost', desc: 'Nov–Dec show highest giving. Allocate 40% of annual fundraising budget to this window with targeted campaigns.', color: '#3b82f6' },
            { num: '03', title: 'Ramadan Campaign 2× Budget', desc: 'Ramadan Relief had the highest ROI. Pre-plan in February and double last year\'s budget for higher returns.', color: '#a855f7' },
            { num: '04', title: 'Donor Leaderboard', desc: 'A transparent donor leaderboard on the website drives social proof and increases average donation size by 18–23%.', color: '#22c55e' },
          ].map((r, i) => (
            <div key={i} style={{
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 5 }}>{r.title}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
