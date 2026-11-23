import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgencyBanner from "@/components/AgencyBanner";
import { portfolioConfig } from "@/data/portfolioData";
import { Sparkles, Globe, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SK PROJECTS | Creative & Digital Technology Studio",
  description:
    "SK PROJECTS (skprojects.tech) is the creative and software engineering studio co-founded by Sunkanmi Olowonishaye, delivering construction branding, bespoke SaaS platforms, and enterprise digital solutions.",
  keywords: [
    "SK PROJECTS",
    "skprojects.tech",
    "Creative Agency Lagos",
    "Construction Branding Agency",
    "Enterprise Software Studio",
    "Brand Culture Engineering",
    "Sunkanmi Olowonishaye Agency",
  ],
  alternates: {
    canonical: "/agency",
  },
};

export default function AgencyPage() {
  const { agency } = portfolioConfig;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Creative &amp; Tech Studio</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                {agency.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-amber-400">
                {agency.tagline}
              </p>
              <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                {agency.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                  <Globe className="h-4 w-4" />
                  <span>Visit {agency.websiteUrl.replace("https://", "").replace("/", "")}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
                >
                  <span>Book Studio Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Banner Showcase */}
        <AgencyBanner />

        {/* Agency Studio Pillars */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-100">
              Agency Capabilities at SK PROJECTS
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              We operate at the convergence of high-durability physical environmental branding and mission-critical digital systems architecture.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agency.coreDisciplines.map((disc, idx) => (
                <div key={idx} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-zinc-100">{disc}</h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-amber-400 font-medium">
                    Delivered via SK PROJECTS &rarr;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
