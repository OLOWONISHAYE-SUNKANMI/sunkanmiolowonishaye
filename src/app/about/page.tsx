import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { portfolioConfig } from "@/data/portfolioData";
import { User, Download, Mail, Phone, MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Curriculum Vitae | Sunkanmi Olowonishaye",
  description:
    "Curriculum Vitae and professional summary of Sunkanmi Olowonishaye: Software Engineer, CTO at Nexucon & Civora, B.Tech. in Project Management Technology from Lagos State University, with 5+ years building scalable platforms.",
  keywords: [
    "Sunkanmi Olowonishaye CV",
    "Olowonishaye Sunkanmi Resume",
    "Construction CTO Lagos",
    "Software Engineer Lagos Nigeria",
    "Lagos State University Project Management Technology",
    "Nexucon CTO Experience",
    "Civora CTO Experience",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { personal, agency } = portfolioConfig;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <User className="h-3.5 w-3.5" />
                  <span>Curriculum Vitae &amp; Background</span>
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                  {personal.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-amber-400">
                  {personal.role}
                </p>
                <p className="mt-4 text-base text-zinc-300 leading-relaxed max-w-2xl">
                  {personal.bio}
                </p>

                {/* Quick Info Badges */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-zinc-300">
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Call: {personal.phone}</span>
                  </div>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                  >
                    <span>WhatsApp: {personal.whatsapp}</span>
                  </a>
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5">
                    <Mail className="h-3.5 w-3.5 text-amber-400" />
                    <span>{personal.contactEmail}</span>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={`mailto:${personal.contactEmail}`}
                  className="rounded-xl bg-amber-500 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
                >
                  Contact for CTO / Advisory
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-center text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub: OLOWONISHAYE-SUNKANMI</span>
                </a>
                <a
                  href={agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-center text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Visit {agency.name} (skprojects.tech)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed CV Timeline & Skills */}
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
