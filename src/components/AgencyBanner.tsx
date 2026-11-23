import { portfolioConfig } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Globe, Sparkles } from "lucide-react";

export default function AgencyBanner() {
  const { agency } = portfolioConfig;

  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          {/* Subtle amber gradient highlight */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{agency.badge}</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Creative Direction &amp; Studio Work via{" "}
                <span className="text-amber-400">{agency.name}</span>
              </h2>

              <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                {agency.description}
              </p>

              <p className="mt-3 text-xs text-zinc-400 italic">
                {agency.collaborationNote}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-amber-400 active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  <Globe className="h-4 w-4" />
                  <span>{agency.ctaText}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-5 py-3 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700"
                >
                  <span>View Agency Case Studies</span>
                </a>
              </div>
            </div>

            {/* Right Capabilities Box */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Agency Core Disciplines
                </h3>
                <ul className="mt-4 space-y-3">
                  {agency.coreDisciplines.map((discipline, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                      <span className="text-sm font-medium text-zinc-200">
                        {discipline}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-zinc-800/80 pt-4 flex items-center justify-between text-xs text-zinc-400">
                  <span>URL: {agency.websiteUrl.replace("https://", "")}</span>
                  <span className="text-amber-400 font-mono">Status: Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
