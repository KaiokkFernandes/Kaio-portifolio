import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { person } from "@/data/content";

export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#05070a";
const PANEL = "#0a0e13";
const LINE = "#1a222c";
const LINE_STRONG = "#2a3641";
const FG = "#f1f7fa";
const MUTED = "#8896a4";
const SUBTLE = "#5d6c7a";
const SIGNAL = "#3ddc97";
const WARN = "#f5b544";

function loadFont(weight: 400 | 700) {
  return readFile(join(process.cwd(), "assets", "fonts", `JetBrainsMono-${weight}.ttf`));
}

/** Marca de canto do painel. */
function Tick({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 14,
        height: 14,
        borderColor: SIGNAL,
        ...style,
      }}
    />
  );
}

const metrics = [
  { label: "anos em produção", value: "3+" },
  { label: "empresas", value: "3" },
  { label: "cobertura de testes", value: "80%" },
  { label: "tempo de relatório", value: "-40%" },
];

/** Imagem de compartilhamento no mesmo visual de console do site. */
export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 44,
          backgroundColor: BG,
          fontFamily: "JetBrains Mono",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: `1px solid ${LINE}`,
            backgroundColor: PANEL,
          }}
        >
          <Tick style={{ top: -1, left: -1, borderTop: "2px solid", borderLeft: "2px solid" }} />
          <Tick style={{ top: -1, right: -1, borderTop: "2px solid", borderRight: "2px solid" }} />
          <Tick style={{ bottom: -1, left: -1, borderBottom: "2px solid", borderLeft: "2px solid" }} />
          <Tick style={{ bottom: -1, right: -1, borderBottom: "2px solid", borderRight: "2px solid" }} />

          {/* Cabeçalho do painel */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 28px",
              borderBottom: `1px solid ${LINE}`,
              backgroundColor: BG,
              fontSize: 18,
              letterSpacing: 3,
              color: MUTED,
            }}
          >
            <div style={{ display: "flex" }}>SYSTEM: KAIO.FERNANDES</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: SIGNAL }}>
              <div style={{ display: "flex", width: 8, height: 8, borderRadius: 8, backgroundColor: SIGNAL }} />
              LIVE
            </div>
          </div>

          {/* Corpo */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "44px 48px" }}>
            <div style={{ display: "flex", fontSize: 22, color: SUBTLE }}>
              <span style={{ color: SIGNAL, marginRight: 12 }}>$</span> whoami
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 82,
                fontWeight: 700,
                letterSpacing: -3,
                color: FG,
              }}
            >
              KAIO FERNANDES
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 60,
                fontWeight: 700,
                letterSpacing: -2,
                color: SIGNAL,
              }}
            >
              FULL_STACK_DEV
            </div>

            <div style={{ display: "flex", marginTop: 26, fontSize: 22, color: MUTED, maxWidth: 940 }}>
              microsserviços · kafka + debezium (cdc) · react e next.js · node,
              laravel e .net
            </div>
          </div>

          {/* Rodapé com métricas */}
          <div style={{ display: "flex", borderTop: `1px solid ${LINE}` }}>
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "18px 26px",
                  borderRight: index === metrics.length - 1 ? "none" : `1px solid ${LINE}`,
                }}
              >
                <div style={{ display: "flex", fontSize: 16, color: SUBTLE, letterSpacing: 1 }}>
                  {metric.label}
                </div>
                <div style={{ display: "flex", marginTop: 6, fontSize: 34, fontWeight: 700, color: WARN }}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 28px",
              borderTop: `1px solid ${LINE_STRONG}`,
              backgroundColor: BG,
              fontSize: 16,
              color: SUBTLE,
              letterSpacing: 1,
            }}
          >
            <div style={{ display: "flex" }}>santa maria / rs — brasil</div>
            <div style={{ display: "flex" }}>github.com/KaiokkFernandes</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
