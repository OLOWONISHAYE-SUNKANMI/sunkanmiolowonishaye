import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemsDeepDive from "@/components/SystemsDeepDive";
import { portfolioConfig } from "@/data/portfolioData";
import { ArrowUpRight, ShieldAlert, Cpu, Radio, MessageSquare, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Management Systems & Intelligence Platforms | CTO Architecture",
  description:
    "Explore proprietary construction software engineered by Sunkanmi Olowonishaye: Nexucon (government oversight & NDT device telemetry via Trimble, PUNDIT PL 200, GPR) and Civora (WhatsApp/Telegram field reporting).",
  keywords: [
    "Construction Management System",
    "Construction Intelligence Platform",
    "Nexucon CTO",
    "Civora Construction",
    "Trimble Connect Integration",
    "PUNDIT PL 200 Integration",
    "Ground Penetrating Radar GPR Software",
    "Construction Software Engineer",
    "WhatsApp Telegram Field Reporting",
    "Role Based Access Control RBAC Construction",
  ],
  alternates: {
    canonical: "/management-systems",
  },
};

export default function ManagementSystemsPage() {
  const nexuconProject = portfolioConfig.projects.find((p) => p.id === "nexucon-platform");
  const civoraProject = portfolioConfig.projects.find((p) => p.id === "civora-platform");
  const orrProject = portfolioConfig.projects.find((p) => p.id === "orr-solutions-system");

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Cpu className="h-3.5 w-3.5" />
                <span>Dedicated Systems Architecture Page</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Construction Management Systems &amp; Intelligence
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                As Chief Technology Officer on flagship construction tech products, I engineer software that bridges physical job sites, inspection hardware telemetry, and enterprise oversight dashboards.
              </p>
            </div>

            {/* NDA Notice Banner */}
            <div className="mt-10 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-950 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-500/20 p-2.5 text-amber-400 shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Non-Disclosure Agreement (NDA) &amp; Confidentiality Notice
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Details of the <strong>Nexucon</strong> platform are protected under formal NDA. Proprietary government agency datasets, internal municipal codes, and client infrastructure schematics are strictly confidential and redacted. The information shared below reflects high-level engineering experience, hardware telemetry architectures, and publicly deliverable achievements.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs">
                    <a
                      href="https://nexucon.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Visit Nexucon Portal (nexucon.net)</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://amijad-civora.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Visit Civora Platform (amijad-civora.com)</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Systems Architecture Simulation */}
        <SystemsDeepDive />

        {/* In-Depth System Cards */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl pb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Detailed Platforms
              </span>
              <h2 className="mt-2 text-3xl font-bold text-zinc-100">
                Deep Dive: Nexucon, Civora &amp; ORR Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Nexucon Card */}
              {nexuconProject && (
                <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                        Nexucon • CTO (2026)
                      </span>
                      <a
                        href="https://nexucon.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                      >
                        nexucon.net <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-zinc-100">
                      {nexuconProject.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {nexuconProject.subtitle}
                    </p>

                    <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-300">
                      <Lock className="h-3.5 w-3.5 inline mr-1.5" />
                      {nexuconProject.ndaNotice}
                    </div>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {nexuconProject.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Hardware &amp; IoT Integrations:
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                        {nexuconProject.features?.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {nexuconProject.tags.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://nexucon.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      Visit Site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Civora Card */}
              {civoraProject && (
                <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Civora • CTO (2026)
                      </span>
                      <a
                        href="https://amijad-civora.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
                      >
                        amijad-civora.com <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-zinc-100">
                      {civoraProject.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {civoraProject.subtitle}
                    </p>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {civoraProject.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Chat-Ops &amp; Automation Architecture:
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                        {civoraProject.features?.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {civoraProject.tags.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://amijad-civora.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      Visit Site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-zinc-950 py-16 border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
              Need a Custom Construction Platform or CTO Leadership?
            </h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto">
              Whether you need to connect field IoT inspection hardware or eliminate form fatigue through automated chat bots, let&apos;s discuss your engineering requirements.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-cyan-400 transition-colors"
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
