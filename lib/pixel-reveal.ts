// Pixel-dissolve mask for the theme switch.
//
// The View Transitions API hands us the new page as one snapshot
// (::view-transition-new). We reveal it cell by cell by masking it with LAYERS
// stacked mask images, each holding a random-ish subset of the cells, and
// stepping the layers into place one after another. A cell's layer is decided
// by its distance from the switcher plus noise, so the pixels spread outwards
// from where you clicked instead of just fizzing in.

const LAYERS = 14;
const NOISE = 0.3; // share of a cell's timing that's random; the rest is distance
const STYLE_ID = "px-reveal-keyframes";
const OFF = "-300vw 0";

// One keyframe per layer landing. Built once; the masks themselves change per switch.
function ensureKeyframes() {
  if (document.getElementById(STYLE_ID)) return;
  const frames: string[] = [];
  for (let step = 0; step <= LAYERS; step++) {
    const positions = Array.from({ length: LAYERS }, (_, i) => (i < step ? "0 0" : OFF));
    frames.push(`${((step / LAYERS) * 100).toFixed(3)}%{mask-position:${positions.join(",")}}`);
  }
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `@keyframes px-reveal{${frames.join("")}}`;
  document.head.append(style);
}

/** Paints the mask layers into --px-mask on <html>, centred on the click origin. */
export function preparePixelReveal(origin: { x: number; y: number }) {
  ensureKeyframes();

  const cell = innerWidth < 640 ? 22 : 34;
  const cols = Math.ceil(innerWidth / cell);
  const rows = Math.ceil(innerHeight / cell);
  const ox = origin.x / cell;
  const oy = origin.y / cell;
  const far = Math.hypot(Math.max(ox, cols - ox), Math.max(oy, rows - oy));

  // one pixel per cell; CSS scales it back up with image-rendering: pixelated
  const layers = Array.from({ length: LAYERS }, () => {
    const canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    return canvas;
  });
  const ctxs = layers.map((c) => c.getContext("2d")!);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const d = Math.hypot(x + 0.5 - ox, y + 0.5 - oy) / far;
      const t = d * (1 - NOISE) + Math.random() * NOISE;
      ctxs[Math.min(LAYERS - 1, Math.floor(t * LAYERS))].fillRect(x, y, 1, 1);
    }
  }

  document.documentElement.style.setProperty(
    "--px-mask",
    layers.map((c) => `url(${c.toDataURL()})`).join(","),
  );
}
