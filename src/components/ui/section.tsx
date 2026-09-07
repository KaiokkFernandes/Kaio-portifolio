import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  meta?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Cabeçalho de seção no formato de linha de console:
 * `02 / CAPABILITIES ······················ 4 MODULES`
 *
 * Cada seção é uma <section> rotulada pelo próprio título, o que preserva a
 * estrutura semântica para leitores de tela e buscadores.
 */
export function Section({
  id,
  index,
  label,
  title,
  meta,
  description,
  children,
  className = "",
}: SectionProps) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative scroll-mt-24 border-t border-line py-16 md:py-24 ${className}`}
    >
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-warn">{index}</span>
            <span className="label-mono text-muted">{label}</span>
            <span aria-hidden="true" className="rule-dotted" />
            {meta ? (
              <span className="label-mono hidden text-subtle sm:block">
                {meta}
              </span>
            ) : null}
          </div>

          <h2
            id={headingId}
            className="mt-6 max-w-3xl text-2xl font-bold leading-tight md:text-4xl"
          >
            {title}
          </h2>

          {description ? (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
