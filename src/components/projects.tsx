import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { highlights } from "@/data/content";

const fields = [
  { key: "problem" as const, label: "contexto", tone: "text-subtle" },
  { key: "solution" as const, label: "ação", tone: "text-warn" },
  { key: "impact" as const, label: "resultado", tone: "text-signal" },
];

export function Projects() {
  return (
    <Section
      id="projetos"
      index="04"
      label="serviços entregues"
      meta={`${highlights.length} relatórios`}
      title="Entregas que eu conduzi de ponta a ponta"
      description="Um recorte dos projetos mais representativos que desenvolvi nas empresas por onde passei — do contexto do problema ao resultado."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <Panel
              interactive
              label={`report_00${index + 1} · ${item.company}`}
              meta={item.period}
              className="h-full"
            >
              <div className="flex h-full flex-col p-5 md:p-6">
                <h3 className="text-base font-bold leading-snug">
                  {item.title}
                </h3>

                <dl className="mt-5 space-y-4">
                  {fields.map((field) => (
                    <div key={field.key} className="grid content-start gap-1">
                      <dt className={`label-mono ${field.tone}`}>
                        {field.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted">
                        {item[field.key]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-5 [&]:mt-6">
                  {item.stack.map((tech) => (
                    <li key={tech}>
                      <span className="tag">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-8 font-mono text-[0.75rem] text-subtle">
          <span className="text-signal">$</span> ls ~/experimentos —{" "}
          <a
            href="https://github.com/KaiokkFernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-signal"
          >
            github.com/KaiokkFernandes
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
