import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { GithubIcon } from "@/components/ui/brand-icons";
import { Panel } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { personalProjects, type PersonalProject } from "@/data/content";

/** URL sem protocolo, para exibir no registro do projeto. */
const bare = (url: string) => url.replace(/^https?:\/\//, "");

export function PersonalProjects() {
  return (
    <Section
      id="pessoais"
      index="05"
      label="projetos pessoais"
      meta={`${personalProjects.length} em produção`}
      title="O que eu construo além do trabalho"
      description="Produtos que eu desenvolvo fora do expediente, sozinho ou em equipe, do primeiro commit ao deploy."
    >
      <div className="space-y-12 [&>article+article]:border-t [&>article+article]:border-line [&>article+article]:pt-12">
        {personalProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectEntry({ project }: { project: PersonalProject }) {
  const record = [
    { key: "tipo", value: project.kind },
    { key: "período", value: project.period },
    ...(project.team ? [{ key: "equipe", value: project.team }] : []),
    {
      key: "app",
      value: (
        <a
          href={project.links.app}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-signal"
        >
          {bare(project.links.app)}
        </a>
      ),
    },
    {
      key: "código",
      value: (
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-signal"
        >
          {bare(project.links.repo).replace("github.com/", "")}
        </a>
      ),
    },
  ];

  return (
    <article aria-labelledby={`${project.slug}-nome`}>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal>
          <Panel
            label={`media · ${project.slug}`}
            meta={`${project.image.width}×${project.image.height}`}
            className="flex h-full flex-col"
            bodyClassName="flex flex-1 flex-col"
          >
            <figure className="flex flex-1 flex-col">
              <a
                href={project.links.app}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center overflow-hidden bg-bg-deep"
              >
                <Image
                  src={project.image.src}
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[0.7rem] text-subtle">
                <span className="text-signal">▸</span> {project.image.caption}
              </figcaption>
            </figure>
          </Panel>
        </Reveal>

        <Reveal delay={80}>
          <Panel
            label={`project · ${project.slug}`}
            meta={
              <span className="flex items-center gap-1.5">
                <span className="status-dot" aria-hidden="true" />
                {project.status}
              </span>
            }
            className="h-full"
          >
            <div className="flex h-full flex-col p-5 md:p-6">
              <h3
                id={`${project.slug}-nome`}
                className="font-mono text-2xl font-bold text-fg-strong"
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-warn">{project.tagline}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>

              <dl className="mt-6 divide-y divide-line border-y border-line">
                {record.map((row) => (
                  <div
                    key={row.key}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2.5"
                  >
                    <dt className="label-mono w-16 shrink-0 text-subtle">
                      {row.key}
                    </dt>
                    <dd className="min-w-0 flex-1 break-words text-sm text-fg">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {project.role ? (
                <div className="mt-5 grid gap-1">
                  <p className="label-mono text-warn">minha parte</p>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.role}
                  </p>
                </div>
              ) : null}

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <a
                  href={project.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmd cmd-primary"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  ./abrir_app
                </a>
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmd"
                  aria-label={`Código do ${project.name} no GitHub`}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  código
                </a>
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <Panel
          label="features"
          meta={`${project.features.length} módulos`}
          className="mt-4"
        >
          <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={feature.title} className="bg-panel p-5">
                <p className="label-mono text-warn">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-sm font-bold text-fg-strong">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </li>
            ))}
          </ol>
        </Panel>
      </Reveal>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal delay={160}>
          <Panel label="engenharia" meta="decisões" className="h-full">
            <ul className="space-y-4 p-5 md:p-6">
              {project.engineering.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="font-mono text-signal" aria-hidden="true">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={200}>
          <Panel
            label="stack"
            meta={`${project.stack.length} camadas`}
            className="h-full"
          >
            <dl className="space-y-5 p-5 md:p-6">
              {project.stack.map((group) => (
                <div key={group.layer}>
                  <dt className="label-mono text-subtle">{group.layer}</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <li key={tech}>
                          <span className="tag">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>
        </Reveal>
      </div>
    </article>
  );
}
