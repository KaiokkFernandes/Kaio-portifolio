import Image from "next/image";

import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Corners, Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { eventLog, person, stats } from "@/data/content";

const ticker = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP/Laravel",
  "C#/.NET",
  "Apache Kafka",
  "Debezium",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Clean Architecture",
  "Storybook",
];

const systemBar = [
  { key: "system", value: "kaio.fernandes" },
  { key: "region", value: "santa-maria-rs / br" },
  { key: "uptime", value: "3+ anos em produção" },
  { key: "status", value: "disponível", signal: true },
];

const levelColor: Record<string, string> = {
  OK: "text-signal",
  INFO: "text-muted",
  WARN: "text-warn",
};

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative overflow-hidden pt-20 pb-14"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="container-page relative">
        {/* Barra de estado do sistema */}
        <Reveal>
          <dl className="grid grid-cols-2 border border-line bg-panel lg:grid-cols-4">
            {systemBar.map((cell) => (
              <div
                key={cell.key}
                className="border-b border-r border-line px-4 py-3 last:border-r-0 lg:border-b-0"
              >
                <dt className="label-mono text-subtle">{cell.key}</dt>
                <dd
                  className={`mt-1 flex items-center gap-2 font-mono text-[0.8rem] ${
                    cell.signal ? "text-signal" : "text-fg"
                  }`}
                >
                  {cell.signal ? (
                    <span className="status-dot" aria-hidden="true" />
                  ) : null}
                  {cell.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Identidade + retrato */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={80}>
            <div className="panel relative h-full px-6 py-10 md:px-10 md:py-14">
              <Corners />

              <p className="font-mono text-sm text-subtle">
                <span className="text-signal">$</span> whoami
              </p>

              <h1
                id="inicio-titulo"
                className="mt-4 text-[clamp(2rem,7vw,4.25rem)] font-bold leading-[1.02]"
              >
                KAIO FERNANDES
                <span className="mt-1 block text-signal">
                  FULL_STACK_DEV
                  <span className="caret" aria-hidden="true" />
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
                {person.tagline}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                <li>
                  <a href="#projetos" className="cmd cmd-primary">
                    ./ver_projetos
                  </a>
                </li>
                <li>
                  <a href={person.resume} download className="cmd">
                    ./curriculo.pdf
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KaiokkFernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cmd"
                    aria-label="Perfil de Kaio Fernandes no GitHub"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kaio-fernandes-4a579b211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cmd"
                    aria-label="Perfil de Kaio Fernandes no LinkedIn"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <Panel label="operator" meta="id 001" className="h-full">
              <div className="relative overflow-hidden">
                <Image
                  src={person.photo}
                  alt={`Retrato de ${person.name}, ${person.role.toLowerCase()}`}
                  width={640}
                  height={640}
                  priority
                  sizes="(max-width: 1024px) 100vw, 26rem"
                  className="h-auto w-full object-cover contrast-[1.08] grayscale"
                />
                {/* Tratamento de sinal: tinta verde + varredura */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-signal/12 mix-blend-color"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.22)_0_1px,transparent_1px_3px)]"
                />
                <span
                  aria-hidden="true"
                  className="animate-sweep pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-signal/14 to-transparent"
                />
              </div>

              <dl className="grid grid-cols-2 border-t border-line font-mono text-[0.7rem]">
                <div className="border-r border-line px-3 py-2.5">
                  <dt className="label-mono text-subtle">role</dt>
                  <dd className="mt-1 text-fg">full stack</dd>
                </div>
                <div className="px-3 py-2.5">
                  <dt className="label-mono text-subtle">since</dt>
                  <dd className="mt-1 text-fg">2023</dd>
                </div>
              </dl>
            </Panel>
          </Reveal>
        </div>

        {/* Métricas */}
        <Reveal delay={120}>
          <dl className="mt-6 grid grid-cols-2 border border-line bg-panel lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative border-b border-r border-line px-5 py-6 last:border-r-0 lg:border-b-0"
              >
                <dt className="text-xs leading-snug text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-mono text-3xl font-bold text-warn">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Stream de eventos da carreira */}
        <Reveal delay={160}>
          <Panel
            label="event_stream · carreira"
            meta={`${eventLog.length} eventos`}
            className="mt-6"
          >
            <ol className="divide-y divide-line overflow-x-auto">
              {eventLog.map((event) => (
                <li
                  key={`${event.ts}-${event.service}`}
                  className="flex items-baseline gap-3 whitespace-nowrap px-4 py-2 font-mono text-[0.72rem]"
                >
                  <time dateTime={event.ts} className="w-[4.6rem] shrink-0 text-subtle">
                    [{event.ts}]
                  </time>
                  <span
                    className={`w-10 shrink-0 ${levelColor[event.level] ?? "text-muted"}`}
                  >
                    {event.level}
                  </span>
                  <span className="text-fg">{event.service}</span>
                  <span className="text-subtle">·</span>
                  <span className="text-muted">{event.message}</span>
                </li>
              ))}
            </ol>
          </Panel>
        </Reveal>
      </div>

      {/* Fita de tecnologias */}
      <div
        aria-hidden="true"
        className="relative mt-10 flex overflow-hidden border-y border-line bg-bg-deep py-2.5"
      >
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {[...ticker, ...ticker].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-mono text-[0.72rem] text-subtle"
            >
              <span className="mr-2 text-signal-dim">▪</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
