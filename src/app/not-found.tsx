import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Container>
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>Page not found.</h1>
        <Link href="/" className={styles.link}>
          Back to home
        </Link>
      </div>
    </Container>
  );
}
