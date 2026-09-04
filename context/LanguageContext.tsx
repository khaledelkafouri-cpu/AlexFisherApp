import React, { createContext, useContext, useMemo, useState } from "react";
import { copy, type CopyShape, type Language } from "@/constants/copy";

// Lightweight EN/AR switch: swaps strings and text alignment/flow direction.
// A full native RTL flip (mirroring icons, gestures, etc.) needs
// I18nManager.forceRTL + an app reload — worth adding once the real screens
// are built, not needed for the initial app-shell pass.
type LanguageContextValue = {
  language: Language;
  isRTL: boolean;
  t: CopyShape;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isRTL: language === "ar",
      t: copy[language],
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "ar" : "en")),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
