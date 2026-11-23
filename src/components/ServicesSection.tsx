import { portfolioConfig } from "@/data/portfolioData";
import { HardHat, LayoutDashboard, Palette, Cpu, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const iconMap: Record<string, any> = {
    HardHat,
    LayoutDashboard,
    Palette,
    Cpu,
  };

  return (
    <section id="services" className="border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>Core Capabilities &amp; Services</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            How I Create Value
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            From strategic visual identity for physical industry to full-stack engineering of internal business tools, delivered individually or backed by the team at {portfolioConfig.agency.name}.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolioConfig.services.map((service) => {
            const Icon = iconMap[service.iconName] || Palette;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-6 transition-all hover:border-zinc-700"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-zinc-800/80 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Key Deliverables
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
