"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioConfig } from "@/data/portfolioData";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Logo & Headline */}
          <div>
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-base text-zinc-100 hover:text-amber-400 transition-colors">
                {portfolioConfig.personal.name}
              </Link>
              <span className="text-zinc-600">/</span>
              <a
                href={portfolioConfig.agency.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>{portfolioConfig.agency.name} (skprojects.tech)</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Construction Software Engineer, CTO &amp; Enterprise Management Systems Architect.
            </p>
          </div>

          {/* Page Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <Link href="/projects" className="hover:text-zinc-200 transition-colors">
              Portfolio
            </Link>
            <Link href="/construction-branding" className="hover:text-zinc-200 transition-colors">
              Branding
            </Link>
            <Link href="/management-systems" className="hover:text-zinc-200 transition-colors">
              Systems
            </Link>
            <Link href="/partnership" className="hover:text-zinc-200 transition-colors">
              Partnership
            </Link>
            <Link href="/about" className="hover:text-zinc-200 transition-colors">
              About &amp; CV
            </Link>
            <Link href="/contact" className="hover:text-zinc-200 transition-colors">
              Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Agency & Upwork Quick Reference Strip */}
        <div className="py-6 border-b border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold">SK PROJECTS Studio:</span>
            <a
              href={portfolioConfig.agency.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1 font-mono"
            >
              skprojects.tech <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold">Upwork Profile:</span>
            <a
              href={portfolioConfig.personal.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-mono"
            >
              Hire on Upwork <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="text-zinc-500">
            Lagos, Nigeria • Global Remote
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            &copy; {currentYear} {portfolioConfig.personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <a
              href={portfolioConfig.agency.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 hover:underline"
            >
              {portfolioConfig.agency.name} (skprojects.tech)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
