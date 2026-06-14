import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './components/pages/Overview'
import Fundraising from './components/pages/Fundraising'
import Volunteers from './components/pages/Volunteers'
import Internships from './components/pages/Internships'
import SocialMedia from './components/pages/SocialMedia'
import Campaigns from './components/pages/Campaigns'
import Website from './components/pages/Website'
import Insights from './components/pages/Insights'

const pages = {
  overview: Overview,
  fundraising: Fundraising,
  volunteers: Volunteers,
  internships: Internships,
  social: SocialMedia,
  campaigns: Campaigns,
  website: Website,
  insights: Insights,
}

export default function App() {
  const [activePage, setActivePage] = useState('overview')
  const PageComponent = pages[activePage] || Overview

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <Sidebar active={activePage} onSelect={setActivePage} />
      <main style={{
        flex: 1,
        padding: '32px 36px',
        overflowY: 'auto',
        maxWidth: '100%',
      }}>
        <PageComponent />
        <div style={{ height: 48 }} />
      </main>
    </div>
  )
}
