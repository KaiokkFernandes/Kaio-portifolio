"use client";

import { useEffect, useState } from "react";

import { navigation, person } from "@/data/content";
import { useClock } from "@/lib/use-clock";
import { useTheme } from "@/lib/use-theme";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { isLight, toggle: toggleTheme } = useTheme();
  const clock = useClock();

  // Destaca no menu a seção visível no momento.
  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg-deep/92 backdrop-blur-sm">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label={`${person.name} — ir para o início`}
        >
          <span className="grid h-7 w-7 place-items-center border border-signal-dim font-mono text-[0.65rem] font-bold text-signal transition-colors group-hover:bg-signal group-hover:text-bg">
            KF
          </span>
          <span className="font-mono text-[0.8rem] tracking-tight text-fg-strong">
            kaio.fernandes
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="status-dot" aria-hidden="true" />
            <span className="label-mono text-signal">live</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-baseline gap-1.5 border-l border-line px-3 py-1.5 font-mono text-[0.75rem] transition-colors ${
                      isActive
                        ? "bg-panel text-signal"
                        : "text-muted hover:bg-panel hover:text-fg-strong"
                    }`}
                  >
                    <span
                      className={isActive ? "text-signal" : "text-warn-dim"}
                      aria-hidden="true"
                    >
                      {item.index}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span
            className="label-mono hidden text-subtle md:block"
            aria-label="Horário local em Santa Maria"
          >
            {clock} BRT
          </span>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
            className="border border-line px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:border-signal-dim hover:text-signal"
          >
            {isLight ? "[ dark ]" : "[ light ]"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="border border-line px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:border-signal-dim hover:text-signal lg:hidden"
          >
            {open ? "[ x ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line bg-bg-deep lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-page py-3">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-line py-3 font-mono text-sm text-muted transition-colors hover:text-signal"
                >
                  <span className="text-warn-dim" aria-hidden="true">
                    {item.index}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={person.resume}
            download
            onClick={() => setOpen(false)}
            className="cmd mt-4 w-full justify-center"
          >
            ./curriculo.pdf
          </a>
        </nav>
      </div>
    </header>
  );
}
