export const THEMES = [
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

// Sections every theme exposes under the same ids, so a theme switch can
// land the reader on the section they were already reading.
export const SECTION_IDS = ["work", "projects", "stack", "contact"] as const;

// Runs before first paint (inlined in <head>): stored choice wins, otherwise
// the OS colour scheme picks between the night and day editions.
export const themeInitScript = `(function(){try{var k=${JSON.stringify(
  STORAGE_KEY,
)},ids=${JSON.stringify(
  THEMES.map((t) => t.id),
)},t=localStorage.getItem(k);if(ids.indexOf(t)<0)t=matchMedia("(prefers-color-scheme: dark)").matches?"night":"quarterly";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="quarterly"}})()`;
