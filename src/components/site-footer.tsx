import { navigation, person } from "@/data/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem]">
          <span className="bg-signal px-2 py-0.5 font-medium text-bg">
            NORMAL
          </span>
          <span className="text-fg">kaio.fernandes</span>
          <span className="text-subtle">·</span>
          <span className="text-muted">{person.role.toLowerCase()}</span>
          <span className="text-subtle">·</span>
          <span className="text-muted">santa maria / rs</span>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[0.72rem] text-subtle transition-colors hover:text-signal"
                >
                  {item.label.toLowerCase()}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#inicio"
                className="font-mono text-[0.72rem] text-subtle transition-colors hover:text-signal"
              >
                ↑ topo
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <p className="container-page py-3 font-mono text-[0.68rem] text-subtle">
          © {year} {person.name} · construído com Next.js, TypeScript e Tailwind
          CSS
        </p>
      </div>
    </footer>
  );
}
