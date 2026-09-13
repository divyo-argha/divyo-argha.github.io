"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@/components/primitives/Icons";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Deferred a tick rather than set synchronously: the pre-hydration script
    // already painted the right theme via CSS, this only syncs the icon.
    // Falls back to "light", never system preference — dark is opt-in only.
    const timeout = setTimeout(() => {
      const current = document.documentElement.getAttribute("data-theme") as Theme | null;
      setTheme(current ?? "light");
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  function toggle() {
    const next: Theme = (theme ?? "light") === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable (private browsing) — theme just won't persist.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
