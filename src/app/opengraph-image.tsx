import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Argha Pratim Saha (Divyo Argha / Argha Saha) — Human-Centered Security & Privacy Researcher";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 88px",
          background: "#f4f5f3",
          color: "#111413",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#0f5c4a",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#5b615e",
              fontWeight: 600,
            }}
          >
            Researcher &middot; PhD Applicant
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Argha Pratim Saha
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 32,
            fontWeight: 600,
            color: "#0f5c4a",
            letterSpacing: 0.5,
          }}
        >
          Divyo Argha &middot; Argha Saha
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#5b615e",
            lineHeight: 1.4,
            maxWidth: 960,
          }}
        >
          Usable security &amp; privacy, tabletop security education (CyQured &middot; USENIX SOUPS 2026), and qualitative HCI research.
        </div>
      </div>
    ),
    { ...size },
  );
}
