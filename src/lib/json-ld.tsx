import {
  certifications,
  education,
  experiences,
  hackathon,
  person,
  skillGroups,
} from "@/data/content";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";

/**
 * Dados estruturados (schema.org) para rich results e melhor
 * compreensão da página por buscadores e assistentes.
 */
function buildGraph() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        jobTitle: person.role,
        description: person.about[0],
        url: siteUrl,
        image: absoluteUrl(person.photo),
        email: `mailto:${person.email}`,
        knowsLanguage: ["pt-BR", "en"],
        address: {
          "@type": "PostalAddress",
          addressLocality: person.locality,
          addressRegion: person.region,
          addressCountry: person.country,
        },
        sameAs: person.socials
          .filter((s) => s.icon !== "mail")
          .map((s) => s.href),
        knowsAbout: skillGroups.flatMap((group) => group.items),
        award: `${hackathon.award} — ${hackathon.event} (${hackathon.edition}), equipe ${hackathon.team}`,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.institution,
        },
        hasCredential: certifications.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.title,
          recognizedBy: { "@type": "Organization", name: c.issuer },
        })),
        worksFor: {
          "@type": "Organization",
          name: experiences[0].company,
        },
        hasOccupation: experiences.map((exp) => ({
          "@type": "Occupation",
          name: exp.role,
          occupationLocation: {
            "@type": "City",
            name: exp.location,
          },
          description: exp.summary,
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.lang,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.lang,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é estático e gerado no servidor a partir de `content.ts`.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph()) }}
    />
  );
}
