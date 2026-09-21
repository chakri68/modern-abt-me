#!/usr/bin/env python3
"""Favicons: a Game of Life glider, in the night edition's colours.

Drawn per size on the pixel grid (not downscaled from one big image), so the
cells stay crisp at 16px. Run: python3 scripts/make-icons.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

BG, PAPER, ACCENT = "#12100E", "#F1EADD", "#E8553A"
GLIDER = [(1, 0), (2, 1), (0, 2), (1, 2), (2, 2)]
HEAD = (2, 1)  # the cell leading the way gets the second ink
PUBLIC = Path(__file__).resolve().parent.parent / "public"


def geometry(size: int):
    gap = max(1, round(size * 0.03))
    # tiny icons can't afford the margin; give the cells every pixel we can
    margin = round(size * (0.1 if size <= 48 else 0.17))
    cell = (size - 2 * margin - 2 * gap) // 3
    origin = (size - (3 * cell + 2 * gap)) // 2
    return gap, cell, origin


def icon(size: int) -> Image.Image:
    img = Image.new("RGB", (size, size), BG)
    draw = ImageDraw.Draw(img)
    gap, cell, origin = geometry(size)
    for x, y in GLIDER:
        left, top = origin + x * (cell + gap), origin + y * (cell + gap)
        draw.rectangle([left, top, left + cell - 1, top + cell - 1], fill=ACCENT if (x, y) == HEAD else PAPER)
    return img


def svg(size: int = 64) -> str:
    gap, cell, origin = geometry(size)
    rects = "".join(
        f'<rect x="{origin + x * (cell + gap)}" y="{origin + y * (cell + gap)}" width="{cell}" height="{cell}" '
        f'fill="{ACCENT if (x, y) == HEAD else PAPER}"/>'
        for x, y in GLIDER
    )
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" shape-rendering="crispEdges">'
        f'<rect width="{size}" height="{size}" fill="{BG}"/>{rects}</svg>\n'
    )


for name, size in {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}.items():
    icon(size).save(PUBLIC / name, optimize=True)

icon(48).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=[icon(16), icon(32)])
(PUBLIC / "favicon.svg").write_text(svg())
print("icons written to", PUBLIC)
