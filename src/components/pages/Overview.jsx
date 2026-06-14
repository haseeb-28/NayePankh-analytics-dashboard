import React from 'react'
import { kpis, donationTrend, volunteerEngagement } from '../../data/analyticsData'
import KPICard from '../KPICard'
import Section from '../Section'
import InsightCard from '../InsightCard'
import { insights } from '../../data/analyticsData'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts'

const tooltipStyle = {
  contentStyle: { background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#e6edf3', fontWeight: 600 },
}

export default function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>Foundation Overview</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Annual performance summary · Jan – Dec 2024</p>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {kpis.map((k, i) => <KPICard key={i} {...k} />)}
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Section title="Donation Trend" subtitle="Monthly donations in PKR (2024)">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={donationTrend}>
              <defs>
                <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} tickFormatter={v => `₨${(v/1000).toFixed(0)}K`} />
              <Tooltip {...tooltipStyle} formatter={v => [`₨${v.toLocaleString()}`, 'Donations']} />
              <Area type="monotone" dataKey="donations" stroke="#f97316" strokeWidth={2} fill="url(#dg)" />
            </AreaChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Volunteer Growth" subtitle="Active volunteers month-over-month">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={volunteerEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" tick={{ fill: '#7d8590', fontSize: 11 }} />
              <YAxis tick={{ fill: '#7d8590', fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, color: '#7d8590' }} />
              <Bar dataKey="new" name="New" fill="#22c55e" radius={[3,3,0,0]} />
              <Bar dataKey="churned" name="Churned" fill="#ef4444" radius={[3,3,0,0]} />
              <Bar dataKey="active" name="Active" fill="#3b82f6" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Section>
      </div>

      {/* Insights */}
      <Section title="AI-Driven Insights" subtitle="Data-backed recommendations for the foundation" fullWidth>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {insights.map((ins, i) => <InsightCard key={i} {...ins} />)}
        </div>
      </Section>
    </div>
  )
}
