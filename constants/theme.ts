// Brand tokens ported from the AlexFisher website (app/globals.css :root).
// Keep these in sync if the website palette changes.
export const colors = {
  ink: "#071d25",
  deep: "#082833",
  ocean: "#0d5965",
  cyan: "#3dd7d0",
  foam: "#e8f7f3",
  sand: "#f6f0e5",
  coral: "#ff7c61",
  paper: "#f8fbf9",
  line: "rgba(8,40,51,0.12)",
  white: "#ffffff",
  muted: "#587078",
  mutedLight: "#8aa0a4",
};

export const radii = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// The website headings use Georgia/serif; Georgia renders natively on iOS.
// Android has no Georgia, so it falls back to the platform serif face.
export const fonts = {
  serif: "Georgia",
  sans: "System",
};

export const shadow = {
  card: {
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
};
