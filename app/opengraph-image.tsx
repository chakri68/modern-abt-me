import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { person } from "@/lib/content";

export const dynamic = "force-static";
export const alt = "Chakradhar Reddy — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The night edition's front page: masthead over a Game of Life.
const BG = "#12100E";
const PAPER = "#F1EADD";
const MUTED = "#A69C8C";
const ACCENT = "#E8553A";
const NEWBORN = "#6B2416";
const SURVIVOR = "#2B2521";

const CELL = 42;
const COLS = Math.ceil(size.width / CELL);
const ROWS = Math.ceil(size.height / CELL);

// Seeded, so every build prints the same universe.
function universe(generations: number) {
  let s = 68;
  const rand = () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
  let grid: number[] = Array.from({ length: COLS * ROWS }, () => (rand() < 0.32 ? 2 : 0));
  for (let g = 0; g < generations; g++) {
    grid = grid.map((v, i) => {
      const x = i % COLS;
      const y = (i - x) / COLS;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++)
          if ((dx || dy) && grid[((y + dy + ROWS) % ROWS) * COLS + ((x + dx + COLS) % COLS)]) n++;
      return v ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 2 : 0;
    });
  }
  return grid;
}

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

export default async function OpengraphImage() {
  const [serif, serifItalic, mono] = await Promise.all([
    font("InstrumentSerif-Regular.ttf"),
    font("InstrumentSerif-Italic.ttf"),
    font("DMMono-Regular.ttf"),
  ]);
  const cells = universe(14);

  const strip = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "DM Mono",
    fontSize: 19,
    letterSpacing: 2,
    textTransform: "uppercase",
  } as const;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", backgroundColor: BG, color: PAPER }}>
        {cells.map((v, i) =>
          v ? (
            <div
              key={i}
              style={{
                position: "absolute",
                left: (i % COLS) * CELL,
                top: Math.floor(i / COLS) * CELL,
                width: CELL - 1,
                height: CELL - 1,
                backgroundColor: v === 2 ? NEWBORN : SURVIVOR,
              }}
            />
          ) : null,
        )}
        <div
          style={{
            position: "absolute",
            // satori doesn't do `inset`
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            backgroundImage:
              "linear-gradient(to bottom, rgba(18,16,14,0.85) 0%, rgba(18,16,14,0.4) 45%, rgba(18,16,14,0.92) 100%)",
          }}
        />

        <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "44px 64px 48px" }}>
          <div style={{ ...strip, paddingBottom: 18, borderBottom: `1px solid ${PAPER}` }}>
            <span>chakri.me · Night edition</span>
            <span style={{ color: ACCENT }}>{person.openTo}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "baseline", fontFamily: "Instrument Serif", fontSize: 158, lineHeight: 1, letterSpacing: -5 }}>
              <span>{person.first}</span>
              <span style={{ fontStyle: "italic", marginLeft: 34 }}>{person.last}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 22, height: 6, borderTop: `1px solid ${PAPER}`, borderBottom: `1px solid ${PAPER}` }} />
            <div style={{ display: "flex", marginTop: 26, fontFamily: "Instrument Serif", fontStyle: "italic", fontSize: 44, color: ACCENT }}>
              All the software that’s fit to ship.
            </div>
          </div>

          <div style={{ ...strip, paddingTop: 18, borderTop: `1px solid ${PAPER}`, color: MUTED }}>
            <span style={{ color: PAPER }}>{person.role} · {person.location}</span>
            <span>Full-stack · System design · UX</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "DM Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
