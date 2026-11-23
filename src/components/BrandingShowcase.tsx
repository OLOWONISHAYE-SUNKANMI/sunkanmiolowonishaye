import { HardHat, Shield, Truck, Compass, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function BrandingShowcase() {
  const pillars = [
    {
      title: "Site Hoardings & Perimeter Graphics",
      description:
        "Transforming perimeter hoardings into monumental marketing billboards that capture high-traffic pedestrian & vehicular attention while strictly adhering to local council bylaws.",
      icon: Building2,
      deliverables: ["Acoustic Barrier Wraps", "Illuminated 3D Lettering", "Pedestrian Wayfinding", "CCTV & Safety Notice Integration"],
    },
    {
      title: "Machinery & Fleet Livery Systems",
      description:
        "Heavy-duty, weather-resistant livery design for vans, flatbeds, excavators, and tower cranes that projects an undeniable aura of scale, precision, and reliability.",
      icon: Truck,
      deliverables: ["Reflective Class R2 Chevron Kits", "Excavator Counterweight Decals", "Plant Hire Color Zoning", "Fleet Guideline Manual"],
    },
    {
      title: "Regulatory & High-Visibility Signage",
      description:
        "Legally compliant, high-contrast hazard and directional sign frameworks engineered for maximum visibility under dust, rain, and nocturnal site conditions.",
      icon: Shield,
      deliverables: ["PPE Mandatory Boards", "First Aid & Evacuation Maps", "Subcontractor Sign-In Kiosks", "Zoned Speed & Traffic Signs"],
    },
    {
      title: "Tender Decks & Corporate Positioning",
      description:
        "High-stakes bid documentation, qualification dossiers, and presentation materials that win tier-1 government and commercial development contracts.",
      icon: Compass,
      deliverables: ["Modular InDesign / Figma Bidding Systems", "Method Statement Infographics", "Executive Pitch Decks", "Printed Hardcover Portfolios"],
    },
  ];

  return (
    <section id="construction-branding" className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <HardHat className="h-3.5 w-3.5" />
            <span>Industrial &amp; Spatial Specialism</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Construction &amp; Civil Engineering Branding
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Construction branding demands far more than a simple logo. It requires tough, functional visual systems built for rugged environments, massive physical scale, and stringent health &amp; safety compliance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-7 sm:p-8 transition-all hover:border-amber-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-zinc-100">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-6 border-t border-zinc-800/80 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Typical Outputs:
                  </span>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {pillar.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Box */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-zinc-100">
              Need a full site identity rollout or multi-vehicle fleet rebrand?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Engagements are handled with complete material specification, vinyl print-ready vectors, and contractor guidelines.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition-colors"
          >
            <span>Discuss Construction Brand</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
