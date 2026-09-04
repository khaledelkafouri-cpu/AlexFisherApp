import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function LearningScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.nav.learning} title={t.nav.learning} />
      <ComingSoon
        icon="school"
        badge={t.comingSoon}
        title="Fishing knowledge base"
        description="Guides, species profiles and technique breakdowns from the AlexFisher website, adapted for quick reading on the water."
        bullets={[
          "Species identification and local regulations",
          "Knot and rigging tutorials",
          "Seasonal fishing calendars by region",
        ]}
      />
    </Screen>
  );
}
