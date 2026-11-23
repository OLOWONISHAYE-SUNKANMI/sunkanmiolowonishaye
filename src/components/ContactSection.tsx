"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioData";
import { Mail, PhoneCall, MapPin, Send, CheckCircle2, ArrowUpRight, Sparkles, MessageCircle, MessageSquare } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactSection() {
  const { personal, agency } = portfolioConfig;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Construction Intelligence & IoT Systems",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Info from CV */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              Let&apos;s Build Resilient Platforms &amp; Brands.
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Available for CTO roles, technical advisory, custom enterprise software builds, construction branding, and creative studio engagements through {agency.name}.
            </p>

            {/* Direct Quick Action Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={personal.emailUrl}
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-amber-400 active:scale-95 shadow-md shadow-amber-500/10 text-center"
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>

              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-emerald-400 active:scale-95 shadow-md shadow-emerald-500/10 text-center"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={personal.phoneCallUrl}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-md shadow-cyan-500/10 text-center"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Me</span>
              </a>
            </div>

            {/* Detailed Contact Cards */}
            <div className="mt-6 space-y-4">
              {/* Card 1: Email */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all hover:border-zinc-700">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400">Direct Email</span>
                      <div className="text-sm font-semibold text-zinc-200">{personal.contactEmail}</div>
                    </div>
                  </div>
                  <a
                    href={personal.emailUrl}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Card 2: WhatsApp (WhatsApp Only: 08158896523) */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 transition-all hover:border-emerald-500/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-emerald-400 font-semibold">WhatsApp</span>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-300">
                          WhatsApp Only
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-zinc-100 font-mono mt-0.5">{personal.whatsapp}</div>
                    </div>
                  </div>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-colors shrink-0 shadow-sm"
                  >
                    <span>Open WhatsApp</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Card 3: Phone Call (08031680058) */}
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 transition-all hover:border-cyan-500/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-cyan-400 font-semibold">Voice Phone Line</span>
                        <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-cyan-300">
                          Calls Only
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-zinc-100 font-mono mt-0.5">{personal.phone}</div>
                    </div>
                  </div>
                  <a
                    href={personal.phoneCallUrl}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-bold text-zinc-950 hover:bg-cyan-400 transition-colors shrink-0 shadow-sm"
                  >
                    <span>Call Now</span>
                    <PhoneCall className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Card 4: Location */}
              <div className="flex items-center gap-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400">Base of Operations</span>
                  <div className="text-sm font-semibold text-zinc-200">{personal.location}</div>
                </div>
              </div>

              {/* Card 5: Upwork Profile Direct Link */}
              <a
                href={personal.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors hover:border-cyan-400 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-400 font-semibold">Direct Freelance &amp; Consulting</span>
                    <div className="text-sm font-semibold text-zinc-100">Hire on Upwork</div>
                    <div className="text-[11px] text-zinc-400 font-mono">upwork.com/freelancers/~016e0112602d07ca42</div>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold text-cyan-400">View Profile &rarr;</span>
              </a>

              {/* Card 6: SK PROJECTS Agency Direct Link */}
              <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-zinc-900 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Sparkles className="h-4 w-4" />
                  <span>Looking for Full Agency Engagements?</span>
                </div>
                <p className="mt-2 text-xs text-zinc-300">
                  For brand identity systems, high-visibility hoardings, or larger software product engineering, visit {agency.name}.
                </p>
                <a
                  href={agency.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors"
                >
                  <span>Visit {agency.websiteUrl.replace("https://", "").replace("/", "")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out, Sunkanmi Olowonishaye or the team at {agency.name} will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Construction Intelligence & IoT Systems", message: "" });
                    }}
                    className="mt-6 rounded-lg border border-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-zinc-100">
                    Send a Project or Advisory Inquiry
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Construction Intelligence & IoT Systems">Construction Intelligence Platform / Hardware IoT Integration</option>
                      <option value="Conversational Field System (WhatsApp/Telegram)">WhatsApp / Telegram Field Ops Bot System</option>
                      <option value="Construction Branding">Construction Branding &amp; Hoardings (SK PROJECTS)</option>
                      <option value="Enterprise SaaS / RBAC Architecture">Enterprise SaaS &amp; Custom Management System Build</option>
                      <option value="CTO Advisory / Strategic Retainer">CTO Advisory / Fractional Leadership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, current architecture challenges, or scope of work..."
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-amber-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-amber-400 active:scale-[0.99] shadow-lg shadow-amber-500/10"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry to Sunkanmi</span>
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center">
                    Direct communications are monitored directly by Sunkanmi Olowonishaye.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
