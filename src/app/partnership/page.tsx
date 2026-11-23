import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioConfig } from "@/data/portfolioData";
import {
  Handshake,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Palette,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Globe,
  Briefcase,
  Layers,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership: Upwork & SK PROJECTS | Sunkanmi Olowonishaye",
  description:
    "Engagement models with Sunkanmi Olowonishaye: Specialized independent technical consulting and Fractional CTO roles on Upwork, alongside multi-disciplinary creative and digital engineering through SK PROJECTS.",
  keywords: [
    "Upwork Software Engineer",
    "Upwork Fractional CTO",
    "SK PROJECTS Partnership",
    "Construction Tech Consultant Upwork",
    "Technical Project Manager Upwork",
    "SK PROJECTS skprojects.tech",
    "Sunkanmi Olowonishaye Upwork",
    "Independent Contractor Software",
  ],
  alternates: {
    canonical: "/partnership",
  },
};

export default function PartnershipPage() {
  const { partnership, agency, personal } = portfolioConfig;
  const { upwork, agency: skp } = partnership;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Handshake className="h-3.5 w-3.5" />
                <span>Strategic Partnerships &amp; Engagements</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Partnership Channels
              </h1>
              <p className="mt-4 text-xl font-medium text-amber-400">
                {partnership.headline}
              </p>
              <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                {partnership.description}
              </p>
            </div>

            {/* Quick Channel Pill Switches */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#upwork"
                className="flex items-center gap-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 transition-all hover:bg-cyan-500/10 hover:border-cyan-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Channel 01</span>
                  <h3 className="text-base font-bold text-zinc-100">Upwork: Independent Consulting</h3>
                  <p className="text-xs text-zinc-400">Direct technical sprints, fractional CTO leadership, custom API/IoT integrations.</p>
                </div>
              </a>

              <a
                href="#skprojects"
                className="flex items-center gap-4 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 transition-all hover:bg-amber-500/10 hover:border-amber-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Channel 02</span>
                  <h3 className="text-base font-bold text-zinc-100">SK PROJECTS: Full Agency Delivery</h3>
                  <p className="text-xs text-zinc-400">Construction brand identity, site hoardings, fleet livery, and digital platforms.</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Dual Channel Deep Dive Section */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* UPWORK CHANNEL CARD */}
              <div id="upwork" className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2 pb-6 border-b border-zinc-800">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      <Zap className="h-3.5 w-3.5" />
                      <span>{upwork.badge}</span>
                    </span>
                    <a
                      href={upwork.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Upwork Profile</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Role & Tagline */}
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">My Role</span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-100">
                      {upwork.role}
                    </h2>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {upwork.tagline}
                    </p>
                  </div>

                  {/* Core Deliverables on Upwork */}
                  <div className="mt-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      What I Deliver on Upwork:
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-xs text-zinc-200">
                      {upwork.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engagement Types */}
                  <div className="mt-8 border-t border-zinc-800/80 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      Contract Modalities:
                    </h3>
                    <div className="space-y-3">
                      {upwork.engagementTypes.map((type, idx) => (
                        <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3.5">
                          <h4 className="text-xs font-bold text-cyan-300">{type.title}</h4>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Advantages */}
                  <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Why Clients Hire via Upwork:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                      {upwork.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Upwork CTA */}
                <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    Direct contracts • Verified escrow • International compliance
                  </div>
                  <a
                    href={upwork.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    <span>Hire on Upwork</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* SK PROJECTS CHANNEL CARD */}
              <div id="skprojects" className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2 pb-6 border-b border-zinc-800">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                      <span>{skp.badge}</span>
                    </span>
                    <a
                      href={skp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-amber-400 hover:underline flex items-center gap-1"
                    >
                      skprojects.tech <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Role & Tagline */}
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400">My Role</span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-100">
                      {skp.role}
                    </h2>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {skp.tagline}
                    </p>
                  </div>

                  {/* Core Deliverables under SK PROJECTS */}
                  <div className="mt-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      What We Deliver at SK PROJECTS:
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-xs text-zinc-200">
                      {skp.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engagement Types */}
                  <div className="mt-8 border-t border-zinc-800/80 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      Studio Retainers &amp; Engagements:
                    </h3>
                    <div className="space-y-3">
                      {skp.engagementTypes.map((type, idx) => (
                        <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3.5">
                          <h4 className="text-xs font-bold text-amber-300">{type.title}</h4>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Advantages */}
                  <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Why Clients Partner with SK PROJECTS:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                      {skp.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* SK PROJECTS CTA */}
                <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    Full agency contract • Vector CAD specs • End-to-end design systems
                  </div>
                  <a
                    href={skp.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Visit skprojects.tech</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Which Model Is Right For You? Guide */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Decision Framework
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                Which Engagement Path Fits Your Needs?
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                Whether you need swift, targeted technical leadership or an exhaustive agency brand campaign, both paths provide direct access to my architecture expertise.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Choose Upwork If: */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Cpu className="h-4 w-4" />
                  <span>Choose Upwork / Direct Contracting When:</span>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>You need an individual <strong>Lead Full-Stack Software Engineer</strong> or <strong>Fractional CTO</strong> to architect or unblock your product.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>You need custom <strong>hardware API or device telemetry integrations</strong> (Trimble Connect, PUNDIT PL 200, Ground-Penetrating Radar).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>You want rapid <strong>WhatsApp or Telegram bot webhooks</strong> built for your field engineers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Your company prefers standard escrow milestone billing via Upwork with time-tracking protections.</span>
                  </li>
                </ul>
              </div>

              {/* Choose SK PROJECTS If: */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Palette className="h-4 w-4" />
                  <span>Choose SK PROJECTS (Agency Retainer) When:</span>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>You are an infrastructure or civil contractor requiring a full <strong>brand identity system, site hoardings, and plant fleet livery</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>You need <strong>high-stakes public procurement tender decks</strong> engineered to win tier-1 government bids.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>You require a complete multidisciplinary team (creative direction, spatial environmental graphics, and enterprise platform engineering).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>You need turnkey print-ready vector CAD cut specifications and official contractor guideline manuals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Contact Callout */}
        <section className="bg-zinc-950 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
              Ready to Discuss a Collaboration?
            </h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto">
              Send a project brief detailing your goals, timeline, and whether you are interested in an independent Upwork engagement or a full agency retainer via SK PROJECTS.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                Start a Partnership Conversation
              </Link>
              <a
                href={skp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <span>Visit skprojects.tech</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
