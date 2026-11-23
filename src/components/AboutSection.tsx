import { portfolioConfig } from "@/data/portfolioData";
import { ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export default function AboutSection({ isHomepage = false }: { isHomepage?: boolean }) {
  const { personal, agency, timeline, skillCategories } = portfolioConfig;

  return (
    <section id="about" className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Personal Narrative & Education */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Professional Summary</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              Software Engineer &amp; CTO Bridging Engineering with Technical Leadership.
            </h2>

            <div className="mt-6 space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                {personal.bio}
              </p>
              <p>
                My background uniquely combines hands-on software engineering depth in Next.js, Node.js, FastAPI, PostgreSQL, and hardware IoT integrations (such as Trimble Connect, PUNDIT PL 200, and Ground-Penetrating Radar) with formal training in <strong className="text-zinc-100">Project Management Technology</strong> from Lagos State University.
              </p>
              <p>
                Through my agency <a href={agency.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold hover:underline">{agency.name}</a>, we build high-impact brand systems and digital platforms for construction leaders, engineering firms, and enterprise SaaS companies.
              </p>
            </div>

            {/* Education Box */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Academic Foundation
                  </span>
                  <h4 className="text-base font-bold text-zinc-100">
                    {personal.education.degree}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {personal.education.institution} • Graduated {personal.education.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Agency Connection Card */}
            <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Creative &amp; Tech Agency
                </span>
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono text-amber-300">
                  {agency.shortName}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">
                Partner at {agency.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                {agency.tagline}
              </p>
              <a
                href={agency.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>Visit {agency.websiteUrl.replace("https://", "").replace("/", "")}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Career Experience & Core Skills */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-amber-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative border-l border-zinc-800 pl-6 ml-3 space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-amber-400 transition-transform group-hover:scale-125" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-amber-400">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold text-zinc-400">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="mt-1 text-base font-bold text-zinc-100">
                    {item.title}
                  </h4>
                  <div className="text-xs font-semibold text-zinc-400">
                    {isHomepage && (item.organization === "Nexucon" || item.organization === "Civora")
                      ? "Enterprise Construction Technology Platform"
                      : item.organization}{" "}
                    {item.location && `• ${item.location}`}
                  </div>
                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                    {isHomepage && (item.organization === "Nexucon" || item.organization === "Civora")
                      ? item.description.replace("(nexucon.net)", "").replace("(amijad-civora.com)", "").replace(". Experience shared under NDA", "")
                      : item.description}
                  </p>

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Core Skills Categories Grid from CV */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span>Technical Skills Inventory</span>
              </div>

              <div className="space-y-4">
                {skillCategories.map((cat, cIdx) => (
                  <div key={cIdx}>
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[11px] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
