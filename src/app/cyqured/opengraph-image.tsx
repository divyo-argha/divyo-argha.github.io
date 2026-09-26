import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "CyQured: A Tabletop Game for Personal Cybersecurity Education — USENIX SOUPS 2026 (SOUPS26)";

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
          padding: "72px 80px",
          background: "#0c0e12",
          color: "#f0f2f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34d399",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            USENIX SOUPS 2026 &middot; SOUPS26
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Tabletop Serious Game
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              letterSpacing: -1,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            CYQURED
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#38bdf8",
              lineHeight: 1.3,
            }}
          >
            Personal Cybersecurity Education in Connected Homes
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: 960,
            }}
          >
            28-Cell Smart Home Cyclic Track &middot; 84 Playable STRIDE Cards &middot; 50-Participant Empirical Evaluation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: 24,
            color: "#cbd5e1",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <span>Argha Pratim Saha (Divyo Argha)</span>
            <span>&middot;</span>
            <span>Utsho Das</span>
            <span>&middot;</span>
            <span>SUST &amp; BRAC</span>
          </div>
          <div style={{ color: "#34d399", fontWeight: 600 }}>divyo-argha.github.io/cyqured/</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
