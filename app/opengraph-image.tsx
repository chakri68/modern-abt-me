import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Chakradhar Reddy — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Theme colors mirrored from globals.css (editorial dark theme)
const BG = "#0a0b0f";
const CREAM = "#f4f1e9";
const MUTED = "#8c8a83";
const ACCENT = "#e3c391";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Oversized decorative initial */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: 120,
            fontSize: 620,
            fontWeight: 800,
            color: CREAM,
            opacity: 0.04,
            lineHeight: 1,
          }}
        >
          C
        </div>

        {/* Top label */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          Software Engineer
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: -4,
            }}
          >
            <span style={{ color: CREAM }}>Chakradhar</span>
            <span style={{ color: ACCENT }}>Reddy</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: MUTED,
            }}
          >
            Building elegant, scalable applications.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid #26262b`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: CREAM,
            }}
          >
            chakri.me
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Full-Stack · System Design · UX
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
