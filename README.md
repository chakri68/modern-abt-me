---

_Just another portfolio on the internet. This one’s mine_

## themes

couldn't pick one design, so it ships eight. the switcher is in every nav.

| theme | what it is |
| --- | --- |
| night / day edition | a broadsheet and its magazine sibling. default, follows your OS colour scheme. the night one has Conway's Game of Life where the front-page photo should be |
| paperback | preface, chapters, glossary |
| preprint | not peer reviewed, the peers were busy |
| release notes | semver for a person. new employer = major bump |
| zine | two inks, slightly out of register |
| encyclopaedia | the entry for REDDY, vol. R |
| letter | the whole site, longhand |

how it moves:

- facts live in `lib/content.ts`. themes (`themes/*.tsx`) only own layout and voice, so fixing a typo fixes it eight times.
- the site is a static export, so there's no server to pick a theme. all eight are rendered into the HTML and CSS shows the one matching `<html data-theme>`, which an inline script sets before first paint. no flash.
- after hydration `ThemeStage` unmounts the other seven, which also gets rid of the duplicate `#work` anchors.
- switching uses the View Transitions API: the new theme grows out of the switcher as a circle. no support or `prefers-reduced-motion` → it just swaps.
- the dropdown is portaled to `<body>`, so it's dressed by `--ts-*` tokens set per `html[data-theme]` in `globals.css`.
- fonts for non-default themes are declared with `preload: false`; the browser only fetches them when a theme that uses them is actually on screen.

adding a theme: a component in `themes/`, an entry in `lib/themes.ts`, a panel in `app/page.tsx`, a token block + one selector in `globals.css`. keep the section ids (`work`, `projects`, `stack`, `contact`) so switching keeps your place.
