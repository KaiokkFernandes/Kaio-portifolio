import { FileText, Trophy } from "lucide-react";

import { Carousel } from "@/components/ui/carousel";
import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { hackathon } from "@/data/content";

const record = [
  { key: "evento", value: hackathon.event },
  { key: "edição", value: hackathon.edition },
  { key: "equipe", value: hackathon.team },
  { key: "tema", value: hackathon.theme },
  { key: "data", value: hackathon.date },
  { key: "carga horária", value: hackathon.workload },
  { key: "promoção", value: hackathon.organizer },
];

const fields = [
  { key: "context" as const, label: "contexto", tone: "text-subtle" },
  { key: "solution" as const, label: "ação", tone: "text-warn" },
  { key: "outcome" as const, label: "resultado", tone: "text-signal" },
];

export function Hackathon() {
  return (
    <Section
      id="hackathon"
      index="05"
      label="premiação"
      meta="code race 25"
      title="2º lugar no IX Code Race com uma IA para precificar imóveis"
      description="Maratona de 18 horas promovida pelo curso de Sistemas de Informação da Antonio Meneghetti Faculdade. O tema da edição era inteligência artificial."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Panel
            label="media · code_race_25"
            meta={`${hackathon.photos.length} imagens`}
            className="h-full"
          >
            <Carousel
              slides={hackathon.photos}
              label="Fotos da premiação do Code Race 25"
            />
          </Panel>
        </Reveal>

        <Reveal delay={80}>
          <Panel label="award" meta={hackathon.dateISO} className="h-full">
            <div className="flex h-full flex-col p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-warn" aria-hidden="true" />
                <p className="font-mono text-2xl font-bold text-warn">
                  {hackathon.award}
                </p>
              </div>

              <dl className="mt-6 divide-y divide-line border-y border-line">
                {record.map((row) => (
                  <div
                    key={row.key}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2.5"
                  >
                    <dt className="label-mono w-28 shrink-0 text-subtle">
                      {row.key}
                    </dt>
                    <dd className="min-w-0 flex-1 text-sm text-fg">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={hackathon.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cmd mt-6 self-start"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                ./certificado.pdf
              </a>
              <p className="mt-2 font-mono text-[0.68rem] text-subtle">
                certificado emitido pela Antonio Meneghetti Faculdade
              </p>
            </div>
          </Panel>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <Panel
          interactive
          label="project · avaliador de imóveis"
          meta="ia · ciência de dados"
          className="mt-4"
        >
          <div className="p-5 md:p-7">
            <h3 className="text-base font-bold">{hackathon.project.title}</h3>

            <dl className="mt-5 grid gap-5 md:grid-cols-3">
              {fields.map((field) => (
                <div key={field.key} className="grid content-start gap-1">
                  <dt className={`label-mono ${field.tone}`}>{field.label}</dt>
                  <dd className="text-sm leading-relaxed text-muted">
                    {hackathon.project[field.key]}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
              {hackathon.project.stack.map((tech) => (
                <li key={tech}>
                  <span className="tag">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </Reveal>
    </Section>
  );
}
