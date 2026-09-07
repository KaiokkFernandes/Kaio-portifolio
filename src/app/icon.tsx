import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: sigla em verde de sinal sobre o fundo do console. */
export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "assets", "fonts", "JetBrainsMono-700.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070a",
          border: "3px solid #3ddc97",
          color: "#3ddc97",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "JetBrains Mono",
          letterSpacing: -1,
        }}
      >
        KF
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: font, weight: 700, style: "normal" },
      ],
    },
  );
}
