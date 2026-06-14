# NayePankh Foundation — Analytics Dashboard

A professional data analytics dashboard built as an internship project for NayePankh Foundation.

**Built by:** Haseeb Ur Rehman | BSIT, Bahria University Islamabad (2026)  
**Stack:** React 18 + Vite + Recharts + Lucide Icons

---

## Pages

| Page | Description |
|------|-------------|
| Overview | KPI summary, donation trend, volunteer growth, key insights |
| Fundraising | Donation trends, donor segments, retention rate |
| Volunteers | Engagement, skill radar, growth trajectory |
| Internships | Application funnel, department breakdown, satisfaction |
| Social Media | Follower growth, engagement rates, platform comparison |
| Campaigns | ROI, reach vs conversions, campaign table |
| Website | Traffic, bounce rates, UX audit with fixes |
| Insights | Priority actions, KPI targets, 3-phase roadmap |

---

## How to Run

### Prerequisites
- Node.js 16+ installed ([nodejs.org](https://nodejs.org))

### Steps

```bash
# 1. Enter project folder
cd nayepankh-dashboard

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
nayepankh-dashboard/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── analyticsData.js       ← All simulated data
    └── components/
        ├── KPICard.jsx
        ├── Section.jsx
        ├── InsightCard.jsx
        ├── Sidebar.jsx
        └── pages/
            ├── Overview.jsx
            ├── Fundraising.jsx
            ├── Volunteers.jsx
            ├── Internships.jsx
            ├── SocialMedia.jsx
            ├── Campaigns.jsx
            ├── Website.jsx
            └── Insights.jsx
```

---

> All figures are representative/simulated for internship demonstration purposes.
