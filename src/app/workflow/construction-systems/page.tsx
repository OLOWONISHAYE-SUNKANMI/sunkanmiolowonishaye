import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemsDeepDive from "@/components/SystemsDeepDive";
import { portfolioConfig } from "@/data/portfolioData";
import { ArrowUpRight, Cpu, Radio, MessageSquare, CheckCircle2, Lock, ArrowRight, ShieldCheck, Database, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Systems Workflow | IoT Telemetry & Management Platforms",
  description:
    "Explore the construction systems workflow engineered by Sunkanmi Olowonishaye: hardware telemetry pipelines (Trimble Connect, PUNDIT PL 200, GPR), conversational field bots (WhatsApp/Telegram), and enterprise RBAC architecture.",
  keywords: [
    "Construction Systems Workflow",
    "Construction Intelligence Architecture",
    "Trimble Connect Integration",
    "PUNDIT PL 200 Concrete Testing",
    "Ground Penetrating Radar Telemetry",
    "WhatsApp Telegram Field Bots",
    "Enterprise RBAC Construction",
    "Sunkanmi Olowonishaye Systems",
  ],
  alternates: {
    canonical: "/workflow/construction-systems",
  },
};

export default function ConstructionSystemsWorkflowPage() {
  const { personal, agency } = portfolioConfig;

  const workflows = [
    {
      title: "Field Sensor & NDT Device Telemetry",
      subtitle: "Trimble Connect • PUNDIT PL 200 • GPR Radar",
      icon: Radio,
      desc: "Architecting real-time IoT and REST pipelines that stream ultrasonic pulse velocity scans, subsurface radar mappings, and BIM coordinates directly into unified dashboards.",
      highlights: [
        "Trimble Connect spatial anchors & BIM synchronization",
        "PUNDIT PL 200 ultrasonic pulse velocity (UPV) data parsing",
        "Ground-Penetrating Radar (GPR) layer verification",
        "Zero-latency automated structural integrity pass/fail scoring",
      ],
    },
    {
      title: "Conversational Chat-Ops Field Logging",
      subtitle: "WhatsApp Business & Telegram Bot Webhooks",
      icon: MessageSquare,
      desc: "Eliminating friction and form fatigue on active construction sites by enabling site engineers and supervisors to submit voice notes, photos, and daily logs directly via chat apps.",
      highlights: [
        "Natural language parsing for daily site diary updates",
        "Instant photo & GPS timestamp verification",
        "Automated milestone PDF report generation & broadcast",
        "Sub-30 second field update latency",
      ],
    },
    {
      title: "Enterprise Governance & RBAC Architecture",
      subtitle: "Role-Based Access Control & Audit Trails",
      icon: ShieldCheck,
      desc: "Constructing mission-critical platforms with strict separation of duties between municipal stakeholders, project directors, field managers, and subcontractors.",
      highlights: [
        "Granular RBAC with role-scoped data views",
        "Tamper-proof audit logs with GPS and IP stamping",
        "Subcontractor insurance & certification credential gate",
        "Multi-tenant database design with PostgreSQL & Prisma",
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
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Cpu className="h-3.5 w-3.5" />
                <span>Workflow Specialization</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Construction Systems Workflow
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                Engineering the digital nervous system for heavy construction: connecting physical field testing hardware, conversational messaging bots, and government-grade intelligence platforms.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-zinc-800 pt-8">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-cyan-400">3+</span>
                <p className="text-xs text-zinc-400 mt-1">NDT Hardware Sensors Connected</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-emerald-400">&lt; 30s</span>
                <p className="text-xs text-zinc-400 mt-1">WhatsApp Field Log Latency</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-zinc-100">100%</span>
                <p className="text-xs text-zinc-400 mt-1">RBAC Role Segregation</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-amber-400">Automated</span>
                <p className="text-xs text-zinc-400 mt-1">PDF Milestone Distribution</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core System Workflow Pillars */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl pb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                System Framework
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                The Systems Engineering Pipeline
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                How hardware data, mobile field inputs, and enterprise relational databases converge into an authoritative intelligence suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflows.map((wf, idx) => {
                const Icon = wf.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-8 flex flex-col justify-between transition-all hover:border-cyan-500/40"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400">
                            Workflow 0{idx + 1}
                          </span>
                          <h3 className="text-base font-bold text-zinc-100">
                            {wf.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 text-xs font-medium text-zinc-400">
                        {wf.subtitle}
                      </p>
                      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                        {wf.desc}
                      </p>

                      <div className="mt-6 border-t border-zinc-800/80 pt-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                          Key Capabilities:
                        </span>
                        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                          {wf.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
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

        {/* CTA Section */}
        <section className="bg-zinc-950 py-16 border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
              Need a Custom Construction Platform Built?
            </h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto">
              Available for technical architecture, IoT hardware integrations, and end-to-end platform builds via Upwork or agency engagement.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-xs font-semibold text-zinc-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
              >
                View Portfolio Case Studies
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Inquire About Systems Architecture
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
