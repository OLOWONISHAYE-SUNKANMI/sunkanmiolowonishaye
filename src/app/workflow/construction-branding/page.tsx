import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandingShowcase from "@/components/BrandingShowcase";
import { portfolioConfig } from "@/data/portfolioData";
import { HardHat, Sparkles, ArrowUpRight, ArrowRight, CheckCircle2, Shield, Truck, Compass, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Branding Workflow | Site Hoardings & Fleet Livery Systems",
  description:
    "End-to-end branding workflow for civil contractors and construction leaders engineered by Sunkanmi Olowonishaye via SK PROJECTS: perimeter hoardings, vehicle livery, safety wayfinding, and tender decks.",
  keywords: [
    "Construction Branding Workflow",
    "Construction Brand Identity",
    "Site Hoardings Design",
    "Plant Machinery Fleet Livery",
    "Architectural Wayfinding Signage",
    "Civil Engineering Branding",
    "Construction Bid Deck Design",
    "SK PROJECTS Construction Branding",
  ],
  alternates: {
    canonical: "/workflow/construction-branding",
  },
};

export default function ConstructionBrandingWorkflowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <HardHat className="h-3.5 w-3.5" />
                <span>Workflow Specialization</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Construction Branding Workflow
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                Branding for heavy industry demands materials engineered for harsh site weather, massive physical scale, strict health &amp; safety compliance, and compelling public bid presentations. Delivered through{" "}
                <a
                  href={portfolioConfig.agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold underline decoration-amber-500/40 hover:decoration-amber-400"
                >
                  {portfolioConfig.agency.name} (skprojects.tech)
                </a>.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-zinc-800 pt-8">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-amber-400">18+</span>
                <p className="text-xs text-zinc-400 mt-1">Contractor Brands Elevated</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-zinc-100">100%</span>
                <p className="text-xs text-zinc-400 mt-1">Site Safety &amp; CDM Compliance</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-amber-400">+35%</span>
                <p className="text-xs text-zinc-400 mt-1">Average Tender Bid Win Lift</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <span className="text-2xl font-bold text-zinc-100">Class R2</span>
                <p className="text-xs text-zinc-400 mt-1">Reflective Fleet Specifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Showcase Core */}
        <BrandingShowcase />

        {/* Detailed Disciplines Breakdown */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-100">
              Complete Contractor Branding Lifecycle
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              From the drawing board to vector cut-ready vinyl and site hoardings, every project is delivered with comprehensive architectural guidelines.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className="text-amber-400 font-mono text-xs font-semibold">01 / PHYSICAL PRESENCE</div>
                <h3 className="mt-2 text-lg font-bold text-zinc-100">Site Boundary &amp; Hoardings</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Turn perimeter hoardings into high-traffic brand assets with acoustic wraps, 3D illuminated letters, and pedestrian wayfinding.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className="text-amber-400 font-mono text-xs font-semibold">02 / FLEET &amp; MACHINERY</div>
                <h3 className="mt-2 text-lg font-bold text-zinc-100">Heavy Plant Vehicle Livery</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Weatherproof, chemical-resistant livery kits for flatbeds, vans, excavators, and tower cranes projecting authority and scale.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className="text-amber-400 font-mono text-xs font-semibold">03 / PROCUREMENT &amp; BIDS</div>
                <h3 className="mt-2 text-lg font-bold text-zinc-100">High-Stakes Tender Decks</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Engineered presentation templates and method statement graphics that win commercial and government infrastructure contracts.
                </p>
              </div>
            </div>

            {/* Link to SK PROJECTS */}
            <div className="mt-12 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-zinc-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Agency Execution
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-100">
                  Commission a Full Branding Project via SK PROJECTS
                </h3>
                <p className="mt-1 text-xs text-zinc-300">
                  All branding packages include complete vector files, material specifications, and contractor guideline manuals.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={portfolioConfig.agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Visit skprojects.tech</span>
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
