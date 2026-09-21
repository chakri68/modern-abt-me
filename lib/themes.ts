export const THEMES = [
  { id: "classic", name: "Classic", hint: "the original" },
  { id: "night", name: "Night edition", hint: "broadsheet, after dark" },
  { id: "quarterly", name: "Day edition", hint: "the magazine" },
  { id: "paperback", name: "Paperback", hint: "a novel, sort of" },
  { id: "preprint", name: "Preprint", hint: "not peer reviewed" },
  { id: "changelog", name: "Release notes", hint: "semver for a person" },
  { id: "zine", name: "Zine", hint: "two inks, two staples" },
  { id: "encyclopaedia", name: "Encyclopaedia", hint: "vol. R" },
  { id: "letter", name: "Letter", hint: "dear reader" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const STORAGE_KEY = "chakri-theme";

export const DEFAULT_THEME: ThemeId = "classic";

// Sections every theme exposes, so a theme switch can land the reader on the
// section they were already reading. The classic theme predates the shared
// ids, hence the aliases.
export const SECTIONS: string[][] = [
  ["work", "experience"],
  ["projects"],
  ["stack", "skills"],
  ["contact"],
];

// Runs before first paint (inlined in <head>): a stored choice wins, otherwise
// it's the classic site.
export const themeInitScript = `(function(){var d=${JSON.stringify(
  DEFAULT_THEME,
)};try{var t=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});document.documentElement.dataset.theme=${JSON.stringify(
  THEMES.map((t) => t.id),
)}.indexOf(t)<0?d:t}catch(e){document.documentElement.dataset.theme=d}})()`;
