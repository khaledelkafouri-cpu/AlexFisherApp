import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

// This mirrors the website's multi-step Tackle Matcher wizard
// (app/tackle-matcher/page.tsx: mode -> region -> style -> species -> size ->
// environment -> advanced -> result). Bringing that full step flow to native
// is the next feature pass; this screen establishes the route and design.
export default function TackleMatcherScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.tools.tackleMatcher} title={t.tools.tackleMatcher} subtitle={t.tools.tackleMatcherSub} />
      <ComingSoon
        icon="construct"
        badge={t.comingSoon}
        title="Step-by-step tackle wizard"
        description="Pick fishing mode, region, target species and size to get a matched rod, reel, line and terminal tackle setup — same logic as the website tool."
        bullets={[
          "Fishing mode & region",
          "Species and size targeting",
          "Environment & advanced conditions",
          "Full equipment recommendation",
        ]}
      />
    </Screen>
  );
}
