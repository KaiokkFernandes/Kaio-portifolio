import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Corners } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { person } from "@/data/content";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
} as const;

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-warn">07</span>
            <span className="label-mono text-muted">conexão</span>
            <span aria-hidden="true" className="rule-dotted" />
            <span className="label-mono hidden text-subtle sm:block">
              aceitando conexões
            </span>
          </div>

          <h2
            id="contato-titulo"
            className="mt-6 max-w-3xl text-2xl font-bold leading-tight md:text-4xl"
          >
            Vamos construir algo que funciona de verdade?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Estou aberto a oportunidades como desenvolvedor full stack, projetos
            freelance e boas conversas sobre arquitetura, dados e produto.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="panel relative mt-10 max-w-3xl">
            <Corners />
            <div className="panel-head">
              <span className="panel-title">kaio@portfolio: ~</span>
              <span className="panel-meta">bash</span>
            </div>

            <div className="p-5 font-mono text-[0.8rem] md:p-6">
              <p className="text-subtle">
                <span className="text-signal">$</span> contato --listar
              </p>

              <ul className="mt-4 space-y-1">
                {person.socials.map((social) => {
                  const Icon = icons[social.icon];
                  const external = social.icon !== "mail";

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-3 border border-transparent px-2 py-2 transition-colors hover:border-line hover:bg-bg-deep"
                      >
                        <Icon
                          className="h-3.5 w-3.5 shrink-0 text-subtle transition-colors group-hover:text-signal"
                          aria-hidden="true"
                        />
                        <span className="w-20 shrink-0 text-warn">
                          {social.label.toUpperCase()}
                        </span>
                        <span className="truncate text-fg transition-colors group-hover:text-signal">
                          {social.handle}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 text-subtle">
                <span className="text-signal">$</span>
                <span className="caret" aria-hidden="true" />
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <a href={`mailto:${person.email}`} className="cmd cmd-primary">
                ./enviar_email
              </a>
            </li>
            <li>
              <a href={person.resume} download className="cmd">
                ./curriculo.pdf
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
