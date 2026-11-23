# Personal Portfolio - Content Customization Guide

Welcome to your personal portfolio website! This project is built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed with an editorial aesthetic tailored for **Construction Branding**, **Proprietary Management Systems**, and direct integration with your creative agency **SK PROJECTS**.

---

## 🚀 How to Run the Website Locally

Open your terminal in this directory (`/Users/mac/Desktop/Personal Portfolio`) and run:

```bash
npm run dev
```

Then visit **[http://localhost:3000](http://localhost:3000)** in your browser.

To generate a production build:
```bash
npm run build
npm start
```

---

## 📝 Where to Customize Your Content

All data is decoupled into a single configuration file:
👉 **`src/data/portfolioData.ts`**

You do **not** need to touch complex React code or layout markup to change your information.

### 1. Personal Profile & Bio
In `portfolioConfig.personal`:
- `name`: Your full name.
- `role`: Your professional title (e.g., *Brand Strategist, Systems Architect & Creative Director*).
- `headline`: The hero headline.
- `bio`: Your personal summary.
- `location`: Base city/country or remote availability.
- `statusBadge`: Current work availability indicator.
- `contactEmail` & `phone`: Direct contact details.
- `stats`: Key counters displayed under the hero (e.g. *35+ Agency Projects, 1,200+ Active System Users*).
- `socials`: Links to your LinkedIn, GitHub, Twitter/X, Instagram, etc.

### 2. SK PROJECTS Creative Agency Integration
In `portfolioConfig.agency`:
- `name`: "SK PROJECTS"
- `tagline`: Agency mission statement.
- `websiteUrl`: The live agency URL (e.g., `https://skprojects.agency`).
- `badge`: "Creative Agency Partner"
- `description`: Overview of what SK PROJECTS handles.
- `coreDisciplines`: Key agency service offerings.

### 3. Projects Portfolio
In `portfolioConfig.projects`:
You can add, edit, or remove project objects. Each project includes:
- `title` & `subtitle`: Project name & brief descriptor.
- `category`:
  - `"construction-branding"` (hoardings, fleet livery, site signage, tender decks)
  - `"management-system"` (operations ERP, asset tracking, subcontractor portal)
  - `"creative-agency"` (projects under SK PROJECTS)
- `year`: Completion or launch year.
- `client`: Client name or "Confidential".
- `role`: Your specific role on the project.
- `summary`: Short excerpt shown on the card.
- `description`: In-depth breakdown shown in the case study modal.
- `challenge` & `solution`: Before/after case study breakdown.
- `features`: Bulleted list of key features/deliverables.
- `metrics`: Quantifiable results (e.g., *+38% Bid Win Rate, -31% Equipment Downtime*).
- `tags`: Technologies, disciplines, and tools used.
- `agencyAffiliation`: e.g. "Produced under SK PROJECTS".

### 4. Deep Dives & Custom Showcases
- **Construction Branding Section**: Detailed in `src/components/BrandingShowcase.tsx` covering Site Hoardings, Fleet & Machinery Livery, Regulatory Signage, and Tender Bid Decks.
- **Custom Management System Section**: Detailed in `src/components/SystemsDeepDive.tsx` featuring an interactive simulation of an operations dashboard with live dispatches, headcount, and role-based permissions.

### 5. Services & Experience Timeline
- `portfolioConfig.services`: The 4 service pillars with specific deliverables.
- `portfolioConfig.timeline`: Your career journey and milestones.

---

## 🎨 Visual Identity & Styling
- Aesthetic: Modern dark mode with warm amber/gold accents (representing physical craft and industrial materials) and vibrant cyan accents (representing high-performance digital systems).
- Global styles & custom background patterns are configured in `src/app/globals.css`.
