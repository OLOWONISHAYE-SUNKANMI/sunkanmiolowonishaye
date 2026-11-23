"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioConfig } from "@/data/portfolioData";
import {
  Menu,
  X,
  ArrowUpRight,
  Handshake,
  ChevronDown,
  Sparkles,
  Cpu,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workflowDropdownOpen, setWorkflowDropdownOpen] = useState(false);
  const [mobileWorkflowOpen, setMobileWorkflowOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setWorkflowDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setWorkflowDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const workflowItems = [
    {
      title: "Construction Branding",
      href: "/workflow/construction-branding",
      description: "Site hoardings, fleet livery, architectural wayfinding & tender decks.",
      icon: Sparkles,
      tag: "SK PROJECTS",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Construction Systems",
      href: "/workflow/construction-systems",
      description: "IoT telemetry (Trimble, PUNDIT, GPR), WhatsApp bots & enterprise RBAC.",
      icon: Cpu,
      tag: "Software & IoT",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Project Management",
      href: "/workflow/project-management",
      description: "Agile delivery, automated milestone reporting, risk governance & LASU B.Tech. credentials.",
      icon: Briefcase,
      tag: "Engineering PM",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  const standardNavLinks = [
    { href: "/projects", label: "Portfolio" },
    { href: "/partnership", label: "Partnership" },
    { href: "/about", label: "About & CV" },
  ];

  const isWorkflowActive = pathname?.startsWith("/workflow");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 font-bold text-sm tracking-wider transition-transform group-hover:scale-105 shadow-sm">
            SO
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
              {portfolioConfig.personal.name}
            </span>
            <span className="text-[11px] text-zinc-400">
              CTO &amp; Architect • Upwork &amp; SK PROJECTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
          {/* Workflow Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setWorkflowDropdownOpen(true)}
            onMouseLeave={() => setWorkflowDropdownOpen(false)}
          >
            <button
              onClick={() => setWorkflowDropdownOpen(!workflowDropdownOpen)}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors py-2 ${
                isWorkflowActive || workflowDropdownOpen
                  ? "text-amber-400 font-semibold"
                  : "text-zinc-300 hover:text-zinc-100"
              }`}
              aria-expanded={workflowDropdownOpen}
              aria-haspopup="true"
            >
              <span>Workflow</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  workflowDropdownOpen ? "rotate-180 text-amber-400" : "text-zinc-400"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {workflowDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-80 lg:w-96 animate-in fade-in-0 zoom-in-95 duration-150">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
                  <div className="px-3 py-2 border-b border-zinc-800/80 mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Specialized Workflows
                    </span>
                    <Link
                      href="/workflow"
                      onClick={() => setWorkflowDropdownOpen(false)}
                      className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
                    >
                      Overview <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1">
                    {workflowItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setWorkflowDropdownOpen(false)}
                          className={`group flex items-start gap-3 rounded-lg p-2.5 transition-all ${
                            isActive
                              ? "bg-zinc-800/90 text-zinc-100"
                              : "hover:bg-zinc-900/90 text-zinc-300"
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${item.color} transition-transform group-hover:scale-105`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs font-semibold ${
                                  isActive
                                    ? "text-amber-400"
                                    : "text-zinc-200 group-hover:text-amber-400"
                                } transition-colors`}
                              >
                                {item.title}
                              </span>
                              <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[9px] font-mono text-zinc-400">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 group-hover:text-zinc-300">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-zinc-800/80 px-2 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">
                      Civil &amp; Tech Systems Engineering
                    </span>
                    <Link
                      href="/workflow"
                      onClick={() => setWorkflowDropdownOpen(false)}
                      className="text-[11px] font-medium text-zinc-300 hover:text-amber-400 flex items-center gap-1"
                    >
                      <span>All Hubs</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          {standardNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : "text-zinc-300 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* GitHub link */}
          <a
            href={portfolioConfig.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Partnership Badge Button */}
          <Link
            href="/partnership"
            className={`group flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-medium transition-all ${
              pathname === "/partnership"
                ? "border-amber-400 bg-amber-500/25 text-amber-300"
                : "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400"
            }`}
          >
            <Handshake className="h-3.5 w-3.5 text-amber-400" />
            <span>Partnership</span>
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95 shadow-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 md:hidden max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 py-1"
            >
              Overview / Home
            </Link>

            {/* Mobile Workflow Accordion */}
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-2.5">
              <button
                onClick={() => setMobileWorkflowOpen(!mobileWorkflowOpen)}
                className="flex w-full items-center justify-between text-sm font-medium text-zinc-200"
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-amber-400" />
                  <span>Workflow Capabilities</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-400 transition-transform ${
                    mobileWorkflowOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>

              {mobileWorkflowOpen && (
                <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-zinc-800">
                  <Link
                    href="/workflow"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xs font-semibold text-amber-400 py-1 px-1 hover:underline"
                  >
                    <span>All Workflows Overview</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  {workflowItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-start gap-2.5 rounded-md p-2 text-xs transition-colors ${
                          isActive
                            ? "bg-zinc-800 text-amber-400 font-semibold"
                            : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0 mt-0.5 text-zinc-400" />
                        <div>
                          <div className="font-medium text-zinc-200">{item.title}</div>
                          <div className="text-[10px] text-zinc-400 line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {standardNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 ${
                  pathname === link.href
                    ? "text-amber-400 font-semibold"
                    : "text-zinc-300 hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-3">
              <Link
                href="/partnership"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-xs font-semibold text-amber-300"
              >
                <div className="flex items-center gap-2">
                  <Handshake className="h-4 w-4" />
                  <span>Partnership: Upwork &amp; SK PROJECTS</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-zinc-100 px-1"
              >
                <span>GitHub: OLOWONISHAYE-SUNKANMI</span>
                <GithubIcon className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg bg-zinc-100 px-4 py-2.5 text-center text-xs font-semibold text-zinc-950 hover:bg-zinc-200 shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
