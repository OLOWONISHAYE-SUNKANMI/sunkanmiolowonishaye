"use client";

import Image from "next/image";
import { portfolioConfig } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight, HardHat, Sparkles, MessageSquare, Radio, Shield } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const { personal, agency } = portfolioConfig;

  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28 lg:py-36 min-h-[92vh] flex items-center">
      {/* Full Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/sunkanmi-hero.jpg"
          alt="Sunkanmi Olowonishaye - CTO & Software Engineer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_2%] sm:object-[75%_0%] md:object-[80%_0%] lg:object-[82%_0%] animate-photo-reveal"
        />

        {/* Gradient Overlays:
            - Left-to-right fade: deep dark on the left so headline & text are 100% crisp and readable,
              feathering out completely on the right so Sunkanmi's face and suit are fully visible and clear.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/20 sm:via-zinc-950/80 sm:to-transparent" />

        {/* Vertical fades: smooth blend from top sticky navbar and into bottom section border */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

        {/* Ambient warm amber glow on the side */}
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Status badge with SK PROJECTS agency pill */}
          <div className="flex flex-wrap items-center gap-2.5 pb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-md px-3.5 py-1 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            <Link
              href="/partnership"
              className="group inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-zinc-950/90 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-500/20"
            >
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>Upwork &amp; {agency.name} Partner</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Name & Title */}
          <div className="mb-3">
            <span className="text-sm font-mono uppercase tracking-widest text-amber-400 font-semibold drop-shadow-md">
              {personal.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl leading-[1.12] drop-shadow-lg">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Construction Intelligence</span> &amp; Impactful <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Brand Systems</span>.
          </h1>

          {/* Subtitle / Bio */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-200 leading-relaxed max-w-xl font-normal drop-shadow">
            {personal.bio}
          </p>

          {/* Core Focus Badges from CV */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 text-xs text-zinc-200 shadow-sm">
              <Radio className="h-4 w-4 text-cyan-400" />
              <span>Trimble Connect • PUNDIT PL 200 • GPR</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 text-xs text-zinc-200 shadow-sm">
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp &amp; Telegram Field Reporting</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 text-xs text-zinc-200 shadow-sm">
              <Shield className="h-4 w-4 text-indigo-400" />
              <span>Enterprise RBAC &amp; Audit Systems</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 text-xs text-zinc-200 shadow-sm">
              <HardHat className="h-4 w-4 text-amber-400" />
              <span>Construction Branding via {agency.name}</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Portfolio of Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-zinc-950/90 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-amber-300 transition-all hover:bg-amber-500/20 active:scale-95"
            >
              <span>Partnership (Upwork &amp; {agency.name})</span>
              <ArrowUpRight className="h-4 w-4 text-amber-400" />
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-zinc-200 hover:text-amber-400 px-3 py-2 transition-colors drop-shadow"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-800/80 pt-10 sm:grid-cols-4 lg:gap-8 backdrop-blur-[2px] max-w-4xl">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-zinc-100 lg:text-3xl drop-shadow">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-zinc-300 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
