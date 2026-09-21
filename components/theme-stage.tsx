"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import { DEFAULT_THEME, SECTIONS, STORAGE_KEY, THEMES, type ThemeId } from "@/lib/themes";
import { preparePixelReveal } from "@/lib/pixel-reveal";

type Origin = { x: number; y: number };

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId, origin?: Origin) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeStage>");
  return ctx;
}

const findSection = (ids: string[]) => ids.map((id) => document.getElementById(id)).find(Boolean);

// The section the reader is currently in, if any (as an index into SECTIONS).
function currentSection(): number | null {
  let found: number | null = null;
  SECTIONS.forEach((ids, i) => {
    const el = findSection(ids);
    if (el && el.getBoundingClientRect().top <= 160) found = i;
  });
  return found;
}

/**
 * Every theme is server-rendered into the page and CSS shows the one matching
 * <html data-theme>, so the right theme paints before hydration with no flash.
 * After mount we keep only the active panel in the tree, which also gets rid
 * of the duplicate section ids.
 */
export function ThemeStage({ panels }: { panels: Record<ThemeId, ReactNode> }) {
  const [active, setActive] = useState<ThemeId | null>(null);

  useEffect(() => {
    const fromDom = document.documentElement.dataset.theme as ThemeId | undefined;
    setActive(THEMES.some((t) => t.id === fromDom) ? fromDom! : DEFAULT_THEME);
  }, []);

  // Duplicate ids are gone once pruned, so honour a #hash from the initial load.
  useEffect(() => {
    if (!active || !location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    // only on the first prune
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active === null]);

  const setTheme = useCallback((id: ThemeId, origin?: Origin) => {
    const section = currentSection();
    const root = document.documentElement;

    const apply = () => {
      flushSync(() => setActive(id));
      root.dataset.theme = id;
      const target = section !== null && findSection(SECTIONS[section]);
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    };

    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // private mode etc. the switch still works for this visit
    }

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) return apply();

    preparePixelReveal(origin ?? { x: innerWidth / 2, y: 0 });
    document.startViewTransition(apply);
  }, []);

  const value = useMemo(
    () => ({ theme: active ?? DEFAULT_THEME, setTheme }),
    [active, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {THEMES.map((t) =>
        active === null || active === t.id ? (
          <div key={t.id} data-theme-panel={t.id}>
            {panels[t.id]}
          </div>
        ) : null,
      )}
    </ThemeContext.Provider>
  );
}
