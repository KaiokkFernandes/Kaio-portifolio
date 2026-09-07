/** Utilitários para o waterfall de experiências (eixo em meses). */

function toMonths(value: string) {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
}

export function monthsBetween(from: string, to: string) {
  return toMonths(to) - toMonths(from);
}

/** Posição e largura de um span, em porcentagem do eixo total. */
export function spanGeometry(
  range: { start: string; end: string },
  span: { start: string; end: string },
) {
  const total = monthsBetween(range.start, range.end) || 1;
  const offset = monthsBetween(range.start, span.start);
  const length = monthsBetween(span.start, span.end);

  return {
    left: `${(offset / total) * 100}%`,
    width: `${Math.max((length / total) * 100, 4)}%`,
    months: length,
  };
}

/** Marcas de ano posicionadas no eixo. */
export function yearTicks(range: { start: string; end: string }) {
  const firstYear = Number(range.start.split("-")[0]);
  const lastYear = Number(range.end.split("-")[0]);
  const total = monthsBetween(range.start, range.end) || 1;
  const ticks = [];

  for (let year = firstYear; year <= lastYear; year += 1) {
    const at = monthsBetween(range.start, `${year}-01`);
    const ratio = Math.min(Math.max(at / total, 0), 1);
    ticks.push({ year, left: `${ratio * 100}%` });
  }

  return ticks;
}
