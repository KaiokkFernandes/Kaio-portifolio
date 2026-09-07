import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <Section
      id="stack"
      index="02"
      label="capacidades"
      meta={`${skillGroups.length} módulos`}
      title="As ferramentas que uso para resolver problemas reais"
      description="Stack construída em produção — do front-end reativo à mensageria distribuída, passando por bancos relacionais e infraestrutura containerizada."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 70}>
            <Panel
              interactive
              label={`module_0${index + 1} · ${group.title}`}
              meta={`${group.items.length} itens`}
              className="h-full"
            >
              <div className="p-5 md:p-6">
                <p className="text-sm text-muted">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="tag">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
