# Portfólio — Kaio Fernandes

Portfólio profissional de **Kaio Fernandes**, desenvolvedor full stack em Santa Maria (RS).
Construído com **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS v4**, com foco em
performance, acessibilidade e SEO.

## Direção visual

A interface é desenhada como um **console de observabilidade** — uma escolha deliberada para
fugir do visual padrão de portfólio de dev e para refletir o próprio perfil técnico (pipelines
de dados, dashboards e cibersegurança):

- painéis com moldura fina e marcas de canto, tipografia monoespaçada nos elementos estruturais;
- verde de sinal para estado "ok" e âmbar para métricas em destaque;
- `event_stream` da carreira em formato de log, com cada linha ancorada em uma data real do currículo;
- experiências renderizadas como um **waterfall de trace**, com cada emprego ocupando um span no eixo temporal;
- projetos apresentados como relatórios de serviço (contexto → ação → resultado);
- seção de premiação com carrossel de fotos do hackathon e o certificado como comprovação;
- tema claro no formato de "terminal claro", com os mesmos tokens invertidos.

## Stack do projeto

| Camada       | Tecnologia                                             |
| ------------ | ------------------------------------------------------ |
| Framework    | Next.js 16 (App Router, React Server Components)       |
| Linguagem    | TypeScript (modo estrito)                              |
| Estilos      | Tailwind CSS v4 + design tokens em CSS custom properties |
| Ícones       | lucide-react + SVG inline para ícones de marca          |
| Fontes       | `next/font` — JetBrains Mono (estrutura) e Inter (texto) |
| Animações    | CSS puro + IntersectionObserver (sem bibliotecas)      |

## Como rodar

Requisitos: **Node.js 20+** (o projeto foi desenvolvido no Node 26).

```bash
npm install       # instala as dependências
npm run dev       # ambiente de desenvolvimento em http://localhost:3000
npm run build     # build de produção
npm run start     # sobe o build de produção
npm run lint      # ESLint (regras do Next + TypeScript)
npm run typecheck # checagem de tipos sem emitir arquivos
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # <html>, fontes, metadata global, JSON-LD
│   ├── page.tsx             # composição das seções da home
│   ├── globals.css          # tokens de tema, utilities e animações
│   ├── icon.tsx             # favicon gerado dinamicamente (next/og)
│   ├── opengraph-image.tsx  # imagem de compartilhamento 1200x630
│   ├── manifest.ts          # Web App Manifest (PWA básico)
│   ├── robots.ts            # /robots.txt
│   ├── sitemap.ts           # /sitemap.xml
│   └── not-found.tsx        # página 404
├── components/              # seções da página + primitivos de UI (Panel, Section, Reveal)
├── data/content.ts          # ⭐ todo o conteúdo do portfólio
└── lib/
    ├── site.ts              # configuração de SEO e URL canônica
    ├── json-ld.tsx          # dados estruturados schema.org
    ├── timeline.ts          # geometria do waterfall de experiências
    ├── use-clock.ts         # relógio de Santa Maria na barra de status
    └── use-theme.ts         # alternância de tema claro/escuro

assets/fonts/                # JetBrains Mono (TTF) usado pelo next/og
```

> **Para atualizar o portfólio, edite `src/data/content.ts`.** Experiências, competências,
> projetos, formação e links sociais vivem todos nesse arquivo e alimentam tanto a interface
> quanto os metadados e o JSON-LD.

## SEO e acessibilidade

- Metadata API do Next com `title` template, canonical, Open Graph e Twitter Card.
- Dados estruturados schema.org (`Person`, `WebSite`, `ProfilePage`) para rich results.
- `sitemap.xml`, `robots.txt` e Web App Manifest gerados pelo framework.
- Imagem Open Graph e favicon gerados no build com `next/og`.
- HTML semântico: `header` / `main` / `section[aria-labelledby]` / `footer`, um único `h1`,
  listas reais para navegação e tags, `<time datetime>` nas experiências.
- Link "pular para o conteúdo", foco visível, `aria-label` nos ícones e respeito a
  `prefers-reduced-motion`.
- Cabeçalhos de segurança (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
  definidos em `next.config.ts`.

## Deploy

O projeto é 100% estático (todas as rotas são pré-renderizadas) e roda em Vercel, Netlify
ou qualquer host com suporte a Next.js.

1. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio final
   (veja `.env.example`). Ela alimenta canonical, sitemap, robots e Open Graph.
2. Build: `npm run build` — Start: `npm run start`.

## Assets

```
public/
├── docs/
│   ├── curriculo-kaio-fernandes.pdf   # currículo para download
│   └── certificado-code-race.pdf      # certificado do IX Campeonato Code Race
└── images/
    ├── kaio-fernandes.jpg             # foto de perfil
    ├── code-race/                     # fotos da premiação do Code Race 25
    └── logos/                         # Jetimob, FORTE Security e FISMA
```

As imagens ficam no repositório em resolução original — o `next/image` gera as versões
redimensionadas e em AVIF/WebP na entrega. Os caminhos são referenciados apenas em
`src/data/content.ts`.

Fora de `public/`, a pasta `assets/fonts/` guarda a JetBrains Mono em TTF, lida durante o
build para renderizar a imagem Open Graph e o favicon com `next/og` (as fontes da própria
página são servidas pelo `next/font`).

## Contato

- E-mail: kaiovittorg@gmail.com
- GitHub: [@KaiokkFernandes](https://github.com/KaiokkFernandes)
- LinkedIn: [in/kaio-fernandes](https://www.linkedin.com/in/kaio-fernandes)
