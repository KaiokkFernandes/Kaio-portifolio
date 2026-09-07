import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  /** Rótulo do cabeçalho do painel. Sem ele, o painel é só a moldura. */
  label?: string;
  /** Texto alinhado à direita no cabeçalho (contagem, período, status). */
  meta?: ReactNode;
  interactive?: boolean;
  className?: string;
  bodyClassName?: string;
};

/** Marcas de canto — a assinatura visual dos painéis do console. */
export function Corners() {
  return (
    <span aria-hidden="true">
      <span className="tick tick-tl" />
      <span className="tick tick-tr" />
      <span className="tick tick-bl" />
      <span className="tick tick-br" />
    </span>
  );
}

export function Panel({
  children,
  label,
  meta,
  interactive = false,
  className = "",
  bodyClassName = "",
}: PanelProps) {
  return (
    <div
      className={`panel ${interactive ? "panel-interactive" : ""} ${className}`}
    >
      <Corners />
      {label ? (
        <div className="panel-head">
          <span className="panel-title">{label}</span>
          {meta ? <span className="panel-meta">{meta}</span> : null}
        </div>
      ) : null}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
