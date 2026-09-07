import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { person } from "@/data/content";

const principles = [
  {
    key: "arch",
    title: "Arquitetura antes do código",
    text: "Clean Architecture e limites bem definidos para que a regra de negócio não fique refém do framework.",
  },
  {
    key: "events",
    title: "Orientado a eventos",
    text: "CDC com Debezium e streaming com Kafka para desacoplar sistemas e trabalhar com dados em tempo real.",
  },
  {
    key: "secops",
    title: "Observabilidade e segurança",
    text: "Cibersegurança aplicada ao produto: hardening, autenticação segura e alertas proativos.",
  },
  {
    key: "delivery",
    title: "Entrega contínua",
    text: "Docker, GitHub Actions e CI/CD para que o caminho do commit até a produção seja curto e previsível.",
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      index="01"
      label="identidade"
      meta="about.md"
      title="Do banco de dados à interface, com a mesma atenção"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <Panel label="about.md" meta="leitura · 1 min" className="h-full">
            <div className="space-y-4 p-6 md:p-8">
              {person.about.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Panel>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.key} delay={index * 70}>
              <Panel interactive className="h-full">
                <div className="p-5">
                  <p className="font-mono text-[0.72rem] text-warn">
                    [{principle.key}]
                  </p>
                  <h3 className="mt-3 text-sm font-bold">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.text}
                  </p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
