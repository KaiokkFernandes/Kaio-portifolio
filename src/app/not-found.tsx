import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você procura não existe ou foi movida.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-2">
          Erro 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          O endereço que você acessou não existe ou foi movido. Que tal voltar
          para o início?
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
