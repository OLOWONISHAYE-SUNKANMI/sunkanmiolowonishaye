import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioConfig } from "@/data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Users,
  Clock,
  ArrowRight,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Management Workflow | Technical PM & Agile Delivery",
  description:
    "Explore the technical project management methodologies engineered by Sunkanmi Olowonishaye (B.Tech. in Project Management Technology, LASU): Agile delivery, automated milestone reporting, risk governance, and cross-functional engineering.",
  keywords: [
    "Technical Project Management",
    "Project Management Technology LASU",
    "Agile Construction Management",
    "Milestone Automation Reporting",
    "Construction Scrum Master",
    "Engineering Project Manager Lagos",
    "Sunkanmi Olowonishaye TPM",
  ],
  alternates: {
    canonical: "/workflow/project-management",
  },
};

export default function ProjectManagementWorkflowPage() {
  const { personal, agency } = portfolioConfig;

  const pillars = [
    {
      title: "Agile & Scrum Engineering Cadence",
      subtitle: "Sprint Planning & Iterative Execution",
      icon: GitBranch,
      desc: "Deploying 2-week sprint cycles, daily standups, and structured backlog grooming tailored for teams delivering both cloud software and real-world field technology.",
      outputs: [
        "Jira / Linear Sprint Boards & Burndown Charts",
        "Granular Work Breakdown Structures (WBS)",
        "Bi-weekly Retrospectives & Velocity Tracking",
        "Continuous Delivery & Feature Flags",
      ],
    },
    {
      title: "Automated Milestone & Stakeholder Reporting",
      subtitle: "Transparent Progress Visibility",
      icon: FileCheck2,
      desc: "Eliminating manual status meetings through automated progress pipelines that generate real-time PDF executive briefs from live site and developer commits.",
      outputs: [
        "Real-Time Stakeholder Progress Portals",
        "Automated Weekly PDF Milestone Reports",
        "WhatsApp / Telegram Broadcast Summaries",
        "Audit-Proof Date & GPS Verification",
      ],
    },
    {
      title: "Budget Control & Job-Costing Governance",
      subtitle: "Variance Tracking & Requisition Gates",
      icon: TrendingUp,
      desc: "Implementing multi-tier approval thresholds and live job-costing engines that prevent cost overruns before procurement purchase orders are committed.",
      outputs: [
        "Live Budget Variance vs. Actuals",
        "Multi-tier Requisition Authorization Gates",
        "Subcontractor Timesheet & Milestone Audits",
        "Financial Export to Enterprise ERPs",
      ],
    },
    {
      title: "Risk Mitigation & Regulatory Compliance",
      subtitle: "Health, Safety & Contractual Protections",
      icon: ShieldCheck,
      desc: "Rigorous compliance monitoring covering environmental safety, contractor insurance, and non-disclosure data protections.",
      outputs: [
        "Dynamic Risk Assessment Matrix",
        "Subcontractor CSCS & Induction Credential Vault",
        "Strict NDA & Intellectual Property Safeguards",
        "Incident Logging & Remediation Tracking",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Workflow Specialization</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Technical Project Management Workflow
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                Combining formal academic discipline in <strong className="text-zinc-100">Project Management Technology</strong> from Lagos State University with 5+ years of real-world engineering leadership as CTO and Technical Project Manager.
              </p>
            </div>

            {/* Academic Credential Banner */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-400 shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                    Academic Foundation
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 mt-0.5">
                    {personal.education.degree}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {personal.education.institution} • Graduated {personal.education.year}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300">
                  Agile &amp; Scrum
                </span>
                <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300">
                  Risk Management
                </span>
                <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300">
                  Critical Path Method (CPM)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core PM Workflow Pillars */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl pb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Delivery Framework
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                End-to-End Project Governance
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                How technical complexity is translated into predictable milestones, on-time deployments, and zero budget leakage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-8 flex flex-col justify-between transition-all hover:border-indigo-500/40"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-400">
                            Pillar 0{idx + 1}
                          </span>
                          <h3 className="text-lg font-bold text-zinc-100">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 text-xs font-medium text-zinc-400">
                        {pillar.subtitle}
                      </p>
                      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                        {pillar.desc}
                      </p>

                      <div className="mt-6 border-t border-zinc-800/80 pt-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                          Key Deliverables:
                        </span>
                        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                          {pillar.outputs.map((out, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real-World Case Study Delivery */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Real-World Technical PM Engagements
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              Proven track record delivering client management systems and field engineering platforms across international jurisdictions.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <span className="text-xs font-mono text-cyan-400 font-semibold">MALTA • ORR SOLUTIONS (2026)</span>
                <h3 className="text-lg font-bold text-zinc-100 mt-2">
                  Client Management &amp; Role-Based Governance
                </h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                  Served as Software Engineer &amp; Technical Project Manager, coordinating consultants, client meeting workflows, and tamper-evident email audit trails.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">RBAC Architecture</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">Audit Logging</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">Client Scheduling</span>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <span className="text-xs font-mono text-emerald-400 font-semibold">LAGOS, NIGERIA • CIVORA (2026)</span>
                <h3 className="text-lg font-bold text-zinc-100 mt-2">
                  Automated Milestone Reporting Engine
                </h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                  Led engineering delivery connecting WhatsApp/Telegram site reporting with automatic milestone PDF distribution, giving stakeholders 100% progress visibility.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">Chat-Ops Webhooks</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">Automated PDF Reports</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">FastAPI &amp; PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-zinc-900 to-zinc-950 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Engagement Options
                </span>
                <h3 className="text-xl font-bold text-zinc-100 mt-1">
                  Hire for Technical Project Management or Fractional CTO
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  Available for independent consulting sprints on Upwork or full project governance contracts.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={personal.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Hire on Upwork</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-3 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
                >
                  Direct Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
