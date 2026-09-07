import Image from "next/image";

import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { careerRange, experiences } from "@/data/content";
import { spanGeometry, yearTicks } from "@/lib/timeline";

const spanTone = ["bg-signal", "bg-warn", "bg-line-strong"];

export function Experience() {
  const ticks = yearTicks(careerRange);

  return (
    <Section
      id="experiencia"
      index="03"
      label="trace / carreira"
      meta={`${experiences.length} spans`}
      title="Três anos entregando produto em contextos bem diferentes"
      description="Mercado imobiliário, cibersegurança e educação — cada um com suas próprias exigências de escala, segurança e confiabilidade."
    >
      {/* Waterfall: cada experiência é um span no eixo temporal */}
      <Reveal>
        <Panel label="career.trace" meta={`${careerRange.start} → ${careerRange.end}`}>
          <div className="p-4 md:p-6">
            <div className="relative h-5 border-b border-line">
              {ticks.map((tick) => (
                <span
                  key={tick.year}
                  style={{ left: tick.left }}
                  className="absolute top-0 -translate-x-1/2 font-mono text-[0.68rem] text-subtle"
                >
                  {tick.year}
                </span>
              ))}
            </div>

            <ol className="mt-3 space-y-2">
              {[...experiences].reverse().map((job, index) => {
                const geometry = spanGeometry(careerRange, job);

                return (
                  <li key={job.company} className="relative h-7">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 right-0 border-b border-dotted border-line"
                    />
                    <span
                      style={{ left: geometry.left, width: geometry.width }}
                      className={`absolute inset-y-0 flex items-center gap-2 px-2 ${spanTone[index] ?? "bg-line-strong"} ${
                        index === 2 ? "text-fg-strong" : "text-bg"
                      }`}
                    >
                      <span className="truncate font-mono text-[0.7rem] font-medium">
                        {job.company}
                      </span>
                    </span>
                    <span className="sr-only">
                      {job.company}: {job.period} ({geometry.months} meses)
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </Panel>
      </Reveal>

      {/* Detalhe de cada span */}
      <ol className="mt-6 space-y-6">
        {experiences.map((job, index) => (
          <li key={job.company}>
            <Reveal delay={index * 70}>
              <Panel
                interactive
                label={`span_0${index + 1} · ${job.company}`}
                meta={job.period}
              >
                <article className="p-5 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={job.logo}
                        alt={`Logo da ${job.company}`}
                        width={44}
                        height={44}
                        className="h-11 w-11 border border-line object-cover grayscale"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{job.company}</h3>
                        <p className="mt-0.5 font-mono text-[0.75rem] text-signal">
                          {job.role}
                        </p>
                      </div>
                    </div>
                    <p className="label-mono text-subtle">{job.location}</p>
                  </div>

                  <p className="mt-5 leading-relaxed text-muted">
                    {job.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((highlight) => (
                      <li key={highlight.text} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-1 font-mono text-xs text-signal-dim"
                        >
                          ▸
                        </span>
                        <p className="text-sm leading-relaxed text-muted">
                          {highlight.title ? (
                            <strong className="font-mono text-[0.78rem] font-medium text-warn">
                              {highlight.title.toLowerCase()}:{" "}
                            </strong>
                          ) : null}
                          {highlight.text}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <span className="tag">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Panel>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
