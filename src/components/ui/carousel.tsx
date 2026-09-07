"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

type Slide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type CarouselProps = {
  slides: Slide[];
  /** Nome acessível do carrossel. */
  label: string;
};

/**
 * Carrossel de imagens no visual do console: as fotos são exibidas em uma
 * "janela" 4:3 com letterbox, e a navegação usa comandos em colchetes.
 * Suporta setas do teclado enquanto o foco está dentro do componente.
 */
export function Carousel({ slides, label }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = (next: number) => setIndex((next + total) % total);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  }

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className="flex h-full flex-col"
    >
      <div className="relative overflow-hidden bg-bg-deep">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} de ${total}`}
              aria-hidden={slideIndex !== index}
              className="relative aspect-[4/3] w-full shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                sizes="(max-width: 1024px) 100vw, 44rem"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Contador sobre a imagem */}
        <span className="pointer-events-none absolute right-3 top-3 border border-line bg-bg/85 px-2 py-1 font-mono text-[0.68rem] text-signal">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-3 py-2.5">
        <p
          aria-live="polite"
          className="min-w-0 truncate font-mono text-[0.7rem] text-muted"
        >
          {slides[index].caption ?? slides[index].alt}
        </p>

        <div className="flex shrink-0 items-center gap-1.5">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(slideIndex)}
              aria-label={`Ir para a imagem ${slideIndex + 1} de ${total}`}
              aria-current={slideIndex === index ? "true" : undefined}
              className={`font-mono text-[0.7rem] transition-colors ${
                slideIndex === index
                  ? "text-signal"
                  : "text-subtle hover:text-fg"
              }`}
            >
              {slideIndex === index ? "■" : "□"}
            </button>
          ))}

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Imagem anterior"
            className="ml-1 border border-line px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:border-signal-dim hover:text-signal"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próxima imagem"
            className="border border-line px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:border-signal-dim hover:text-signal"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
