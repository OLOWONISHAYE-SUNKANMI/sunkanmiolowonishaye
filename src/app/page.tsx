import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgencyBanner from "@/components/AgencyBanner";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BrandingShowcase from "@/components/BrandingShowcase";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <ScrollReveal>
          <AgencyBanner />
        </ScrollReveal>

        {/* Prominent Horizontal Scrolling Technical Skills Stream */}
        <TechnicalSkillsSection />

        <ScrollReveal>
          <BrandingShowcase />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectsSection isHomepage={true} />
        </ScrollReveal>

        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal>
          <AboutSection isHomepage={true} />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
