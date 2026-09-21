"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const TICK_MS = 380;
const MAX_GEN = 400;

type Sim = { w: number; h: number; cell: number; grid: Uint8Array; gen: number; pop: number };

// 0 dead, 1 survivor, 2 newborn. Toroidal B3/S23.
function seed(w: number, h: number): Uint8Array {
  const g = new Uint8Array(w * h);
  for (let i = 0; i < g.length; i++) g[i] = Math.random() < 0.3 ? 2 : 0;
  return g;
}

function step(sim: Sim) {
  const { w, h, grid } = sim;
  const next = new Uint8Array(w * h);
  let pop = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          if (grid[((y + dy + h) % h) * w + ((x + dx + w) % w)]) n++;
        }
      }
      const alive = grid[y * w + x] > 0;
      const v = alive ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 2 : 0;
      if (v) pop++;
      next[y * w + x] = v;
    }
  }
  sim.grid = next;
  sim.gen++;
  sim.pop = pop;
  // a dying or stale universe gets a fresh one
  if (pop < (w * h) / 20 || sim.gen > MAX_GEN) {
    sim.grid = seed(w, h);
    sim.gen = 0;
  }
}

/**
 * Conway's Game of Life as a background. Children render on top and receive
 * the live generation/population plus a reseed handler.
 */
export function LifeGrid({
  className,
  colors,
  children,
}: {
  className?: string;
  colors: { newborn: string; survivor: string; line: string };
  children: (s: { gen: string; pop: number; reseed: () => void }) => ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simRef = useRef<Sim | null>(null);
  const [stats, setStats] = useState({ gen: 0, pop: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const sim = simRef.current;
    if (!canvas || !sim) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { w, h, cell, grid } = sim;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const v = grid[y * w + x];
        if (!v) continue;
        ctx.fillStyle = v === 2 ? colors.newborn : colors.survivor;
        ctx.fillRect(x * cell, y * cell, cell - 1, cell - 1);
      }
    }
    ctx.fillStyle = colors.line;
    for (let x = 1; x <= w; x++) ctx.fillRect(x * cell - 1, 0, 1, h * cell);
    for (let y = 1; y <= h; y++) ctx.fillRect(0, y * cell - 1, w * cell, 1);
    setStats({ gen: sim.gen, pop: sim.pop });
  }, [colors.line, colors.newborn, colors.survivor]);

  const reseed = useCallback(() => {
    const sim = simRef.current;
    if (!sim) return;
    sim.grid = seed(sim.w, sim.h);
    sim.gen = 0;
    sim.pop = sim.grid.reduce((a, v) => a + (v ? 1 : 0), 0);
    draw();
  }, [draw]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const fit = () => {
      const { width, height } = wrap.getBoundingClientRect();
      const cell = width < 640 ? 24 : 38;
      const w = Math.ceil(width / cell);
      const h = Math.ceil(height / cell);
      // mobile URL bars resize the viewport constantly; keep the universe unless the grid really changed
      const prev = simRef.current;
      if (prev && prev.w === w && prev.h === h && prev.cell === cell) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * cell * dpr;
      canvas.height = h * cell * dpr;
      canvas.style.width = `${w * cell}px`;
      canvas.style.height = `${h * cell}px`;
      const grid = seed(w, h);
      simRef.current = { w, h, cell, grid, gen: 0, pop: grid.reduce((a, v) => a + (v ? 1 : 0), 0) };
      draw();
    };
    fit();

    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    // no ticking when nobody's looking, or when motion is unwelcome
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(wrap);
    const still = matchMedia("(prefers-reduced-motion: reduce)");

    const timer = setInterval(() => {
      if (!visible || still.matches || document.hidden || !simRef.current) return;
      step(simRef.current);
      draw();
    }, TICK_MS);

    return () => {
      clearInterval(timer);
      ro.disconnect();
      io.disconnect();
    };
  }, [draw]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} aria-hidden="true" className="absolute left-0 top-0" />
      {children({ gen: String(stats.gen).padStart(4, "0"), pop: stats.pop, reseed })}
    </div>
  );
}
