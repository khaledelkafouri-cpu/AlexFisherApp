import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function LureSelectorScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.tools.lureSelector} title={t.tools.lureSelector} subtitle={t.tools.lureSelectorSub} />
      <ComingSoon
        icon="color-wand"
        badge={t.comingSoon}
        title="Lure & jig recommendation"
        description="Match lure color, size and action to water clarity, light and target species — ported from the website's lure selector."
        bullets={[
          "Water clarity & light conditions",
          "Target species and depth",
          "Recommended lure types with reasoning",
        ]}
      />
    </Screen>
  );
}
