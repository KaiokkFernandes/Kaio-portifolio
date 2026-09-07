/**
 * Fonte única de verdade do portfólio.
 * Todo o conteúdo textual vive aqui para facilitar manutenção e reuso
 * entre as seções da página e os metadados de SEO / JSON-LD.
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  start: string;
  end: string;
  location: string;
  logo: string;
  summary: string;
  highlights: { title?: string; text: string }[];
  stack: string[];
  site?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "layers" | "database" | "shield";
  items: string[];
};

export type Highlight = {
  title: string;
  company: string;
  period: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
};

export const person = {
  name: "Kaio Fernandes",
  firstName: "Kaio",
  role: "Desenvolvedor Full Stack",
  headline: "Desenvolvedor Full Stack",
  tagline:
    "Construo produtos web de ponta a ponta — de pipelines de dados em tempo real a interfaces que as pessoas gostam de usar.",
  location: "Santa Maria, RS — Brasil",
  locality: "Santa Maria",
  region: "RS",
  country: "BR",
  email: "kaiovittorg@gmail.com",
  photo: "/images/kaio-fernandes.jpg",
  resume: "/docs/curriculo-kaio-fernandes.pdf",
  about: [
    "Sou desenvolvedor full stack com experiência sólida em arquitetura de microsserviços escaláveis, desenvolvimento web de alta performance e soluções orientadas a eventos.",
    "Atuo de ponta a ponta: do planejamento técnico e modelagem de banco de dados à mensageria distribuída (Kafka, Debezium), passando por interfaces reativas em React e Next.js, design systems documentados com Storybook e APIs robustas em Node.js, PHP/Laravel e C#/.NET.",
    "No dia a dia levo a sério Clean Architecture, observabilidade, cibersegurança, containerização com Docker e metodologias ágeis com CI/CD.",
  ],
  socials: [
    {
      label: "GitHub",
      handle: "@KaiokkFernandes",
      href: "https://github.com/KaiokkFernandes",
      icon: "github" as const,
    },
    {
      label: "LinkedIn",
      handle: "in/kaio-fernandes",
      href: "https://www.linkedin.com/in/kaio-fernandes",
      icon: "linkedin" as const,
    },
    {
      label: "E-mail",
      handle: "kaiovittorg@gmail.com",
      href: "mailto:kaiovittorg@gmail.com",
      icon: "mail" as const,
    },
  ],
};

export const stats = [
  { value: "3+", label: "anos construindo software em produção" },
  { value: "3", label: "empresas — imobiliário, segurança e educação" },
  { value: "80%", label: "de cobertura de testes no sistema universitário" },
  { value: "40%", label: "de redução no tempo de resposta de relatórios" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens & Frameworks",
    description: "O que eu uso para construir a aplicação de ponta a ponta.",
    icon: "code",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "PHP (Laravel)",
      "C#",
      "ASP.NET Core",
      "Blazor",
      "Python",
    ],
  },
  {
    title: "Arquitetura & Engenharia",
    description: "Como eu organizo o código para ele durar e escalar.",
    icon: "layers",
    items: [
      "Clean Architecture",
      "Microsserviços",
      "Event-Driven",
      "Design System (Storybook)",
      "TDD",
      "Testes unitários (Jest / xUnit)",
    ],
  },
  {
    title: "Streaming & Banco de Dados",
    description: "Onde os dados moram e como eles se movem em tempo real.",
    icon: "database",
    items: [
      "Apache Kafka",
      "Debezium (CDC)",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Modelagem, índices e queries avançadas",
    ],
  },
  {
    title: "DevOps, Cloud & Segurança",
    description: "Do commit ao ambiente de produção, com segurança.",
    icon: "shield",
    items: [
      "Docker",
      "AWS (EC2, S3, RDS)",
      "GitHub Actions",
      "CI/CD",
      "Acronis Cyber Protect",
      "Cloudflare",
      "TCP/IP",
      "Hardening",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Jetimob",
    role: "Desenvolvedor Full Stack",
    period: "Out 2025 — Set 2026",
    start: "2025-10",
    end: "2026-09",
    location: "Santa Maria, RS",
    logo: "/images/logos/jetimob.jpg",
    summary:
      "Produtos para o mercado imobiliário: portais de alta visibilidade, CMS próprio e uma plataforma de analytics em tempo real.",
    highlights: [
      {
        title: "Portais imobiliários",
        text: "Manutenção evolutiva e criação de features para portais de imobiliárias de alta visibilidade (como o Jet Lar), usando Node.js, React, Next.js e PHP/Laravel.",
      },
      {
        title: "CMS & Design System",
        text: "Atuação desde a concepção na criação do CMS, desenvolvendo biblioteca de componentes reutilizáveis e documentação técnica de front-end com Storybook.",
      },
      {
        title: "Plataforma de Analytics & Tracking",
        text: "Condução de ponta a ponta — planejamento, arquitetura e entrega — de uma solução analítica completa: modelagem do banco de dados e pipeline de dados em tempo real com Docker, Apache Kafka e Debezium (CDC).",
      },
      {
        title: "Dashboards & Métricas",
        text: "Construção de telas interativas de gráficos e rastreamento de ações em Next.js e React aplicando Clean Architecture.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "PHP/Laravel",
      "Apache Kafka",
      "Debezium",
      "Docker",
      "Storybook",
    ],
  },
  {
    company: "FORTE Security",
    role: "Desenvolvedor Full Stack",
    period: "Mai 2024 — Out 2025",
    start: "2024-05",
    end: "2025-10",
    location: "Santa Maria, RS",
    logo: "/images/logos/forte.jpg",
    summary:
      "Desenvolvimento e sustentação de uma plataforma de cibersegurança, com foco em APIs, performance e gestão de vulnerabilidades.",
    highlights: [
      {
        text: "Desenvolvimento e sustentação de plataforma de cibersegurança aplicando APIs RESTful, microsserviços, Clean Architecture e testes unitários.",
      },
      {
        text: "Integração dos serviços de segurança Acronis Cyber Protect e Cloudflare para autenticação segura, caching e escalabilidade.",
      },
      {
        text: "Elaboração de consultas otimizadas em PostgreSQL e melhoria de desempenho do front-end React com lazy loading e memoização.",
      },
      {
        title: "Destaque",
        text: "Módulo de Gestão de Vulnerabilidades: onboarding de agents, inventário de hardware, relatórios em PDF e alertas proativos.",
      },
    ],
    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Microsserviços",
      "Clean Architecture",
      "Cloudflare",
      "Acronis Cyber Protect",
    ],
  },
  {
    company: "FISMA",
    role: "Desenvolvedor Full Stack",
    period: "Mai 2023 — Jan 2024",
    start: "2023-05",
    end: "2024-01",
    location: "Santa Maria, RS",
    logo: "/images/logos/fisma.jpg",
    summary:
      "Sistema universitário desktop e web em C#/.NET, com forte disciplina de testes e otimização de relatórios.",
    highlights: [
      {
        text: "Desenvolvimento e manutenção de sistema universitário desktop e web em C#/ASP.NET Core e Blazor, empregando MVC e TDD.",
      },
      {
        text: "Criação dos módulos de matrículas, financeiro e relatórios, atingindo 80% de cobertura de testes unitários.",
      },
      {
        text: "Consultas analíticas avançadas em MySQL (CTEs e views indexadas), reduzindo em 40% o tempo de resposta dos relatórios.",
      },
    ],
    stack: ["C#", "ASP.NET Core", "Blazor", "MVC", "TDD", "xUnit", "MySQL"],
  },
];

export const highlights: Highlight[] = [
  {
    title: "Plataforma de Analytics & Tracking em tempo real",
    company: "Jetimob",
    period: "2025 — 2026",
    problem:
      "Clientes imobiliários não tinham visibilidade sobre o comportamento dos visitantes nos seus portais, e os dados ficavam presos no banco transacional.",
    solution:
      "Conduzi a solução de ponta a ponta: modelagem do banco, captura de mudanças com Debezium (CDC), streaming via Apache Kafka e serviços containerizados com Docker, alimentando dashboards em Next.js com Clean Architecture.",
    impact:
      "Rastreamento de ações e métricas disponíveis em tempo real, com uma arquitetura orientada a eventos que desacopla ingestão, processamento e visualização.",
    stack: ["Apache Kafka", "Debezium", "Docker", "Next.js", "PostgreSQL"],
  },
  {
    title: "CMS proprietário e Design System documentado",
    company: "Jetimob",
    period: "2025 — 2026",
    problem:
      "Cada portal reimplementava seus próprios componentes, o que multiplicava bugs visuais e o custo de manter a identidade dos produtos.",
    solution:
      "Participei desde a concepção do CMS e construí uma biblioteca de componentes reutilizáveis com documentação técnica viva em Storybook.",
    impact:
      "Base de UI compartilhada entre produtos, onboarding de front-end mais rápido e consistência visual garantida por documentação.",
    stack: ["React", "Next.js", "TypeScript", "Storybook"],
  },
  {
    title: "Módulo de Gestão de Vulnerabilidades",
    company: "FORTE Security",
    period: "2024 — 2025",
    problem:
      "A equipe de segurança precisava enxergar o parque de máquinas dos clientes e reagir a vulnerabilidades antes que virassem incidente.",
    solution:
      "Desenvolvi o módulo completo: onboarding de agents, inventário de hardware, geração de relatórios em PDF e alertas proativos, sobre APIs RESTful em microsserviços com Clean Architecture e testes unitários.",
    impact:
      "Visibilidade centralizada do inventário e alertas antecipados, apoiados por integrações com Acronis Cyber Protect e Cloudflare.",
    stack: ["Node.js", "React", "PostgreSQL", "Microsserviços", "Cloudflare"],
  },
  {
    title: "Sistema universitário: matrículas, financeiro e relatórios",
    company: "FISMA",
    period: "2023 — 2024",
    problem:
      "Processos acadêmicos e financeiros dependiam de rotinas lentas, e os relatórios demoravam a responder conforme a base crescia.",
    solution:
      "Construí os módulos em C#/ASP.NET Core e Blazor com MVC e TDD, e reescrevi as consultas analíticas em MySQL usando CTEs e views indexadas.",
    impact:
      "80% de cobertura de testes unitários e 40% de redução no tempo de resposta dos relatórios.",
    stack: ["C#", "ASP.NET Core", "Blazor", "TDD", "MySQL"],
  },
];

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Universidade Federal de Santa Maria (UFSM)",
  period: "2022 — Atual",
};

export const certifications = [
  { title: "Formação Clean Architecture", issuer: "Udemy" },
  { title: "Redes de Computadores Avançado", issuer: "Coursera" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário — B1" },
];

export const navigation = [
  { index: "01", label: "Sobre", href: "#sobre" },
  { index: "02", label: "Stack", href: "#stack" },
  { index: "03", label: "Experiência", href: "#experiencia" },
  { index: "04", label: "Projetos", href: "#projetos" },
  { index: "05", label: "Hackathon", href: "#hackathon" },
  { index: "06", label: "Formação", href: "#formacao" },
  { index: "07", label: "Contato", href: "#contato" },
];

/**
 * Stream de eventos exibido no hero. Cada linha corresponde a um marco real
 * do currículo — a data é o mês em que aquilo aconteceu.
 */
