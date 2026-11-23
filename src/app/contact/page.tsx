import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import GithubIcon from "@/components/GithubIcon";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Sunkanmi Olowonishaye",
  description:
    "Direct contact page for Sunkanmi Olowonishaye: CTO roles, construction technology advisory, enterprise software builds, construction branding, and studio commissions via SK PROJECTS.",
  keywords: [
    "Contact Sunkanmi Olowonishaye",
    "Hire Construction Software Engineer",
    "Construction Tech CTO Consulting",
    "SK PROJECTS Contact",
    "Lagos Construction Tech Consultant",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24 bg-grid-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Mail className="h-3.5 w-3.5" />
                <span>Direct Inquiries</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                Get In Touch
              </h1>
              <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
                Reach out for CTO leadership, enterprise software architecture, hardware telemetry integration (Trimble / NDT), or construction branding via SK PROJECTS.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section Form & Details */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
