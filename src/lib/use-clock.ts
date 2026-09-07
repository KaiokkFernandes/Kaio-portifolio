"use client";

import { useSyncExternalStore } from "react";

/**
 * Relógio de Santa Maria (America/Sao_Paulo) para a barra de status do hero.
 * O valor é mantido em módulo e só notifica quando o segundo muda, evitando
 * re-renders desnecessários e o loop de snapshot instável do React.
 */
const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const PLACEHOLDER = "--:--:--";

let current = PLACEHOLDER;
let timer: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  if (!timer) {
    current = formatter.format(new Date());
    timer = setInterval(() => {
      const next = formatter.format(new Date());
      if (next === current) return;
      current = next;
      listeners.forEach((listener) => listener());
    }, 1000);
  }

  return () => {
    listeners.delete(onStoreChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
      current = PLACEHOLDER;
    }
  };
}

export function useClock() {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => PLACEHOLDER,
  );
}
