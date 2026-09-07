import { person } from "@/data/content";

/** Último recurso, quando nenhuma variável de ambiente resolve o domínio. */
const FALLBACK_SITE_URL = "https://leafyfox-7ae830.netlify.app";

/**
 * Normaliza um valor de ambiente para uma URL absoluta utilizável.
 *
 * Trata os casos que quebram um build: variável ausente, definida como string
 * vazia (o que passa direto por `??`), com espaços em volta, sem protocolo
 * — como as variáveis da Vercel, que vêm no formato `meu-site.vercel.app` —
 * ou simplesmente inválida. Devolve `undefined` quando não dá para usar.
 */
function normalizeSiteUrl(value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return undefined;
  }
}

/**
 * URL canônica do site, na ordem de precedência:
 *
 * 1. `NEXT_PUBLIC_SITE_URL` — defina no host para fixar o domínio final;
 * 2. domínio de produção da Vercel;
 * 3. URL do deploy atual na Vercel (preview);
 * 4. fallback.
 *
 * Alimenta canonical, sitemap, robots, Open Graph e JSON-LD.
 */
export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.NEXT_PUBLIC_VERCEL_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  FALLBACK_SITE_URL;

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
