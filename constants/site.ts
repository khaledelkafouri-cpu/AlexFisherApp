// The live AlexFisher website. The app's tabs and tool screens load the real
// pages from here so the app shows exactly the same content, design and
// behavior as the website — the native shell (tab bar, navigation, icon,
// splash) wraps the real site rather than a hand-rebuilt copy of it.
export const SITE_URL = "https://alex-fisher.vercel.app";

export const sitePaths = {
  conditions: "/",
  fishingHub: "/fishing-hub",
  learning: "/learning",
  community: "/community",
  shop: "/shop",
  tackleMatcher: "/tackle-matcher",
  lureSelector: "/lure-selector",
  hookMatcher: "/hook-matcher",
  readMySpot: "/read-my-spot",
} as const;

export function siteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
