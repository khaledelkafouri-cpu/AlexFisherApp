import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function HookMatcherScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.tools.hookMatcher} title={t.tools.hookMatcher} subtitle={t.tools.hookMatcherSub} />
      <ComingSoon
        icon="fish"
        badge={t.comingSoon}
        title="Hook size & style finder"
        description="Get the right hook size, style and material for your target species and bait — ported from the website's hook matcher."
        bullets={[
          "Species and bait type",
          "Hook size and gauge recommendation",
          "Style guidance (circle, J, treble, etc.)",
        ]}
      />
    </Screen>
  );
}