export const eventLog: {
  ts: string;
  level: "INFO" | "OK";
  service: string;
  message: string;
}[] = [
  {
    ts: "2022",
    level: "INFO",
    service: "ufsm.sistemas-informacao",
    message: "graduação em sistemas de informação iniciada",
  },
  {
    ts: "2023-05",
    level: "INFO",
    service: "fisma.sistema-universitario",
    message: "início · c#/asp.net core, blazor, mvc e tdd",
  },
  {
    ts: "2024-01",
    level: "OK",
    service: "fisma.sistema-universitario",
    message:
      "matrículas, financeiro e relatórios entregues · 80% de cobertura · -40% no tempo de resposta",
  },
  {
    ts: "2024-05",
    level: "INFO",
    service: "forte.plataforma-seguranca",
    message: "início · apis restful, microsserviços e clean architecture",
  },
  {
    ts: "2025-06",
    level: "OK",
    service: "coderace.avaliador-imoveis",
    message: "2º lugar no ix code race · ia para precificação de imóveis",
  },
  {
    ts: "2025-10",
    level: "OK",
    service: "forte.gestao-vulnerabilidades",
    message:
      "módulo entregue · onboarding de agents, inventário, relatórios e alertas",
  },
  {
    ts: "2025-10",
    level: "INFO",
    service: "jetimob.portais",
    message: "início · node.js, react, next.js e php/laravel",
  },
  {
    ts: "2026-09",
    level: "OK",
    service: "jetimob.analytics",
    message:
      "cms e design system em storybook · pipeline debezium → kafka → dashboard",
  },
];

