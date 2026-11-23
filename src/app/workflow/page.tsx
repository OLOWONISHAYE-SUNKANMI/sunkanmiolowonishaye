import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioConfig } from "@/data/portfolioData";
import {
  Sparkles,
  Cpu,
  Briefcase,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  GitBranch,
  TrendingUp,
  Workflow,
  Radio,
  Truck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering & Creative Workflows | Sunkanmi Olowonishaye",
  description:
    "Explore the three core workflow pillars engineered by Sunkanmi Olowonishaye: Construction Branding (SK PROJECTS), Construction Systems (IoT & telemetry), and Project Management (Agile & B.Tech. LASU credentials).",
  keywords: [
    "Sunkanmi Olowonishaye Workflows",
    "Construction Branding Workflow",
    "Construction Systems Workflow",
    "Technical Project Management Workflow",
    "SK PROJECTS Studio",
    "Civil Engineering Software",
    "IoT Construction Telemetry",
  ],
  alternates: {
    canonical: "/workflow",
  },
};

export default function WorkflowHubPage() {
  const workflows = [
    {
      id: "construction-branding",
      title: "Construction Branding",
      subtitle: "Site Hoardings, Fleet Livery & Architectural Wayfinding",
      description:
        "High-impact physical and digital visual assets engineered specifically for civil engineering firms, commercial developers, and heavy plant fleets.",
      icon: Sparkles,
      href: "/workflow/construction-branding",
      badge: "Creative Agency • SK PROJECTS",
      accentColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      buttonColor: "bg-amber-400 text-zinc-950 hover:bg-amber-300",
      capabilities: [
        "High-resolution modular perimeter hoardings (vector, scale 1:1)",
        "Heavy plant machinery & logistics fleet reflective livery",
        "OSHA / HSE compliant architectural safety wayfinding",
        "Tender bid pitch decks & investor presentation graphics",
      ],
      leadTime: "1 – 3 Weeks",
      output: "Print-ready vector assets, 3D mockups & guidelines",
    },
    {
      id: "construction-systems",
      title: "Construction Systems",
      subtitle: "IoT Telemetry, Field Bots & Enterprise Platforms",
      description:
        "Mission-critical hardware integration pipelines, real-time sensor telemetry, and low-friction mobile field reporting bots designed for challenging site environments.",
      icon: Cpu,
      href: "/workflow/construction-systems",
      badge: "Software Engineering & IoT",
      accentColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      buttonColor: "bg-cyan-400 text-zinc-950 hover:bg-cyan-300",
      capabilities: [
        "Hardware ingestion: Trimble Connect, PUNDIT PL 200, GPR scans",
        "Conversational WhatsApp & Telegram site loggers & field bots",
        "Hierarchical RBAC: Client, Site Engineer, Subcontractor, Auditor",
        "Sub-second sync with offline-first PWA resilience",
      ],
      leadTime: "2 – 6 Weeks",
      output: "Full-stack cloud platform, APIs & mobile interfaces",
    },
    {
      id: "project-management",
      title: "Project Management",
      subtitle: "Agile Delivery, Risk Governance & B.Tech. Credentials",
      description:
        "Rigorous technical project governance rooted in a formal B.Tech. in Project Management Technology from Lagos State University (LASU 2025).",
      icon: Briefcase,
      href: "/workflow/project-management",
      badge: "B.Tech. PM Technology (LASU)",
      accentColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      buttonColor: "bg-emerald-400 text-zinc-950 hover:bg-emerald-300",
      capabilities: [
        "Critical Path Method (CPM) & Agile dual-track scheduling",
        "Automated stakeholder reporting & sprint velocity tracking",
        "Subcontractor milestone verification & budget audit trails",
        "Cross-functional alignment between engineering & field ops",
      ],
      leadTime: "Ongoing / Sprint-based",
      output: "Sprint dashboards, risk registers & executive briefs",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Discovery & Field Audit",
      description:
        "We audit existing field constraints, hardware protocols, design requirements, and stakeholder reporting obligations before writing any code or drafts.",
    },
    {
      step: "02",
      title: "Architecture & Prototyping",
      description:
        "Rapid validation through high-fidelity visual mockups, API schema drafts, and architectural specs to ensure technical and commercial viability.",
    },
    {
      step: "03",
      title: "Agile Execution & Deployment",
      description:
        "Bi-weekly sprint deliverables, automated telemetry pipelines, print-ready vector production, or staging environment reviews with live demos.",
    },
    {
      step: "04",
      title: "Handover & Operational Training",
      description:
        "Comprehensive documentation, role-based onboarding, field training videos, and post-launch telemetry monitoring for peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-400 selection:text-zinc-950">
      <Navbar />

      <main className="py-16 sm:py-24">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Workflow className="h-3.5 w-3.5" />
              <span>Multi-Disciplinary Engineering Workflows</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
              Specialized Execution Frameworks Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Civil Infrastructure &amp; Modern Tech
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Bridging the gap between heavy construction reality and elite software craftsmanship. 
              Each workflow represents an engineered, repeatable operational model honed across multi-million dollar 
              civil projects, IoT sensor integrations, and studio creative delivery.
            </p>
          </div>

          {/* 3 Core Workflow Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {workflows.map((wf) => {
              const Icon = wf.icon;
              return (
                <div
                  key={wf.id}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-700 transition-all group hover:shadow-xl"
                >
                  <div>
                    {/* Header Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${wf.accentColor} transition-transform group-hover:scale-105`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-zinc-800/80 px-2.5 py-1 text-[11px] font-mono text-zinc-300 border border-zinc-700/60">
                        {wf.badge}
                      </span>
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {wf.title}
                    </h2>
                    <p className="text-xs font-semibold text-zinc-400 mt-1">
                      {wf.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {wf.description}
                    </p>

                    {/* Capabilities checklist */}
                    <div className="mt-6 space-y-2.5 border-t border-zinc-800/80 pt-5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Key Capabilities:
                      </span>
                      {wf.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-400" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs / Meta */}
                    <div className="mt-6 grid grid-cols-2 gap-3 rounded-lg border border-zinc-800/60 bg-zinc-950/60 p-3 text-[11px]">
                      <div>
                        <span className="text-zinc-500 block">Typical Delivery:</span>
                        <span className="text-zinc-200 font-mono font-medium">{wf.leadTime}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Core Output:</span>
                        <span className="text-zinc-200 font-medium line-clamp-1">{wf.output}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-5 border-t border-zinc-800">
                    <Link
                      href={wf.href}
                      className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 px-4 text-xs font-semibold transition-all shadow-sm ${wf.buttonColor}`}
                    >
                      <span>Explore {wf.title} Workflow</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified 4-Step Methodology */}
          <div className="mt-24 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950 p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Structured Governance
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                How We Execute: From Field Requirements to Live Delivery
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400">
                Whether deploying a hardware telemetry ingestion pipeline or rolling out 200m of perimeter hoardings, 
                our execution adheres to four non-negotiable milestones:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {methodologySteps.map((m) => (
                <div
                  key={m.step}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 relative"
                >
                  <span className="font-mono text-2xl font-extrabold text-amber-400/40">
                    {m.step}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-zinc-100">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Engagement Channels */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Upwork */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-400 border border-cyan-500/20">
                  Global Freelance &amp; Enterprise
                </span>
                <h4 className="mt-3 text-lg font-bold text-zinc-100">
                  Hire on Upwork
                </h4>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Direct client contracts, escrow milestone security, and verified track record for international 
                  consulting, full-stack architecture, and technical project management.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a
                  href={portfolioConfig.personal.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>View Upwork Profile &amp; Hire</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* SK PROJECTS Agency */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-400 border border-amber-500/20">
                  Creative Studio Retainers
                </span>
                <h4 className="mt-3 text-lg font-bold text-zinc-100">
                  Partner with SK PROJECTS
                </h4>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Dedicated brand identity, corporate construction collateral, 3D site visualizations, and comprehensive 
                  digital agency engagements led by Sunkanmi Olowonishaye.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a
                  href={portfolioConfig.agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Visit skprojects.tech Studio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="mt-16 text-center rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
              Ready to Accelerate Your Construction or Engineering Project?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Get in touch to review your technical requirements, architectural telemetry stack, or branding pipeline.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-400 px-5 py-2.5 text-xs font-bold text-zinc-950 hover:bg-amber-300 transition-colors shadow-sm"
              >
                Initiate Project Discussion
              </Link>
              <Link
                href="/partnership"
                className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
