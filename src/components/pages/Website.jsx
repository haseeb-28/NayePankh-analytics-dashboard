import React from 'react'
import { websiteMetrics } from '../../data/analyticsData'
import Section from '../Section'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

const trafficSources = [
  { source: 'Organic Search', pct: 31 },
  { source: 'Social Media', pct: 27 },
  { source: 'Direct', pct: 22 },
  { source: 'Referral', pct: 12 },
  { source: 'Email', pct: 8 },
]

const pageData = [
  { page: 'Home', views: 7200, bounce: 72 },
  { page: 'About', views: 3400, bounce: 58 },
  { page: 'Programs', views: 2800, bounce: 54 },
  { page: 'Donate', views: 2100, bounce: 41 },
  { page: 'Internships', views: 4600, bounce: 38 },
  { page: 'Contact', views: 1400, bounce: 65 },
]

export default function Website() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Website Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Traffic, bounce rates & UX improvement recommendations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { label: 'Monthly Visitors', value: '7,200', color: '#3b82f6' },
          { label: 'Bounce Rate', value: '58%', color: '#f97316' },
          { label: 'Avg Session (min)', value: '2.4', color: '#22c55e' },
          { label: 'Donate Page CVR', value: '4.1%', color: '#a855f7' },
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
        <Section title="Monthly Visitors Trend" subtitle="Sep–Dec 2024 website traffic">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={websiteMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} />
              <Tooltip {...tooltipStyle} formatter={v => [v.toLocaleString(), 'Visitors']} />
              <Bar dataKey="visitors" fill="#3b82f6" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Bounce Rate Trend (%)" subtitle="Declining = improving user engagement">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={websiteMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis domain={[50, 75]} tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `${v}%`} />
              <Tooltip {...tooltipStyle} formatter={v => [`${v}%`, 'Bounce Rate']} />
              <Line type="monotone" dataKey="bounceRate" stroke="#f97316" strokeWidth={2.5} dot={{ fill: '#f97316', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Section>
      </div>

      {/* Page-level data */}
      <Section title="Page-Level Performance" subtitle="Views and bounce rate by page">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={pageData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="page" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis yAxisId="left" tick={{ fill: '#7d8590', fontSize: 11 }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `${v}%`} />
            <Tooltip {...tooltipStyle} />
            <Bar yAxisId="left" dataKey="views" name="Page Views" fill="#3b82f6" radius={[3,3,0,0]} />
            <Bar yAxisId="right" dataKey="bounce" name="Bounce %" fill="#f97316" radius={[3,3,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Section>

      {/* UX Audit */}
      <Section title="Website UX Audit — Data-Driven Fixes" subtitle="Based on traffic & bounce rate analysis">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { issue: 'Homepage Bounce Rate: 72%', fix: 'Add a prominent CTA above the fold ("Donate Now" or "Join as Volunteer"). Current homepage lacks a clear action path within the first scroll.', severity: 'high' },
            { issue: 'Donate Page CVR: 4.1%', fix: 'Add trust signals (total funds raised, beneficiary count, SSL badge) and reduce form fields from 7 to 3. A/B test a one-click PKR preset amount selector.', severity: 'high' },
            { issue: 'Internship Page: High Traffic, Low Bounce', fix: 'This is your best-performing page (38% bounce). Clone its layout strategy — clear headings, visible CTA, social proof — across other pages.', severity: 'good' },
            { issue: 'Avg Session Time: 2.4 min', fix: 'Add an impact video (60–90 seconds) to the homepage. Video pages average 3.5× longer session duration and reduce bounce rates by ~25%.', severity: 'medium' },
            { issue: 'Traffic Sources: 27% Social', fix: 'Social traffic is strong but only converts at 2.8%. Create dedicated landing pages for each social campaign instead of sending traffic to the homepage.', severity: 'medium' },
          ].map((a, i) => {
            const color = a.severity === 'high' ? '#ef4444' : a.severity === 'good' ? '#22c55e' : '#f97316'
            return (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '12px 14px',
                background: 'var(--surface2)', borderRadius: 8,
                borderLeft: `3px solid ${color}`,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color, marginBottom: 4 }}>{a.issue}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{a.fix}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
