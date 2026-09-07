import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications, education, languages } from "@/data/content";

export function Education() {
  return (
    <Section
      id="formacao"
      index="06"
      label="registro"
      meta="formação · certificações · idiomas"
      title="Base acadêmica e estudo contínuo"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal>
          <Panel interactive label="graduação" meta="em curso" className="h-full">
            <div className="p-5">
              <h3 className="text-sm font-bold">{education.degree}</h3>
              <p className="mt-2 text-sm text-muted">{education.institution}</p>
              <p className="mt-4 font-mono text-[0.72rem] text-warn">
                {education.period}
              </p>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel
            interactive
            label="certificações"
            meta={`${certifications.length}`}
            className="h-full"
          >
            <ul className="divide-y divide-line">
              {certifications.map((item) => (
                <li key={item.title} className="px-5 py-4">
                  <p className="text-sm text-fg">{item.title}</p>
                  <p className="mt-1 font-mono text-[0.7rem] text-subtle">
                    {item.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={140}>
          <Panel
            interactive
            label="idiomas"
            meta={`${languages.length}`}
            className="h-full"
          >
            <ul className="divide-y divide-line">
              {languages.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-3 px-5 py-4"
                >
                  <span className="text-sm text-fg">{item.name}</span>
                  <span className="font-mono text-[0.7rem] text-signal">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
