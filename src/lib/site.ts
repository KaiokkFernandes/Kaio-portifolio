import { person } from "@/data/content";

/**
 * URL canônica do site. Defina NEXT_PUBLIC_SITE_URL no ambiente de deploy
 * (Vercel/Netlify) para que sitemap, robots, canonical e Open Graph
 * apontem para o domínio correto.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leafyfox-7ae830.netlify.app"
).replace(/\/$/, "");

export const siteConfig = {
  url: siteUrl,
  name: `${person.name} — ${person.role}`,
  shortName: person.name,
  title: `${person.name} | ${person.role}`,
  description:
    "Portfólio de Kaio Fernandes, desenvolvedor full stack em Santa Maria (RS). Microsserviços, arquitetura orientada a eventos com Kafka e Debezium, front-end em React e Next.js, APIs em Node.js, Laravel e .NET.",
  locale: "pt_BR",
  lang: "pt-BR",
  keywords: [
    "Kaio Fernandes",
    "desenvolvedor full stack",
    "desenvolvedor Santa Maria RS",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Apache Kafka",
    "Debezium",
    "Clean Architecture",
    "microsserviços",
    "Laravel",
    "ASP.NET Core",
    "portfólio desenvolvedor",
  ],
  ogImage: "/opengraph-image",
} as const;

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
