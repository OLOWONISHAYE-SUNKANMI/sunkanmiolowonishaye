"use client";

import { useState } from "react";
import { portfolioConfig, Project } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, HardHat, LayoutDashboard, Palette, Sparkles, X, CheckCircle, ChevronRight } from "lucide-react";

import Link from "next/link";

export default function ProjectsSection({ isHomepage = false }: { isHomepage?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "construction-branding", label: "Construction Branding", icon: HardHat },
    { id: "management-system", label: "Management Systems", icon: LayoutDashboard },
    { id: "creative-agency", label: "SK PROJECTS Agency", icon: Sparkles },
  ];

  const sourceProjects = isHomepage
    ? portfolioConfig.projects.filter(
        (p) => p.id !== "nexucon-platform" && p.id !== "civora-platform"
      )
    : portfolioConfig.projects;

  const filteredProjects =
    activeCategory === "all"
      ? sourceProjects
      : sourceProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Portfolio of Work</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              Selected Engagements &amp; Builds
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-2xl">
              Explore specialized brand transformations for the construction sector, custom enterprise workflow management systems, and creative agency engagements.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-zinc-100 text-zinc-950 shadow-md"
                      : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl cursor-pointer"
            >
              <div>
                {/* Category & Year Header */}
                <div className="flex items-center justify-between gap-2 pb-5">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                      project.category === "construction-branding"
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                        : project.category === "management-system"
                        ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        : "border border-purple-500/30 bg-purple-500/10 text-purple-300"
                    }`}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">{project.year}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-zinc-400">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="mt-4 text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Highlight if any */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-sm font-bold text-zinc-100">{m.value}</div>
                        <div className="text-[10px] text-zinc-400 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tags & Action */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-amber-400 transition-colors">
                  <span>View Case Study</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomepage && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-6 py-3.5 text-xs font-semibold text-zinc-200 hover:border-amber-400 hover:text-amber-300 transition-all shadow-md"
            >
              <span>Explore Complete Project Portfolio</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  selectedProject.category === "construction-branding"
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                    : selectedProject.category === "management-system"
                    ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    : "border border-purple-500/30 bg-purple-500/10 text-purple-300"
                }`}
              >
                {selectedProject.categoryLabel}
              </span>
              <span className="text-xs text-zinc-400 font-mono">Year: {selectedProject.year}</span>
              {selectedProject.agencyAffiliation && (
                <span className="text-xs text-amber-400/90 font-medium ml-auto hidden sm:inline">
                  {selectedProject.agencyAffiliation}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-zinc-100">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-medium text-zinc-400 mt-1">
              {selectedProject.subtitle}
            </p>

            {/* Quick Metadata Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-xs sm:grid-cols-4">
              <div>
                <span className="text-zinc-400">Client / Project</span>
                <p className="font-semibold text-zinc-200 mt-0.5">{selectedProject.client || "Confidential"}</p>
              </div>
              <div>
                <span className="text-zinc-400">My Role</span>
                <p className="font-semibold text-zinc-200 mt-0.5">{selectedProject.role}</p>
              </div>
              <div>
                <span className="text-zinc-400">Sector</span>
                <p className="font-semibold text-zinc-200 mt-0.5">{selectedProject.categoryLabel}</p>
              </div>
              <div>
                <span className="text-zinc-400">Affiliation</span>
                <p className="font-semibold text-amber-400 mt-0.5">{portfolioConfig.agency.shortName}</p>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="mt-6 space-y-6 text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Overview
                </h4>
                <p className="mt-2 leading-relaxed text-zinc-300">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.challenge && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    The Challenge
                  </h4>
                  <p className="mt-2 leading-relaxed text-zinc-300">
                    {selectedProject.challenge}
                  </p>
                </div>
              )}

              {selectedProject.solution && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    The Architecture &amp; Solution
                  </h4>
                  <p className="mt-2 leading-relaxed text-zinc-300">
                    {selectedProject.solution}
                  </p>
                </div>
              )}

              {selectedProject.features && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Key Deliverables &amp; Features
                  </h4>
                  <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                        <span className="text-xs text-zinc-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.metrics && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Impact &amp; Measured Results
                  </h4>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-center"
                      >
                        <div className="text-xl font-bold text-amber-400">{metric.value}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Technologies &amp; Competencies
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
              <div className="text-xs text-zinc-400">
                Want to discuss this case study or request raw assets?
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200"
                >
                  Inquire About This Build
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
