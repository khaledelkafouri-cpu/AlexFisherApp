import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function ReadMySpotScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.tools.readMySpot} title={t.tools.readMySpot} subtitle={t.tools.readMySpotSub} />
      <ComingSoon
        icon="locate"
        badge={t.comingSoon}
        title="Read your fishing spot"
        description="Use your current GPS location (or a chosen spot) plus live conditions to explain what a spot is telling you right now."
        bullets={[
          "Uses device GPS or a picked map spot",
          "Combines live wind, swell and tide data",
          "Plain-language read of the spot's conditions",
        ]}
      />
    </Screen>
  );
}
