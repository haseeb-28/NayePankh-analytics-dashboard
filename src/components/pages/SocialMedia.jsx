import React from 'react'
import { socialMediaGrowth } from '../../data/analyticsData'
import Section from '../Section'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

const engagementData = [
  { month: 'Sep', instagram: 4.8, facebook: 2.1, linkedin: 5.2, twitter: 1.9 },
  { month: 'Oct', instagram: 5.1, facebook: 2.3, linkedin: 5.8, twitter: 2.1 },
  { month: 'Nov', instagram: 5.4, facebook: 2.4, linkedin: 6.1, twitter: 2.2 },
  { month: 'Dec', instagram: 5.9, facebook: 2.6, linkedin: 6.7, twitter: 2.4 },
]

export default function SocialMedia() {
  const latest = socialMediaGrowth[socialMediaGrowth.length - 1]
  const first = socialMediaGrowth[0]
  const igGrowth = (((latest.instagram - first.instagram) / first.instagram) * 100).toFixed(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Social Media Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Follower growth, engagement rates & platform comparison · 2024</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { label: 'Instagram', value: `${(latest.instagram/1000).toFixed(1)}K`, growth: `+${igGrowth}%`, color: '#E1306C' },
          { label: 'Facebook', value: `${(latest.facebook/1000).toFixed(1)}K`, growth: '+71%', color: '#1877F2' },
          { label: 'LinkedIn', value: `${(latest.linkedin/1000).toFixed(1)}K`, growth: '+398%', color: '#0A66C2' },
          { label: 'Twitter/X', value: `${(latest.twitter/1000).toFixed(1)}K`, growth: '+226%', color: '#1DA1F2' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '16px 18px', borderTop: `3px solid ${s.color}`,
          }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora', color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 11, color: '#22c55e', marginTop: 4 }}>{s.growth} this year</div>
          </div>
        ))}
      </div>

      <Section title="Follower Growth by Platform" subtitle="Monthly cumulative followers across all platforms · 2024">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={socialMediaGrowth}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
            <Tooltip {...tooltipStyle} formatter={v => [v.toLocaleString(), 'Followers']} />
            <Legend wrapperStyle={{ fontSize: 11, color: '#7d8590' }} />
            <Line type="monotone" dataKey="instagram" name="Instagram" stroke="#E1306C" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="facebook" name="Facebook" stroke="#1877F2" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="linkedin" name="LinkedIn" stroke="#0A66C2" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="twitter" name="Twitter/X" stroke="#1DA1F2" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Engagement Rate (%) by Platform" subtitle="Q4 2024 — higher is better">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `${v}%`} />
            <Tooltip {...tooltipStyle} formatter={v => [`${v}%`, 'Engagement Rate']} />
            <Legend wrapperStyle={{ fontSize: 11, color: '#7d8590' }} />
            <Bar dataKey="instagram" name="Instagram" fill="#E1306C" radius={[3,3,0,0]} />
            <Bar dataKey="facebook" name="Facebook" fill="#1877F2" radius={[3,3,0,0]} />
            <Bar dataKey="linkedin" name="LinkedIn" fill="#0A66C2" radius={[3,3,0,0]} />
            <Bar dataKey="twitter" name="Twitter/X" fill="#1DA1F2" radius={[3,3,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Platform Strategy Recommendations">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { title: 'Double Down on Instagram', desc: 'Instagram grew 272% YTD with a 5.9% engagement rate — the highest of all platforms. Reels targeting 18–30 demographic will accelerate growth further.', color: '#E1306C' },
            { title: 'LinkedIn for Intern Recruitment', desc: 'LinkedIn grew 398% — largely from internship-related posts. A dedicated "Intern Stories" series would boost applications 25–35%.', color: '#0A66C2' },
            { title: 'Post Scheduling Optimization', desc: 'Data shows peak engagement Sun–Tue 7–9 PM PKT. Scheduling 80% of posts in this window can increase organic reach by 30% without extra cost.', color: '#f97316' },
          ].map((r, i) => (
            <div key={i} style={{
              background: 'var(--surface2)', border: `1px solid ${r.color}33`,
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: r.color, marginBottom: 5 }}>{r.title}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
