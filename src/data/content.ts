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

export type PersonalProject = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  kind: string;
  status: string;
  /** Só para projetos em equipe: tamanho do time e a minha parte nele. */
  team?: string;
  role?: string;
  period: string;
  links: { app: string; repo: string };
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  features: { title: string; text: string }[];
  engineering: string[];
  stack: { layer: string; items: string[] }[];
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
      href: "https://www.linkedin.com/in/kaio-fernandes-4a579b211/",
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

export const personalProjects: PersonalProject[] = [
  {
    slug: "moedy",
    name: "Moedy",
    tagline: "Finanças pessoais a partir do extrato do banco",
    summary:
      "App de finanças pessoais em português que transforma o extrato do banco em controle financeiro. O usuário importa o arquivo OFX ou CSV, as transações são categorizadas sozinhas — por regras, pela memória de escolhas anteriores e, opcionalmente, por IA — e o app mostra para onde foi o dinheiro, acompanha orçamentos com alertas e gera relatórios.",
    kind: "Projeto pessoal · full stack",
    status: "em produção",
    period: "2026",
    links: {
      app: "https://moedy-chi.vercel.app",
      repo: "https://github.com/KaiokkFernandes/Moedy",
    },
    image: {
      src: "/images/imagens_projetos/moedy.png",
      width: 1912,
      height: 994,
      alt: "Painel do Moedy em modo escuro, com dados de demonstração: saldo, despesas e receitas do mês, gráfico de despesas por categoria, comparativo de receitas e despesas dos últimos 6 meses e a curva de ritmo de gastos de outubro contra setembro.",
      caption: "painel · conta de demonstração",
    },
    features: [
      {
        title: "Importação de extratos",
        text: "OFX (SGML e XML) e CSV, com detecção de codificação e de colunas, revisão antes de confirmar e proteção contra duplicatas na reimportação.",
      },
      {
        title: "Categorização em camadas",
        text: "Regras por palavra-chave, memória das escolhas do usuário e sugestão por IA (Claude, da Anthropic), opcional e com consentimento explícito.",
      },
      {
        title: "Painel do mês",
        text: "Resumo do mês, despesas por categoria, receitas x despesas dos últimos 6 meses, ritmo de gastos comparado ao mês anterior e maiores despesas.",
      },
      {
        title: "Relatórios",
        text: "Evolução mensal, maiores estabelecimentos, cobranças recorrentes detectadas e exportação em CSV.",
      },
      {
        title: "Orçamentos com alertas",
        text: "Orçamento por categoria, projeção de fechamento do mês e alertas em 80%, 100% e para gasto fora do normal.",
      },
      {
        title: "Conta e onboarding",
        text: "Login com email e senha ou Google, modo escuro e onboarding interativo com tour guiado e checklist de primeiros passos.",
      },
    ],
    engineering: [
      "Valores monetários sempre em centavos inteiros, com um parser próprio que entende formatos brasileiros e americanos sem passar por ponto flutuante.",
      "Segurança de produção: variáveis de ambiente validadas na inicialização, CORS restrito, CSP, limite de tentativas de login compartilhado entre instâncias (Redis), logs estruturados sem dados sensíveis e erros genéricos para o usuário.",
      "Mais de 200 testes unitários (node:test) com cobertura mínima exigida, e um CI que bloqueia o merge se lint, typecheck, testes, build ou a imagem Docker falharem.",
      "Monorepo com Yarn workspaces, ambiente completo com Docker Compose e migrações aplicadas no deploy.",
    ],
    stack: [
      {
        layer: "frontend",
        items: [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS 4",
          "TanStack Query",
          "React Router",
          "Recharts",
        ],
      },
      {
        layer: "backend",
        items: [
          "Node.js",
          "Express 5",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Zod",
          "JWT",
        ],
      },
      {
        layer: "infra",
        items: [
          "Vercel",
          "Neon",
          "Upstash Redis",
          "Docker",
          "GitHub Actions",
        ],
      },
    ],
  },
  {
    slug: "roboblocks",
    name: "RoboBlocks",
    tagline: "Jogo para aprender algoritmos consertando uma fábrica",
    summary:
      "Plataforma gamificada para ensinar lógica, algoritmos e pensamento computacional a crianças do 4º ano, alinhada à BNCC. Guiado pelo mascote Brasilino, o jogador põe ordem em uma fábrica em pixel art ao longo de três fases: organiza caixas por coordenadas, despacha cargas por critérios e programa um robô com blocos.",
    kind: "Projeto em equipe · jogo educacional",
    status: "em produção",
    period: "2026",
    team: "3 desenvolvedores",
    role: "Criei o protótipo, migrei para Next.js e fiz a tela de ajuda, a responsividade, as animações de dica e o deploy.",
    links: {
      app: "https://fabrica-de-algor-timo.vercel.app",
      repo: "https://github.com/KaiokkFernandes/RoboBlocks",
    },
    image: {
      src: "/images/imagens_projetos/roboBlocks.png",
      width: 1627,
      height: 730,
      alt: "Tela inicial do RoboBlocks com o logo em pixel art, o mascote Brasilino em um balão de fala convidando a consertar a fábrica, o botão Jogar e os atalhos para Introdução, Mapa de fases, Ajuda e Configurações.",
      caption: "tela inicial · brasilino",
    },
    features: [
      {
        title: "Fase 1 · Esteira de Caixas",
        text: "8 rounds progressivos em que o jogador arrasta cada caixa para a célula certa da prateleira usando coordenadas (linha, coluna), com tutorial interativo e cartas de dica.",
      },
      {
        title: "Fase 2 · Despachante da Fábrica",
        text: "Classificação na prática: escolher as caixas de cada caminhão respeitando o que ele aceita, recusa e comporta, buscando o maior lucro.",
      },
      {
        title: "Fase 3 · Lavador Industrial",
        text: "Programação em blocos com Blockly: o jogador monta o algoritmo com lavar, avançar, repetir, subir andar e mudar direção, e o robô executa passo a passo.",
      },
      {
        title: "História com o Brasilino",
        text: "Abertura narrada que pergunta o nome do jogador e diálogos com o mascote, cujas expressões mudam conforme a situação.",
      },
      {
        title: "Pontuação e progresso",
        text: "Estrelas por round, pontos só na primeira conclusão, mapa de fases com o andamento de cada round e progresso salvo no navegador.",
      },
      {
        title: "Relatório para o professor",
        text: "Desempenho por fase e round, com pontos, erros, dicas usadas e tempo, pronto para imprimir ou salvar em PDF e com a habilidade da BNCC de cada fase.",
      },
    ],
    engineering: [
      "O programa montado no Blockly roda em um interpretador isolado (js-interpreter), passo a passo, com limite de passos contra loops infinitos e destaque do bloco em execução.",
      "Arrastar e soltar com Pointer Events, o mesmo código para mouse no desktop e toque no celular.",
      "Áudio com canais separados para música e efeitos, que podem se sobrepor, volume salvo entre sessões e falha silenciosa quando o navegador bloqueia o som.",
      "Regras de pontuação centralizadas em um único módulo (pontos só na primeira conclusão, melhor estrela preservada no replay), com o estado do jogo persistido em localStorage.",
    ],
    stack: [
      {
        layer: "frontend",
        items: ["Next.js 14", "React 18", "JavaScript", "CSS Modules"],
      },
      {
        layer: "jogo",
        items: ["Blockly", "js-interpreter", "Pointer Events"],
      },
      {
        layer: "infra",
        items: ["Vercel"],
      },
    ],
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
  { index: "05", label: "Pessoais", href: "#pessoais" },
  { index: "06", label: "Hackathon", href: "#hackathon" },
  { index: "07", label: "Formação", href: "#formacao" },
  { index: "08", label: "Contato", href: "#contato" },
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
