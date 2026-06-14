import React from 'react'
import { insights } from '../../data/analyticsData'
import InsightCard from '../InsightCard'
import Section from '../Section'

const roadmap = [
  { phase: 'Phase 1 — Immediate (0–30 days)', color: '#ef4444', items: [
    'Set up Google Analytics 4 on the website with goal tracking (donations, internship signups)',
    'Create a Meta Business Suite dashboard to centralize Instagram + Facebook metrics',
    'Build a monthly donor email retention sequence (3 emails over 6 weeks)',
    'Fix homepage CTA placement and reduce donation form fields to 3',
  ]},
  { phase: 'Phase 2 — Short-term (30–90 days)', color: '#f97316', items: [
    'Launch Instagram Reels strategy targeting 18–30 demographic',
    'Implement volunteer skill-matching system in the internship portal',
    'Create a campaign ROI tracking sheet updated after each campaign',
    'Set up churn early-warning emails for volunteers inactive 21+ days',
  ]},
  { phase: 'Phase 3 — Long-term (90–180 days)', color: '#22c55e', items: [
    'Build a live public impact dashboard on the website (beneficiaries, funds raised)',
    'Launch a "Monthly Giving Club" with exclusive updates for recurring donors',
    'Begin Ramadan 2025 campaign planning with 2× budget allocation',
    'Create an alumni network for past interns to stay engaged as volunteers',
  ]},
]

const metrics = [
  { metric: 'Donor Retention Rate', current: '56%', target: '72%', impact: 'High' },
  { metric: 'Website Bounce Rate', current: '58%', target: '42%', impact: 'High' },
  { metric: 'Monthly Intern Conversion', current: '14.3%', target: '20%', impact: 'Medium' },
  { metric: 'Instagram Engagement Rate', current: '5.9%', target: '8%', impact: 'Medium' },
  { metric: 'Avg Session Duration', current: '2.4 min', target: '3.5 min', impact: 'Medium' },
  { metric: 'Volunteer Retention', current: '91.2%', target: '95%', impact: 'Low' },
]

export default function Insights() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Insights & Recommendations</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Data-driven action plan for NayePankh Foundation · 2025 roadmap</p>
      </div>

      <Section title="Top Priority Insights" subtitle="Highest-impact actions based on data analysis">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {insights.map((ins, i) => <InsightCard key={i} {...ins} />)}
        </div>
      </Section>

      {/* KPI Targets */}
      <Section title="KPI Improvement Targets" subtitle="Current state → 2025 target with impact rating">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Metric', 'Current', 'Target 2025', 'Impact'].map(h => (
                  <th key={h} style={{ padding: '8px 14px', textAlign: 'left', color: 'var(--muted)', fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 ? 'var(--surface2)' : 'transparent' }}>
                  <td style={{ padding: '10px 14px', color: 'var(--text)', fontWeight: 500 }}>{m.metric}</td>
                  <td style={{ padding: '10px 14px', color: '#ef4444', fontWeight: 600 }}>{m.current}</td>
                  <td style={{ padding: '10px 14px', color: '#22c55e', fontWeight: 600 }}>{m.target}</td>
                  <td style={{ padding: '10px 14px' }}>
                    <span style={{
                      padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                      background: m.impact === 'High' ? 'rgba(239,68,68,0.1)' : m.impact === 'Medium' ? 'rgba(249,115,22,0.1)' : 'rgba(34,197,94,0.1)',
                      color: m.impact === 'High' ? '#ef4444' : m.impact === 'Medium' ? '#f97316' : '#22c55e',
                    }}>{m.impact}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Roadmap */}
      <Section title="Implementation Roadmap" subtitle="Phased action plan for foundation leadership">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {roadmap.map((phase, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: phase.color, marginBottom: 10 }}>{phase.phase}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {phase.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${phase.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: phase.color, fontWeight: 700 }}>{j+1}</div>
                    <span style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About card */}
      <div style={{
        background: 'var(--accent-dim)', border: '1px solid rgba(249,115,22,0.2)',
        borderRadius: 12, padding: '20px 24px', display: 'flex', gap: 20, alignItems: 'center'
      }}>
        <div style={{ fontSize: 36 }}>📊</div>
        <div>
          <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>About This Project</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
            This analytics dashboard was built as a Data Analytics Internship project for NayePankh Foundation by <strong style={{ color: 'var(--accent)' }}>Haseeb Ur Rehman</strong> (BSIT, Bahria University Islamabad, 2026). All figures are representative/simulated for demonstration purposes. Built with React, Recharts, and Vite.
          </div>
        </div>
      </div>
    </div>
  )
}
