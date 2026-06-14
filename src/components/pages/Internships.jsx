import React from 'react'
import { internshipFunnel } from '../../data/analyticsData'
import Section from '../Section'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

const COLORS = ['#f97316', '#fb923c', '#fbbf24', '#22c55e', '#3b82f6']

const departmentData = [
  { dept: 'Data Analytics', interns: 38, satisfaction: 4.7 },
  { dept: 'Social Media', interns: 52, satisfaction: 4.4 },
  { dept: 'Content Writing', interns: 41, satisfaction: 4.5 },
  { dept: 'Graphic Design', interns: 29, satisfaction: 4.8 },
  { dept: 'Web Dev', interns: 22, satisfaction: 4.3 },
  { dept: 'HR & Ops', interns: 18, satisfaction: 4.6 },
]

export default function Internships() {
  const convRate = ((184 / 1284) * 100).toFixed(1)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Internship Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Application funnel, department breakdown & satisfaction · 2024</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { label: 'Total Applications', value: '1,284', color: '#f97316' },
          { label: 'Conversion Rate', value: `${convRate}%`, color: '#22c55e' },
          { label: 'Departments Active', value: '6', color: '#3b82f6' },
          { label: 'Avg Satisfaction', value: '4.6/5', color: '#a855f7' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '16px 18px', borderTop: `3px solid ${s.color}`,
          }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora', color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Section title="Application Funnel" subtitle="From application to onboarding">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={internshipFunnel} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis type="number" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis dataKey="stage" type="category" tick={{ fill: '#7d8590', fontSize: 11 }} width={90} />
              <Tooltip {...tooltipStyle} formatter={v => [v, 'Candidates']} />
              <Bar dataKey="count" radius={[0,4,4,0]}>
                {internshipFunnel.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: 12, padding: '10px 14px', background: 'var(--surface2)', borderRadius: 8 }}>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>
              Drop-off: <strong style={{ color: '#f97316' }}>31.8%</strong> of applicants pass screening.
              Biggest drop is Screened → Interviewed (<strong style={{ color: '#f97316' }}>53%</strong> drop-off).
            </span>
          </div>
        </Section>

        <Section title="By Department" subtitle="Intern headcount and satisfaction score">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {departmentData.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 110, fontSize: 12, color: 'var(--muted)', flexShrink: 0 }}>{d.dept}</div>
                <div style={{ flex: 1, background: 'var(--surface2)', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 4,
                    width: `${(d.interns / 52) * 100}%`,
                    background: `linear-gradient(90deg, #f97316, #fb923c)`,
                  }} />
                </div>
                <div style={{ width: 24, fontSize: 12, color: 'var(--text)', fontWeight: 600, textAlign: 'right' }}>{d.interns}</div>
                <div style={{ fontSize: 11, color: '#22c55e', width: 34, textAlign: 'right' }}>★{d.satisfaction}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Program Improvement Recommendations">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { title: 'Fix the Interview Drop-off', desc: 'Only 47% of screened candidates get interviewed. Adding a brief async video screen before live interviews can reduce scheduling friction and increase conversion by ~15%.', color: '#f97316' },
            { title: 'Structured Onboarding Kit', desc: '184 of 198 selected interns completed onboarding (93%). A standardized digital onboarding pack can push this to 98%+.', color: '#22c55e' },
            { title: 'Data Analytics Dept. Expansion', desc: 'DA has only 38 interns but is the fastest-growing skill demand. Increase capacity to 60+ per cycle to meet organizational data needs.', color: '#3b82f6' },
            { title: 'Post-internship Alumni Network', desc: 'Convert completed interns to long-term volunteers. Alumni who stay engaged become the foundation\'s best future donors and referrers.', color: '#a855f7' },
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
