import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";

export const metadata: Metadata = {
  title: "Redirecting to CyQured...",
  description: "CyQured has moved to /cyqured. Redirecting now...",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/cyqured/",
  },
};

export default function GameRedirectPage() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/cyqured/" />
      </head>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("/cyqured/");`,
        }}
      />
      <Container>
        <div style={{ padding: "100px 0", textAlign: "center" }}>
          <p style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--ink)" }}>
            Redirecting to{" "}
            <Link href="/cyqured/" style={{ color: "var(--accent)", fontWeight: 700 }}>
              CyQured
            </Link>
            ...
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            If you are not redirected automatically,{" "}
            <Link href="/cyqured/" style={{ textDecoration: "underline", color: "var(--accent)" }}>
              click here
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
