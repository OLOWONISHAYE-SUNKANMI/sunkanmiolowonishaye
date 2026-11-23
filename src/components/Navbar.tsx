"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioConfig } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Handshake } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/management-systems", label: "Construction Systems" },
    { href: "/construction-branding", label: "Construction Branding" },
    { href: "/projects", label: "Portfolio" },
    { href: "/partnership", label: "Partnership" },
    { href: "/about", label: "About & CV" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 font-bold text-sm tracking-wider transition-transform group-hover:scale-105">
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors ${isActive
                  ? "text-amber-400 font-semibold"
                  : "text-zinc-400 hover:text-zinc-100"
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
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-amber-400"
            >
              Overview / Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-amber-400 font-semibold" : "text-zinc-300 hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-zinc-800 flex flex-col gap-3">
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
                className="rounded-lg bg-zinc-100 px-4 py-2.5 text-center text-xs font-semibold text-zinc-950 hover:bg-zinc-200"
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
