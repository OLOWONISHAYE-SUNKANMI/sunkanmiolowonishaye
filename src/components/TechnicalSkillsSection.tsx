"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioConfig } from "@/data/portfolioData";
import {
  Cpu,
  Radio,
  Terminal,
  Database,
  Sparkles,
  Layers,
  Code2,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section is scrolled through the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollProgress(progress);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Row 1: Languages & Frontend Engineering
  const row1 = [
    { name: "TypeScript", cat: "Language", color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10" },
    { name: "Next.js (App Router)", cat: "Full-Stack", color: "border-zinc-500/30 text-zinc-200 bg-zinc-800/40" },
    { name: "React.js", cat: "Frontend", color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10" },
    { name: "Python", cat: "Language", color: "border-amber-500/30 text-amber-300 bg-amber-500/10" },
    { name: "JavaScript (ES6+)", cat: "Language", color: "border-yellow-500/30 text-yellow-300 bg-yellow-500/10" },
    { name: "Tailwind CSS", cat: "Styling", color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10" },
    { name: "SQL", cat: "Database", color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" },
    { name: "HTML5 / CSS3", cat: "Web Standards", color: "border-orange-500/30 text-orange-300 bg-orange-500/10" },
    { name: "REST APIs", cat: "Architecture", color: "border-blue-500/30 text-blue-300 bg-blue-500/10" },
    { name: "Clean Architecture", cat: "Practices", color: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10" },
  ];

  // Row 2: Hardware Telemetry, IoT & Field Messaging
  const row2 = [
    { name: "Trimble Connect API", cat: "BIM & Hardware", color: "border-amber-500/40 text-amber-300 bg-amber-500/10", hot: true },
    { name: "PUNDIT PL 200 Telemetry", cat: "Concrete NDT", color: "border-amber-500/40 text-amber-300 bg-amber-500/10", hot: true },
    { name: "Ground-Penetrating Radar (GPR)", cat: "Subsurface IoT", color: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10", hot: true },
    { name: "WhatsApp Business Integration", cat: "Chat-Ops", color: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10", hot: true },
    { name: "Telegram Bot Webhooks", cat: "Field Automation", color: "border-blue-500/40 text-blue-300 bg-blue-500/10", hot: true },
    { name: "Google Workspace APIs", cat: "Integrations", color: "border-red-500/30 text-red-300 bg-red-500/10" },
    { name: "OAuth 2.0 & JWT", cat: "Security", color: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10" },
    { name: "Webhooks Architecture", cat: "Event-Driven", color: "border-amber-500/30 text-amber-300 bg-amber-500/10" },
    { name: "Stripe & Paystack", cat: "Fintech APIs", color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" },
  ];

  // Row 3: Backend, AI Automation, Databases & DevOps
  const row3 = [
    { name: "FastAPI", cat: "Python Backend", color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" },
    { name: "Node.js & Express", cat: "Backend", color: "border-green-500/30 text-green-300 bg-green-500/10" },
    { name: "PostgreSQL & Prisma", cat: "Relational DB", color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10" },
    { name: "Role-Based Access Control (RBAC)", cat: "Enterprise Security", color: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10", hot: true },
    { name: "LLM & OpenAI APIs", cat: "Generative AI", color: "border-purple-500/30 text-purple-300 bg-purple-500/10" },
    { name: "Gemini API & AI Agents", cat: "Autonomous AI", color: "border-purple-500/30 text-purple-300 bg-purple-500/10" },
    { name: "n8n Workflow Automation", cat: "Pipelines", color: "border-pink-500/30 text-pink-300 bg-pink-500/10" },
    { name: "Docker & Containerization", cat: "DevOps", color: "border-blue-500/30 text-blue-300 bg-blue-500/10" },
    { name: "Google Cloud Platform (GCP)", cat: "Cloud Infra", color: "border-amber-500/30 text-amber-300 bg-amber-500/10" },
    { name: "CI/CD & GitHub Actions", cat: "Deployment", color: "border-zinc-500/30 text-zinc-300 bg-zinc-800/40" },
    { name: "Supabase & MongoDB", cat: "Databases", color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" },
  ];

  // Duplicate arrays to make seamless infinite loops
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];
  const duplicatedRow3 = [...row3, ...row3, ...row3];

  // Parallax scroll dynamic translations (px shift linked to user scroll)
  const shiftLeft = (scrollProgress - 0.5) * -160;
  const shiftRight = (scrollProgress - 0.5) * 160;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28"
    >
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 via-amber-500/5 to-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          <Terminal className="h-3.5 w-3.5" />
          <span>Core Capabilities &amp; Stack</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
          Technical Skills Inventory
        </h2>

        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          From full-stack enterprise web platforms and cloud microservices to non-destructive testing hardware telemetry and automated chat-ops bots.
        </p>

        {/* Scroll status pill indicator */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1 text-[11px] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>Interactive Horizontal Stream • Responds dynamically to page scroll</span>
        </div>
      </div>

      {/* Horizontal Scrolling Tracks Container */}
      <div className="mt-14 relative w-full overflow-hidden">
        {/* Left Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20" />
        {/* Right Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20" />

        <div className="space-y-4 sm:space-y-5">
          {/* TRACK 1: Moves Left + Scroll Parallax */}
          <div
            className="flex pause-on-hover"
            style={{
              transform: `translateX(${shiftLeft}px)`,
              transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div className="animate-marquee-left flex gap-3 sm:gap-4 items-center">
              {duplicatedRow1.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 hover:border-cyan-400 hover:scale-105 hover:bg-zinc-850 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default"
                >
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-mono font-medium ${item.color}`}
                  >
                    {item.cat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TRACK 2: Moves Right + Reverse Scroll Parallax (Hardware & IoT Focused) */}
          <div
            className="flex pause-on-hover"
            style={{
              transform: `translateX(${shiftRight}px)`,
              transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div className="animate-marquee-right flex gap-3 sm:gap-4 items-center">
              {duplicatedRow2.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 hover:border-amber-400 hover:scale-105 hover:bg-zinc-850 hover:shadow-lg hover:shadow-amber-500/10 cursor-default"
                >
                  {item.hot ? (
                    <Radio className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                  ) : (
                    <span className="flex h-2 w-2 rounded-full bg-amber-400" />
                  )}
                  <span className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-mono font-medium ${item.color}`}
                  >
                    {item.cat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TRACK 3: Moves Left + Scroll Parallax (Backend & AI Focused) */}
          <div
            className="flex pause-on-hover"
            style={{
              transform: `translateX(${shiftLeft * 1.2}px)`,
              transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div className="animate-marquee-left flex gap-3 sm:gap-4 items-center">
              {duplicatedRow3.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 hover:border-purple-400 hover:scale-105 hover:bg-zinc-850 hover:shadow-lg hover:shadow-purple-500/10 cursor-default"
                >
                  <span className="flex h-2 w-2 rounded-full bg-purple-400" />
                  <span className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-mono font-medium ${item.color}`}
                  >
                    {item.cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Summary Grid Below Stream */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-left">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Pillar 01</span>
            <h4 className="text-sm font-bold text-zinc-100 mt-1">Frontend &amp; UI</h4>
            <p className="text-[11px] text-zinc-400 mt-1">Next.js 16, TypeScript, React 19, Tailwind CSS v4, Responsive Architecture</p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Pillar 02</span>
            <h4 className="text-sm font-bold text-zinc-100 mt-1">Backend &amp; DBs</h4>
            <p className="text-[11px] text-zinc-400 mt-1">Node.js, FastAPI, PostgreSQL, Prisma ORM, Supabase, Microservices</p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Pillar 03</span>
            <h4 className="text-sm font-bold text-zinc-100 mt-1">Hardware &amp; IoT</h4>
            <p className="text-[11px] text-zinc-400 mt-1">Trimble Connect, PUNDIT PL 200, Ground-Penetrating Radar, Sensor Telemetry</p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">Pillar 04</span>
            <h4 className="text-sm font-bold text-zinc-100 mt-1">AI &amp; Chat-Ops</h4>
            <p className="text-[11px] text-zinc-400 mt-1">WhatsApp &amp; Telegram Bot Webhooks, OpenAI / Gemini APIs, n8n Pipelines</p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 col-span-2 md:col-span-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">Pillar 05</span>
            <h4 className="text-sm font-bold text-zinc-100 mt-1">DevOps &amp; Security</h4>
            <p className="text-[11px] text-zinc-400 mt-1">Enterprise RBAC, Docker, GCP, GitHub Actions, Agile Technical Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
