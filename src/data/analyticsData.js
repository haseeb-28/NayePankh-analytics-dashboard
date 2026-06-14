// NayePankh Foundation — Simulated Analytics Data
// All figures are representative/simulated for internship project purposes

export const kpis = [
  { label: "Total Donations (PKR)", value: "₨ 18.4L", change: +12.4, sub: "vs last quarter", color: "#f97316" },
  { label: "Active Volunteers", value: "342", change: +8.7, sub: "this month", color: "#22c55e" },
  { label: "Internship Applications", value: "1,284", change: +21.3, sub: "this cycle", color: "#3b82f6" },
  { label: "Social Media Reach", value: "94.2K", change: +34.1, sub: "cumulative followers", color: "#a855f7" },
  { label: "Campaign Beneficiaries", value: "6,710", change: +5.9, sub: "lives impacted", color: "#fb923c" },
  { label: "Awareness Events", value: "47", change: +15.0, sub: "this year", color: "#22c55e" },
];

export const donationTrend = [
  { month: "Jan", donations: 95000, donors: 34 },
  { month: "Feb", donations: 112000, donors: 41 },
  { month: "Mar", donations: 143000, donors: 58 },
  { month: "Apr", donations: 108000, donors: 47 },
  { month: "May", donations: 167000, donors: 63 },
  { month: "Jun", donations: 198000, donors: 74 },
  { month: "Jul", donations: 154000, donors: 55 },
  { month: "Aug", donations: 221000, donors: 89 },
  { month: "Sep", donations: 245000, donors: 96 },
  { month: "Oct", donations: 189000, donors: 71 },
  { month: "Nov", donations: 278000, donors: 108 },
  { month: "Dec", donations: 312000, donors: 124 },
];

export const volunteerEngagement = [
  { month: "Jan", active: 180, new: 22, churned: 8 },
  { month: "Feb", active: 194, new: 28, churned: 14 },
  { month: "Mar", active: 208, new: 35, churned: 21 },
  { month: "Apr", active: 221, new: 31, churned: 18 },
  { month: "May", active: 247, new: 44, churned: 18 },
  { month: "Jun", active: 263, new: 38, churned: 22 },
  { month: "Jul", active: 279, new: 41, churned: 25 },
  { month: "Aug", active: 298, new: 47, churned: 28 },
  { month: "Sep", active: 316, new: 52, churned: 34 },
  { month: "Oct", active: 328, new: 38, churned: 26 },
  { month: "Nov", active: 338, new: 29, churned: 19 },
  { month: "Dec", active: 342, new: 21, churned: 17 },
];

export const socialMediaGrowth = [
  { month: "Jan", instagram: 12400, facebook: 18900, linkedin: 4200, twitter: 3100 },
  { month: "Feb", instagram: 13800, facebook: 19600, linkedin: 4900, twitter: 3400 },
  { month: "Mar", instagram: 15200, facebook: 20400, linkedin: 5800, twitter: 3900 },
  { month: "Apr", instagram: 17100, facebook: 21300, linkedin: 6700, twitter: 4200 },
  { month: "May", instagram: 19400, facebook: 22100, linkedin: 7900, twitter: 4800 },
  { month: "Jun", instagram: 22800, facebook: 23400, linkedin: 9100, twitter: 5300 },
  { month: "Jul", instagram: 25900, facebook: 24800, linkedin: 10600, twitter: 5900 },
  { month: "Aug", instagram: 29300, facebook: 26200, linkedin: 12400, twitter: 6700 },
  { month: "Sep", instagram: 33100, facebook: 27900, linkedin: 14200, twitter: 7400 },
  { month: "Oct", instagram: 37400, facebook: 29100, linkedin: 16100, twitter: 8200 },
  { month: "Nov", instagram: 41800, facebook: 30600, linkedin: 18400, twitter: 9100 },
  { month: "Dec", instagram: 46200, facebook: 32300, linkedin: 20900, twitter: 10100 },
];

export const campaignPerformance = [
  { name: "Education Drive", reach: 14200, conversions: 892, donations: 245000 },
  { name: "Health Awareness", reach: 9800, conversions: 641, donations: 178000 },
  { name: "Ramadan Relief", reach: 21400, conversions: 1840, donations: 412000 },
  { name: "Skill Dev. Program", reach: 7600, conversions: 428, donations: 134000 },
  { name: "Women Empowerment", reach: 11900, conversions: 763, donations: 221000 },
  { name: "Winter Clothes Drive", reach: 16700, conversions: 1120, donations: 318000 },
];

export const donorSegments = [
  { name: "One-time", value: 44, color: "#f97316" },
  { name: "Monthly", value: 28, color: "#3b82f6" },
  { name: "Quarterly", value: 16, color: "#a855f7" },
  { name: "Annual", value: 12, color: "#22c55e" },
];

export const internshipFunnel = [
  { stage: "Applications", count: 1284 },
  { stage: "Screened", count: 876 },
  { stage: "Interviewed", count: 412 },
  { stage: "Selected", count: 198 },
  { stage: "Onboarded", count: 184 },
];

export const volunteerSkills = [
  { skill: "Content Creation", count: 78 },
  { skill: "Data & Analytics", count: 54 },
  { skill: "Event Management", count: 91 },
  { skill: "Graphic Design", count: 67 },
  { skill: "Social Media", count: 83 },
  { skill: "Teaching/Tutoring", count: 112 },
  { skill: "Web Development", count: 43 },
];

export const websiteMetrics = [
  { month: "Sep", visitors: 3200, bounceRate: 68, avgSession: 1.4 },
  { month: "Oct", visitors: 4100, bounceRate: 64, avgSession: 1.7 },
  { month: "Nov", visitors: 5800, bounceRate: 61, avgSession: 2.1 },
  { month: "Dec", visitors: 7200, bounceRate: 58, avgSession: 2.4 },
];

export const insights = [
  {
    type: "warning",
    title: "High Donor Churn Risk",
    desc: "44% of donors are one-time contributors. A retention email campaign could convert 15–20% to monthly givers, adding ~₨3.2L/year.",
    action: "Launch donor nurture sequence"
  },
  {
    type: "success",
    title: "Instagram Growing Fastest",
    desc: "Instagram grew 272% YTD vs Facebook's 71%. Shifting 60% of content effort to Instagram could yield 30K+ additional reach by Q1.",
    action: "Reallocate content calendar"
  },
  {
    type: "info",
    title: "Ramadan Campaign ROI: 3.8×",
    desc: "Ramadan Relief campaign delivered the highest ROI across all campaigns at ₨412K raised. Plan a 2× budget campaign next Ramadan.",
    action: "Begin Ramadan 2025 planning"
  },
  {
    type: "warning",
    title: "Website Bounce Rate Needs Work",
    desc: "Bounce rate dropped from 68% → 58% over 4 months — progress, but still above 50% benchmark. CTA placement and page speed are likely causes.",
    action: "Run UX audit on homepage"
  },
];
