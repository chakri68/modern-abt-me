"use client";

import { useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { THEMES, type ThemeId } from "@/lib/themes";
import { useTheme } from "@/components/theme-stage";
import { cn } from "@/lib/utils";

/**
 * The trigger inherits colour from wherever a theme drops it (it's all
 * currentColor). The menu is portaled to <body>, so it's dressed by the
 * --ts-* tokens that globals.css defines per html[data-theme].
 */
export function ThemeSwitcher({
  label = "Theme",
  className,
  align = "end",
}: {
  label?: string;
  className?: string;
  align?: "start" | "center" | "end";
}) {
  const { theme, setTheme } = useTheme();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const current = THEMES.find((t) => t.id === theme)!;

  const pick = (id: string) => {
    if (id === theme) return;
    const r = triggerRef.current?.getBoundingClientRect();
    setTheme(id as ThemeId, r && { x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger ref={triggerRef} className={cn("ts-trigger group", className)}>
        <span className="ts-trigger-label">{label}</span>
        <span className="ts-trigger-value">{current.name}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className="ts-chevron group-data-[state=open]:rotate-180"
        >
          <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={align} sideOffset={10} collisionPadding={12} className="ts-menu">
          <DropdownMenu.Label className="ts-menu-label">{label}</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={theme} onValueChange={pick}>
            {THEMES.map((t, i) => (
              <DropdownMenu.RadioItem
                key={t.id}
                value={t.id}
                className="ts-item"
                style={{ animationDelay: `${40 + i * 28}ms` }}
              >
                <span className="ts-item-mark" aria-hidden="true" />
                <span className="ts-item-name">{t.name}</span>
                <span className="ts-item-hint">{t.hint}</span>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
