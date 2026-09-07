"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Lê o tema direto do DOM (`<html class="light">`), que é a fonte de verdade
 * definida pelo script inline do layout antes da primeira pintura.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("light");

/** No servidor assumimos o tema escuro (padrão do site). */
const getServerSnapshot = () => false;

export function useTheme() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = !root.classList.contains("light");
    root.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* localStorage indisponível (modo privado) — ignora silenciosamente */
    }
  }, []);

  return { isLight, toggle };
}
