export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "construction-branding" | "management-system" | "creative-agency" | "all";
  categoryLabel: string;
  year: string;
  client?: string;
  role: string;
  summary: string;
  description: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  agencyAffiliation?: string;
  ndaProtected?: boolean;
  ndaNotice?: string;
  featured: boolean;
  accentColor?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  bullets?: string[];
  badge?: string;
}

export const portfolioConfig = {
  siteUrl: "https://skprojects.tech", // Base domain for canonical tags & sitemap
  personal: {
    name: "Sunkanmi Olowonishaye",
    role: "Software Engineer & CTO | Construction Tech & Enterprise Systems Architect",
    headline: "Engineering Scalable Construction Intelligence Platforms & High-Impact Brand Systems.",
    bio: "Software Engineer and technical leader with 5+ years of experience building scalable web platforms, enterprise SaaS, and AI-powered applications. Currently serving as CTO on construction technology products for government and industry stakeholders, combining software engineering depth with technical project management.",
    location: "Lagos, Nigeria",
    statusBadge: "CTO & Technical Architect | Available for Strategic Engagements",
    contactEmail: "skprojectx12@gmail.com",
    emailUrl: "mailto:skprojectx12@gmail.com?subject=Project%20Inquiry%20-%20Sunkanmi%20Olowonishaye",
    phone: "08031680058",
    phoneCallUrl: "tel:+2348031680058",
    whatsapp: "08158896523",
    whatsappUrl: "https://wa.me/2348158896523?text=Hello%20Sunkanmi,%20I'm%20reaching%20out%20from%20your%20portfolio.",
    github: "https://github.com/OLOWONISHAYE-SUNKANMI",
    upwork: "https://www.upwork.com/freelancers/~016e0112602d07ca42",
    education: {
      degree: "Bachelor of Technology (B.Tech.), Project Management Technology",
      institution: "Lagos State University, Lagos, Nigeria",
      year: "2025",
    },
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Enterprise & Gov Systems", value: "3+" },
      { label: "Hardware & IoT APIs Connected", value: "10+" },
      { label: "Field Messaging Integrations", value: "WhatsApp / Telegram" },
    ],
    socials: [
      { name: "WhatsApp (08158896523)", url: "https://wa.me/2348158896523?text=Hello%20Sunkanmi,%20I'm%20reaching%20out%20from%20your%20portfolio.", icon: "MessageCircle" },
      { name: "Direct Call (08031680058)", url: "tel:+2348031680058", icon: "PhoneCall" },
      { name: "Email", url: "mailto:skprojectx12@gmail.com?subject=Project%20Inquiry%20-%20Sunkanmi%20Olowonishaye", icon: "Mail" },
      { name: "GitHub", url: "https://github.com/OLOWONISHAYE-SUNKANMI", icon: "Github" },
      { name: "Upwork Profile", url: "https://www.upwork.com/freelancers/~016e0112602d07ca42", icon: "Briefcase" },
      { name: "SK PROJECTS", url: "https://skprojects.tech/", icon: "Globe" },
    ],
  },

  // Partnership details: Upwork & SK PROJECTS
  partnership: {
    headline: "Two Engagement Channels: Independent Advisory & Full Studio Execution",
    description:
      "Depending on the scale and nature of your project, I operate across two primary channels: specialized independent technical consulting via Upwork, and multi-disciplinary creative and digital agency delivery via SK PROJECTS.",
    upwork: {
      platform: "Upwork",
      badge: "Vetted Independent Consulting",
      role: "Lead Full-Stack Software Engineer & Fractional CTO / TPM",
      tagline: "Agile, direct technical execution and system architecture for startups, enterprises, and global contractors.",
      profileUrl: "https://www.upwork.com/freelancers/~016e0112602d07ca42",
      focusAreas: [
        "Full-Stack Web Development (Next.js, TypeScript, React, Tailwind CSS)",
        "Backend & Microservices Architecture (Node.js, Express, FastAPI, Django, PostgreSQL)",
        "Hardware & Telemetry API Integrations (Trimble Connect, PUNDIT PL 200, GPR)",
        "Conversational Chat-Ops Bots (WhatsApp Business API & Telegram Webhooks)",
        "Enterprise Role-Based Access Control (RBAC) & Audit Logging",
        "Technical Project Management & Sprint Delivery (Agile / Scrum)",
      ],
      engagementTypes: [
        { title: "Fractional CTO & Architecture", desc: "High-level system design, tech stack selection, and engineering team leadership." },
        { title: "Milestone-Based MVP Builds", desc: "End-to-end development of custom SaaS, ERPs, and management platforms with clear deliverables." },
        { title: "Technical Audits & API Integrations", desc: "Connecting 3rd-party hardware, sensors, payment gateways, and regulatory reporting pipelines." },
      ],
      benefits: [
        "Direct engineer-to-client communication with zero agency overhead",
        "Transparent time tracking, milestone escrow, and global contract compliance",
        "Rapid turnaround on critical software features and bug resolutions",
      ],
    },
    agency: {
      name: "SK PROJECTS",
      badge: "Studio & Agency Partner",
      role: "Co-Founder & Technical Director / Brand Strategist",
      tagline: "Multidisciplinary creative agency engineering brand culture, spatial identities, and digital products.",
      websiteUrl: "https://skprojects.tech/",
      focusAreas: [
        "Civil & Construction Brand Identity Systems",
        "Site Perimeter Hoardings & Architectural Wayfinding",
        "Heavy Plant Machinery & Commercial Vehicle Fleet Livery",
        "Executive Public Procurement & Tender Presentation Decks",
        "Proprietary Construction Intelligence Platforms (Nexucon, Civora)",
        "Full Brand Guidelines, Vector CAD Assets & Print Specifications",
      ],
      engagementTypes: [
        { title: "Full Brand & Spatial Overhaul", desc: "Complete visual identity, site boundary hoardings, fleet livery, and compliance signage." },
        { title: "Enterprise Platform Incubation", desc: "End-to-end product design, brand identity, and software delivery for funded tech ventures." },
        { title: "Agency Retainers & Direction", desc: "Ongoing creative direction, digital infrastructure maintenance, and marketing campaigns." },
      ],
      benefits: [
        "Full creative studio team spanning brand designers, spatial graphics, and engineers",
        "Turnkey delivery of print-ready vector specifications and contractor manuals",
        "Holistic brand cohesion across physical environmental graphics and digital UI",
      ],
    },
  },

  // SK PROJECTS Creative Agency Integration
  agency: {
    name: "SK PROJECTS",
    shortName: "SKP",
    tagline: "Engineering brand systems, digital experiences, and enterprise-grade tech products.",
    websiteUrl: "https://skprojects.tech/",
    badge: "Creative & Tech Agency",
    description:
      "SK PROJECTS is our digital engineering and creative agency where we design resilient brand identities, construction technology platforms, and custom software systems for high-growth enterprises and industrial leaders.",
    coreDisciplines: [
      "Construction Branding & Visual Identity",
      "Enterprise SaaS & Management Platforms",
      "Hardware, IoT & API Integrations (Trimble, NDT, GPR)",
      "Automated Milestone & Chat-Ops Systems (WhatsApp/Telegram)",
    ],
    ctaText: "Visit skprojects.tech",
    collaborationNote:
      "All strategic brand direction, digital product architecture, and enterprise software contracts are delivered under SK PROJECTS.",
  },

  // SEO Keywords & Meta Defaults
  seo: {
    title: "Sunkanmi Olowonishaye | Construction Software Engineer & CTO | SK PROJECTS",
    description:
      "Official portfolio of Sunkanmi Olowonishaye: CTO & Software Engineer specializing in construction intelligence platforms (Nexucon, Civora), hardware integrations (Trimble Connect, PUNDIT PL 200, GPR), and construction branding via SK PROJECTS.",
    keywords: [
      "Construction Software Engineer",
      "Construction Management System",
      "Construction Technology CTO",
      "Sunkanmi Olowonishaye",
      "Olowonishaye Sunkanmi",
      "SK PROJECTS",
      "Nexucon CTO",
      "Civora Construction Platform",
      "Trimble Connect Integration",
      "PUNDIT PL 200 Integration",
      "Ground Penetrating Radar GPR Software",
      "WhatsApp Telegram Construction Bot",
      "Construction Branding Designer",
      "Site Hoardings Design",
      "Fleet Livery Construction",
      "Enterprise SaaS Architect Lagos",
      "Role Based Access Control RBAC Construction",
      "Project Management Technology LASU",
    ],
  },

  // Core Technical Skills Categorized from CV
  skillCategories: [
    {
      title: "Languages & Frontend",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "NestJS", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"],
    },
    {
      title: "Integrations & Hardware APIs",
      skills: ["REST APIs", "Trimble Connect", "PUNDIT PL 200", "Ground-Penetrating Radar (GPR)", "WhatsApp Integration", "Telegram Integration", "Google Workspace APIs", "Webhooks", "OAuth", "JWT", "Stripe", "Paystack"],
    },
    {
      title: "AI, Automation & DevOps",
      skills: ["LLM Integration", "OpenAI APIs", "Gemini APIs", "AI Agents", "Prompt Engineering", "n8n", "Workflow Automation", "Docker", "Git", "GitHub Actions", "CI/CD", "Google Cloud Platform", "Vercel", "Render"],
    },
    {
      title: "Engineering Practices",
      skills: ["Agile & Scrum", "Technical Project Management", "System Architecture", "Role-Based Access Control (RBAC)", "Microservices", "Clean Architecture", "Code Reviews"],
    },
  ],

  // Services offered
  services: [
    {
      id: "construction-tech-systems",
      title: "Construction Intelligence & Management Platforms",
      description:
        "Custom, mission-critical construction software connecting field inspection devices (Trimble Connect, PUNDIT PL 200, GPR) with government and industry executive dashboards.",
      iconName: "LayoutDashboard",
      deliverables: [
        "Government-grade oversight platforms",
        "Hardware & sensor data pipeline integration",
        "WhatsApp & Telegram bot field reporting",
        "Automated PDF milestone and audit reporting",
      ],
    },
    {
      id: "construction-branding",
      title: "Construction & Industrial Branding",
      description:
        "High-impact visual identity systems, site hoardings, machinery fleet graphics, and bid tender decks engineered through SK PROJECTS for civil and structural contractors.",
      iconName: "HardHat",
      deliverables: [
        "Brand Identity & Architectural Guidelines",
        "Site Perimeter Hoardings & Wayfinding",
        "Plant Machinery & Vehicle Fleet Livery",
        "Executive Public Procurement Bid Decks",
      ],
    },
    {
      id: "enterprise-saas-rbac",
      title: "Enterprise SaaS & Client Management Systems",
      description:
        "Custom web platforms featuring granular Role-Based Access Control (RBAC), multi-tenant data architecture, automated scheduling, and tamper-evident audit trails.",
      iconName: "Cpu",
      deliverables: [
        "Custom ERP & Client Management Hubs",
        "Granular RBAC (Admin, PM, Consultant, Auditor)",
        "Email Audit Logging & Document Traceability",
        "High-performance REST API architecture",
      ],
    },
    {
      id: "ai-automation-agents",
      title: "AI Integrations & Workflow Automation",
      description:
        "Embedding generative AI, autonomous LLM agents, and n8n webhook automations into business processes to eliminate manual report generation and field data entry.",
      iconName: "Palette",
      deliverables: [
        "OpenAI & Gemini API Integrations",
        "Autonomous AI Agents & Task Pipelines",
        "n8n Workflow & Webhook Automation",
        "Real-time Conversational Bot Operations",
      ],
    },
  ] as Service[],

  // Project portfolio items built from CV & user requirements
  projects: [
    {
      id: "nexucon-platform",
      title: "Nexucon Construction Intelligence Platform",
      subtitle: "Government & Enterprise Construction Oversight with Device Telemetry",
      category: "management-system",
      categoryLabel: "Management System",
      year: "2026",
      client: "Nexucon",
      role: "Chief Technology Officer (CTO)",
      summary:
        "A construction intelligence platform engineered for government agency stakeholders and construction professionals to oversee structural integrity, inspection data, and site execution.",
      description:
        "As CTO of Nexucon, designed, implemented, and managed this flagship platform. Architected deep hardware integrations connecting field inspection devices—including Trimble Connect, PUNDIT PL 200 (ultrasonic pulse velocity test for concrete), and ground-penetrating radar (GPR) systems—consolidating field data and non-destructive testing into a unified executive command center.",
      challenge:
        "Government and commercial stakeholders suffered from fragmented inspection reports, delayed safety audits, and isolated hardware testing devices that trapped data on physical handheld units.",
      solution:
        "Architected an integrated IoT and REST telemetry pipeline that streams ultrasonic pulse velocity tests (PUNDIT PL 200), GPR scans, and Trimble Connect BIM models directly into a secure, role-governed intelligence dashboard.",
      features: [
        "Trimble Connect BIM and spatial data integration",
        "PUNDIT PL 200 & Ground-Penetrating Radar (GPR) data pipelines",
        "Multi-stakeholder inspection approvals & compliance certificates",
        "Government agency oversight portal with real-time audit logging",
        "High-resilience microservices with automated Docker & CI/CD delivery",
      ],
      metrics: [
        { label: "Hardware Data Sources", value: "3+ NDT / GPR" },
        { label: "Inspection Velocity", value: "Real-time" },
        { label: "Stakeholder Visibility", value: "100%" },
      ],
      tags: ["System Architecture", "Trimble Connect", "PUNDIT PL 200", "GPR", "Next.js", "Node.js", "PostgreSQL", "Docker", "GCP"],
      liveUrl: "https://nexucon.net/",
      agencyAffiliation: "Powered via SK PROJECTS",
      ndaProtected: true,
      ndaNotice:
        "Protected under Non-Disclosure Agreement (NDA). Architectural concepts, hardware telemetry integration pipelines, and high-level engineering experience are shared; proprietary government schemas, raw municipal datasets, and confidential project schematics are strictly redacted.",
      featured: true,
      accentColor: "from-blue-600 to-cyan-500",
    },
    {
      id: "civora-platform",
      title: "Civora Construction Management Platform",
      subtitle: "Conversational Field Logging via WhatsApp & Telegram + Milestone Engine",
      category: "management-system",
      categoryLabel: "Management System",
      year: "2026",
      client: "Civora",
      role: "Chief Technology Officer (CTO)",
      summary:
        "An agile construction management platform allowing project engineers and stakeholders to track on-site execution directly through WhatsApp & Telegram bot integrations.",
      description:
        "Designed and implemented the Civora platform to solve one of construction's hardest challenges: site adoption. Instead of forcing field workers to fill out complicated mobile forms, built conversational WhatsApp and Telegram bot pipelines that ingest site updates, photos, and progress milestones directly into the central platform.",
      challenge:
        "Field teams frequently bypassed traditional project management software due to friction, resulting in outdated progress reports, missed deadlines, and inconsistent stakeholder updates.",
      solution:
        "Built instant messaging bot webhooks (WhatsApp Business & Telegram) connected to a PostgreSQL/FastAPI engine that parses field notes, generates milestone reports automatically, and broadcasts executive summaries.",
      features: [
        "WhatsApp & Telegram bot integrations for instant field updates",
        "Automated milestone report generation and stakeholder distribution",
        "Live budget & completion tracking for project engineers",
        "Photo and timestamp verification for daily on-site site diaries",
        "FastAPI & Node.js backend with automated notification triggers",
      ],
      metrics: [
        { label: "Field Update Latency", value: "< 30 sec" },
        { label: "Site Adoption Rate", value: "98%" },
        { label: "Milestone Automation", value: "100%" },
      ],
      tags: ["WhatsApp API", "Telegram Bot", "FastAPI", "React", "PostgreSQL", "Workflow Automation", "Milestone Engine"],
      liveUrl: "https://amijad-civora.com/",
      agencyAffiliation: "SK PROJECTS Product Portfolio",
      featured: true,
      accentColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "orr-solutions-system",
      title: "ORR Solutions Client & Project Management Suite",
      subtitle: "Multi-Role Consultant Management & Tamper-Proof Email Audit System",
      category: "management-system",
      categoryLabel: "Management System",
      year: "2026",
      client: "ORR Solutions (Malta)",
      role: "Software Engineer & Technical Project Manager",
      summary:
        "A secure client management system enabling international consultants and project managers to govern projects, schedules, and client communications.",
      description:
        "Engineered an enterprise client management platform tailored for consulting workflows. Built rigorous Role-Based Access Control (RBAC) separating project manager and consultant permissions, integrated meeting coordination, and designed a custom email audit mechanism for complete regulatory traceability.",
      features: [
        "Fine-grained Role-Based Access Control (RBAC)",
        "Automated meeting scheduling & consultant calendar sync",
        "Custom email audit engine for client communication traceability",
        "Secure relational database architecture with optimized querying",
      ],
      metrics: [
        { label: "Role Segregation", value: "100% RBAC" },
        { label: "Audit Traceability", value: "Zero Loss" },
      ],
      tags: ["RBAC", "TypeScript", "Node.js", "PostgreSQL", "Audit Engine", "Next.js"],
      featured: true,
      accentColor: "from-indigo-600 to-purple-600",
    },
    {
      id: "sk-projects-agency",
      title: "SK PROJECTS Digital & Brand Architecture",
      subtitle: "Creative Agency Platform, Brand Systems & Technical Direction",
      category: "creative-agency",
      categoryLabel: "SK PROJECTS Agency",
      year: "2026",
      client: "SK PROJECTS (skprojects.tech)",
      role: "Technical Lead & Co-Founder",
      summary:
        "The flagship agency website and design platform showcasing multidisciplinary brand culture, web applications, and construction technology products.",
      description:
        "Directed the full technical and digital brand strategy for SK PROJECTS (skprojects.tech). Positioned as an elite creative and software engineering studio producing construction branding, high-visibility identity systems, and custom software infrastructure.",
      features: [
        "Modern luxury-minimalist aesthetic and performance architecture",
        "Integrated portfolio and client consultation intake pipelines",
        "Design systems spanning physical environmental graphics and digital UI",
        "Sub-second load times with modern Next.js edge rendering",
      ],
      metrics: [
        { label: "Platform Status", value: "Live" },
        { label: "URL", value: "skprojects.tech" },
      ],
      tags: ["Next.js", "Tailwind CSS", "Brand Strategy", "Creative Agency", "Design Systems"],
      liveUrl: "https://skprojects.tech/",
      agencyAffiliation: "SK PROJECTS Flagship",
      featured: true,
      accentColor: "from-amber-400 to-orange-500",
    },
    {
      id: "construction-branding-systems",
      title: "Civil & Construction Brand Identity Suite",
      subtitle: "Site Hoardings, Equipment Livery & Public Bid Presentations",
      category: "construction-branding",
      categoryLabel: "Construction Branding",
      year: "2025 - 2026",
      client: "Civil Engineering & Contracting Partners",
      role: "Lead Brand & Spatial Strategist",
      summary:
        "High-durability visual identity systems, site hoardings, machinery fleet graphics, and bid presentation decks for civil contractors.",
      description:
        "Delivered end-to-end industrial branding for contracting leaders. Developed modular acoustic hoarding graphics, high-visibility reflective vehicle livery, site safety sign compliance, and executive bid proposal templates that communicate technical competence.",
      features: [
        "Heavy plant machinery & vehicle fleet livery specs",
        "Modular construction site hoardings and perimeter wraps",
        "Regulatory safety and wayfinding signage frameworks",
        "Executive bid & tender presentation decks (InDesign / Figma)",
      ],
      metrics: [
        { label: "Site Visibility", value: "100% Compliant" },
        { label: "Tender Win Rate", value: "+35%" },
      ],
      tags: ["Construction Branding", "Site Hoardings", "Fleet Livery", "Spatial Graphics", "Signage"],
      agencyAffiliation: "Delivered via SK PROJECTS",
      featured: true,
      accentColor: "from-amber-500 to-yellow-600",
    },
  ] as Project[],

  // Professional Experience Timeline from CV
  timeline: [
    {
      period: "2026",
      title: "Chief Technology Officer (CTO)",
      organization: "Nexucon",
      location: "Lagos, Nigeria",
      badge: "Executive Leadership",
      description:
        "Leading technical strategy, system architecture, and engineering delivery for a flagship construction intelligence platform used by government agencies and industry leaders (nexucon.net). Experience shared under NDA.",
      bullets: [
        "Design, implement, and manage a construction intelligence platform used by government agency stakeholders and construction professionals to oversee construction projects.",
        "Integrate the platform with construction devices and tools, including Trimble Connect, PUNDIT PL 200, and ground-penetrating radar (GPR) systems, bringing field and inspection data into a single system.",
        "Lead technical strategy, system architecture, and engineering delivery for the platform.",
      ],
    },
    {
      period: "2026",
      title: "Chief Technology Officer (CTO)",
      organization: "Civora",
      location: "Lagos, Nigeria",
      badge: "Construction Tech",
      description:
        "Designed and implemented a construction management platform connecting project engineers with stakeholders through conversational WhatsApp and Telegram bot pipelines (amijad-civora.com).",
      bullets: [
        "Designed and implemented a construction management platform for project engineers and stakeholders to manage and track construction projects.",
        "Built WhatsApp and Telegram integrations that let field teams submit project updates directly into the platform.",
        "Automated the generation of milestone reports for construction projects, giving stakeholders consistent progress visibility.",
      ],
    },
    {
      period: "2026",
      title: "Software Engineer / Technical Project Manager",
      organization: "ORR Solutions",
      location: "Malta",
      badge: "Enterprise SaaS",
      description:
        "Built and managed a client management system enabling international consultants and project managers to manage client projects, schedules, and audit records.",
      bullets: [
        "Build and manage a client management system that enables consultants and project managers to manage client projects and meeting schedules.",
        "Implemented role-based access control (RBAC) tailored to consultant and project manager roles.",
        "Developed an email audit feature and integrated custom database management to support traceability and client record handling.",
      ],
    },
    {
      period: "2025",
      title: "B.Tech. in Project Management Technology",
      organization: "Lagos State University",
      location: "Lagos, Nigeria",
      badge: "Education",
      description:
        "Graduated with a Bachelor of Technology in Project Management Technology, providing the foundational discipline uniting software engineering with technical project delivery.",
    },
  ] as TimelineItem[],
};
