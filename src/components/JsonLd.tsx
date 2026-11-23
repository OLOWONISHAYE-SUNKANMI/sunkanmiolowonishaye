import { portfolioConfig } from "@/data/portfolioData";

export default function JsonLd() {
  const { personal, agency, siteUrl, seo } = portfolioConfig;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    alternateName: "Olowonishaye Sunkanmi",
    jobTitle: "Software Engineer & Chief Technology Officer (CTO)",
    description: personal.bio,
    url: siteUrl,
    email: personal.contactEmail,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: personal.education.institution,
    },
    knowsAbout: [
      "Construction Intelligence Platforms",
      "Construction Software Engineering",
      "Trimble Connect Integration",
      "PUNDIT PL 200 Non-Destructive Testing",
      "Ground-Penetrating Radar GPR Telemetry",
      "WhatsApp & Telegram Field Automation",
      "Construction Branding & Spatial Graphics",
      "Role-Based Access Control RBAC",
      "Next.js, TypeScript, PostgreSQL, FastAPI",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Nexucon",
        url: "https://nexucon.net/",
      },
      {
        "@type": "Organization",
        name: "Civora",
        url: "https://amijad-civora.com/",
      },
      {
        "@type": "Organization",
        name: agency.name,
        url: agency.websiteUrl,
      },
    ],
    sameAs: [
      personal.github,
      personal.upwork,
      agency.websiteUrl,
      "https://nexucon.net/",
      "https://amijad-civora.com/",
    ],
  };

  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: agency.name,
    url: agency.websiteUrl,
    description: agency.description,
    founder: {
      "@type": "Person",
      name: personal.name,
    },
    serviceType: [
      "Construction Branding & Identity Systems",
      "Site Hoardings & Wayfinding Graphics",
      "Construction Management Platforms",
      "Hardware & Telemetry API Integration",
      "Enterprise Web Applications",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Global / Nigeria / United Kingdom / Europe",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
    </>
  );
}