/**
 * Hackathon Code Race — dados conferidos no certificado emitido pela
 * Antonio Meneghetti Faculdade e no projeto de pesquisa que deu origem à ideia.
 */
export const hackathon = {
  award: "2º lugar",
  event: "IX Campeonato Code Race",
  edition: "Code Race 25",
  organizer: "Bacharelado em Sistemas de Informação — Antonio Meneghetti Faculdade",
  team: "Forte Developers",
  date: "13 e 14 de junho de 2025",
  dateISO: "2025-06-14",
  workload: "18 horas",
  theme: "Inteligência Artificial",
  certificate: "/docs/certificado-code-race.pdf",
  photos: [
    {
      src: "/images/code-race/premiacao.jpg",
      width: 1600,
      height: 1200,
      alt: "Kaio Fernandes e a equipe Forte Developers com o troféu no palco do IX Campeonato Code Race, diante do painel do evento.",
      caption: "premiação · palco do code race 25",
    },
    {
      src: "/images/code-race/equipe.jpg",
      width: 3120,
      height: 4160,
      alt: "Os quatro integrantes da equipe Forte Developers segurando o troféu de segundo lugar do Code Race 25.",
      caption: "equipe forte developers",
    },
  ],
  project: {
    title: "Plataforma de precificação de imóveis com IA",
    context:
      "O tema da edição era inteligência artificial e escolhemos um problema que conhecíamos de perto: em Santa Maria, a precificação de imóveis é predominantemente subjetiva, baseada na intuição e na experiência do corretor. Isso cria assimetria de informação — quem vende não sabe se está pedindo demais, quem compra não tem como validar se o valor é justo.",
    solution:
      "Em 18 horas de maratona construímos uma plataforma de ciência de dados de ponta a ponta: coleta dos anúncios de casas e apartamentos dos portais da cidade por web scraping, estruturação e limpeza do dataset com Pandas (tratamento de outliers e one-hot encoding do bairro) e treino de um modelo de regressão linear com Scikit-learn para estimar o preço a partir de área, quartos, banheiros, vagas e região.",
    outcome:
      "2º lugar na competição. A ideia seguiu adiante como projeto de pesquisa na disciplina de Metodologia da Pesquisa em SI da UFSM, com o modelo avaliado por MAE e R² e um MVP web em que qualquer pessoa consulta o preço estimado de um imóvel.",
    stack: [
      "Python",
      "Web Scraping",
      "BeautifulSoup / Scrapy",
      "Pandas",
      "Scikit-learn",
      "Regressão Linear",
      "MAE / R²",
    ],
  },
};

/** Limites do eixo temporal usado no waterfall de experiências. */
export const careerRange = { start: "2023-01", end: "2026-12" };
