"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Users,
  Radio,
  MessageSquare,
  FileText,
  Check,
  ChevronRight,
  Database,
  Cpu,
} from "lucide-react";

export default function SystemsDeepDive() {
  const [activePlatform, setActivePlatform] = useState<"nexucon" | "civora" | "orr">("nexucon");

  return (
    <section id="management-systems" className="relative border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28 bg-dot-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>CTO &amp; Systems Architecture Portfolio</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Construction Intelligence &amp; Enterprise Platforms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Leading the technical architecture and delivery of mission-critical systems: connecting real-world non-destructive testing hardware (PUNDIT PL 200, GPR) with government dashboards, conversational WhatsApp/Telegram site reporting, and role-based client hubs.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActivePlatform("nexucon")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              activePlatform === "nexucon"
                ? "bg-cyan-500 text-zinc-950 shadow-lg shadow-cyan-500/20"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Radio className="h-4 w-4" />
            <span>Nexucon (Gov &amp; Hardware Telemetry)</span>
          </button>
          <button
            onClick={() => setActivePlatform("civora")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              activePlatform === "civora"
                ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Civora (WhatsApp &amp; Telegram Bots)</span>
          </button>
          <button
            onClick={() => setActivePlatform("orr")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              activePlatform === "orr"
                ? "bg-indigo-500 text-zinc-100 shadow-lg shadow-indigo-500/20"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>ORR Solutions (RBAC &amp; Email Audit)</span>
          </button>
        </div>

        {/* Content Showcase */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Platform UI Architecture Display */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-2xl backdrop-blur-sm">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">
                    {activePlatform === "nexucon"
                      ? "nexucon.internal / government-intelligence-hub"
                      : activePlatform === "civora"
                      ? "civora.app / chat-ops-stream"
                      : "orr-solutions.eu / rbac-audit-center"}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE • PRODUCTION
                </span>
              </div>

              {/* Dynamic Mockup View Based on Platform */}
              {activePlatform === "nexucon" && (
                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                      <span className="text-[10px] text-zinc-400 uppercase font-mono">Trimble Connect</span>
                      <div className="text-sm font-bold text-cyan-400 mt-1">BIM Sync Active</div>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                      <span className="text-[10px] text-zinc-400 uppercase font-mono">PUNDIT PL 200</span>
                      <div className="text-sm font-bold text-amber-400 mt-1">UPV Scans Ingested</div>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                      <span className="text-[10px] text-zinc-400 uppercase font-mono">GPR Radar</span>
                      <div className="text-sm font-bold text-emerald-400 mt-1">Subsurface Cleared</div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 pb-3 border-b border-zinc-800/80">
                      <span>Government &amp; Ministry Infrastructure Audit Feed</span>
                      <span className="text-[10px] font-mono text-cyan-400">REST API v2.4</span>
                    </div>
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 p-2.5">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                          <div>
                            <div className="font-semibold text-zinc-200">Lagos Coastal Highway - Pier Sector 4</div>
                            <div className="text-[10px] text-zinc-400">PUNDIT PL 200: Concrete pulse velocity 4,210 m/s (Grade A)</div>
                          </div>
                        </div>
                        <span className="rounded bg-zinc-800 px-2 py-1 font-mono text-[10px] text-zinc-300">
                          Verified Safe
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 p-2.5">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <div>
                            <div className="font-semibold text-zinc-200">Municipal Bridge Deck B-12</div>
                            <div className="text-[10px] text-zinc-400">GPR Subsurface Scan: Rebar depth mapped with Trimble spatial anchor</div>
                          </div>
                        </div>
                        <span className="rounded bg-zinc-800 px-2 py-1 font-mono text-[10px] text-zinc-300">
                          Trimble Linked
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activePlatform === "civora" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 pb-3 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-emerald-400" />
                        <span>Conversational Field Ingestion Webhook</span>
                      </div>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                        WhatsApp &amp; Telegram Live
                      </span>
                    </div>

                    <div className="mt-3 space-y-2.5 text-xs font-mono">
                      <div className="rounded-lg bg-zinc-900 p-2.5 text-zinc-300">
                        <span className="text-emerald-400 font-semibold">[WhatsApp Bot +234...]</span>: &ldquo;Site Eng. Babatunde: Concrete pour for Tower 2 Slab completed. 420m³ pumped. Slump test 120mm confirmed.&rdquo;
                      </div>
                      <div className="rounded-lg bg-zinc-900 p-2.5 text-zinc-300">
                        <span className="text-cyan-400 font-semibold">[Civora Parser]</span>: &rarr; Milestone #4 logged. 1 photo parsed. Daily progress updated to 78%.
                      </div>
                      <div className="rounded-lg bg-zinc-900 p-2.5 text-zinc-300">
                        <span className="text-amber-400 font-semibold">[Milestone Engine]</span>: Automated PDF Milestone Report generated &amp; broadcasted to 6 project stakeholders.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                      <div className="text-zinc-400">Field Friction</div>
                      <div className="text-lg font-bold text-emerald-400 mt-1">Zero Form Fatigue</div>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                      <div className="text-zinc-400">Milestone Reporting</div>
                      <div className="text-lg font-bold text-zinc-100 mt-1">100% Automated</div>
                    </div>
                  </div>
                </div>
              )}

              {activePlatform === "orr" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 pb-3 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-indigo-400" />
                        <span>Role-Based Access Control (RBAC) &amp; Email Traceability</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400">ORR Solutions (Malta)</span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 p-2.5">
                        <span className="text-zinc-200">Role: Senior Consultant</span>
                        <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-indigo-300 font-mono text-[10px]">Scoped Access</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 p-2.5">
                        <span className="text-zinc-200">Role: Technical Project Manager</span>
                        <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-indigo-300 font-mono text-[10px]">Project &amp; Schedule Oversight</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 p-2.5">
                        <span className="text-zinc-200">Email Audit Trail Mechanism</span>
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 font-mono text-[10px]">Tamper-Proof Logs</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom bar */}
              <div className="mt-4 rounded-lg bg-zinc-900/40 p-3 text-xs text-zinc-400 flex items-center justify-between">
                <span>Role: <strong>Chief Technology Officer (CTO) &amp; Lead Architect</strong></span>
                <span className="text-cyan-400 font-mono text-[11px]">Clean Architecture • RBAC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Deep-Dive Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {activePlatform === "nexucon" && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <span>CTO Delivery (2026) | Nexucon</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  Nexucon Construction Intelligence Platform
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Serving as CTO, I designed, implemented, and manage this flagship platform utilized by government agency stakeholders and civil engineering professionals to oversee major infrastructure projects.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 shrink-0">
                      <Radio className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">Hardware &amp; NDT Device Integration</h4>
                      <p className="text-xs text-zinc-400">Integrated Trimble Connect, PUNDIT PL 200 (ultrasonic concrete testing), and Ground-Penetrating Radar (GPR) into a unified telemetry pipeline.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">Government Agency Oversight</h4>
                      <p className="text-xs text-zinc-400">Provided state ministries and regulatory inspectors with unalterable, real-time audit trails of structural integrity test results.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlatform === "civora" && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span>CTO Delivery (2026) | Civora</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  Civora Construction Management Platform
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Designed and implemented an agile platform that removes the friction of construction software adoption by turning WhatsApp and Telegram into field reporting terminals.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 shrink-0">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">WhatsApp &amp; Telegram Bot Pipelines</h4>
                      <p className="text-xs text-zinc-400">Field teams submit voice notes, text updates, and site photos directly via chat apps, automatically parsed into the central database.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">Automated Milestone Reporting</h4>
                      <p className="text-xs text-zinc-400">Instant generation of PDF progress and budget reports delivered to project investors and engineering leads without manual data entry.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlatform === "orr" && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                  <span>Software Engineer &amp; TPM (2026) | ORR Solutions</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  ORR Solutions Client &amp; Project Management
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Built and manage a robust enterprise client management system in Malta, empowering consultants and project managers to govern accounts, appointments, and project scopes.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-300 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">Tailored Role-Based Access Control</h4>
                      <p className="text-xs text-zinc-400">Strict separation of duties between consultants, managers, and administrators for enterprise security.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-300 shrink-0">
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">Email Audit &amp; Custom DB Management</h4>
                      <p className="text-xs text-zinc-400">Engineered complete client communication audit logging supporting regulatory compliance and client record handling.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 border-t border-zinc-800 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
              >
                <span>Inquire About Custom Platform Architecture</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
