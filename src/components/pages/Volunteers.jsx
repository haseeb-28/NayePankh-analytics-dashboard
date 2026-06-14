import React from 'react'
import { volunteerEngagement, volunteerSkills } from '../../data/analyticsData'
import Section from '../Section'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, LineChart, Line
} from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

export default function Volunteers() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Volunteer Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Engagement, skills & retention analysis · 2024</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { label: 'Total Volunteers', value: '342', color: '#22c55e' },
          { label: 'Avg Monthly New', value: '35', color: '#3b82f6' },
          { label: 'Retention Rate', value: '91.2%', color: '#f97316' },
          { label: 'Avg Hours/Month', value: '14h', color: '#a855f7' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '16px 18px',
            borderTop: `3px solid ${s.color}`,
          }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora', color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
        <Section title="Monthly Volunteer Trend" subtitle="New joiners vs churned vs total active">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={volunteerEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="new" name="New" fill="#22c55e" radius={[3,3,0,0]} />
              <Bar dataKey="churned" name="Churned" fill="#ef4444" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Skill Distribution" subtitle="Active volunteers by primary skill">
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={volunteerSkills}>
              <PolarGrid stroke="#30363d" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#7d8590', fontSize: 10 }} />
              <Radar name="Volunteers" dataKey="count" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} strokeWidth={2} />
              <Tooltip {...tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </Section>
      </div>

      <Section title="Volunteer Growth Trajectory" subtitle="Cumulative active headcount throughout 2024">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={volunteerEngagement}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} />
            <Tooltip {...tooltipStyle} formatter={v => [v, 'Active Volunteers']} />
            <Line type="monotone" dataKey="active" stroke="#22c55e" strokeWidth={2.5} dot={{ fill: '#22c55e', r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Volunteer Program Recommendations">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { title: 'Skill-matching System', desc: 'Match volunteers to tasks by skill type. Teaching volunteers (112) are underutilized in content tasks — redirect for 20% efficiency gain.', color: '#22c55e' },
            { title: 'Churn Early Warning', desc: 'Flag volunteers with zero activity in 21+ days via email nudge. This alone can recover 30–40% of at-risk volunteers before they leave.', color: '#f97316' },
            { title: 'Recognition Program', desc: 'Monthly top-volunteer spotlights on social media. Organizations with recognition programs see 27% higher retention on average.', color: '#3b82f6' },
          ].map((r, i) => (
            <div key={i} style={{
              background: 'var(--surface2)', border: `1px solid ${r.color}33`,
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ width: 28, height: 3, background: r.color, borderRadius: 2, marginBottom: 10 }} />
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text)' }}>{r.title}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
