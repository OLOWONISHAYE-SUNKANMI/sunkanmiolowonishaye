import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import { portfolioConfig } from "@/data/portfolioData";
import { Briefcase, Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work & Project Portfolio | Construction Tech & Enterprise Systems",
  description:
    "Explore projects delivered by Sunkanmi Olowonishaye: Nexucon (Government construction intelligence), Civora (Chat-ops field logging), ORR Solutions (RBAC client platform), and SK PROJECTS agency brand systems.",
  keywords: [
    "Construction Tech Portfolio",
    "Nexucon",
    "Civora",
    "Sunkanmi Olowonishaye Projects",
    "Construction Software Case Studies",
    "Trimble Connect Case Study",
    "SK PROJECTS Portfolio",
  ],
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Selected Works &amp; Case Studies</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Project Portfolio &amp; Case Studies
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                A curated selection of construction intelligence platforms, conversational chat-ops engines, enterprise RBAC software, and industrial branding systems engineered across my career.
              </p>
            </div>

            {/* Quick Link Chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://nexucon.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
              >
                <span>Nexucon (nexucon.net)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://amijad-civora.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20"
              >
                <span>Civora (amijad-civora.com)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={portfolioConfig.agency.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-500/20"
              >
                <span>SK PROJECTS (skprojects.tech)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section with Full Filtering and Case Study Modals */}
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
