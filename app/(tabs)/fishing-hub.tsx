import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ToolCard } from "@/components/brand/ToolCard";
import { useLanguage } from "@/context/LanguageContext";
import { spacing } from "@/constants/theme";

export default function FishingHubScreen() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <PageHeader eyebrow={t.nav.fishingHub} title={t.tools.title} subtitle={t.tools.subtitle} />

      <View style={styles.grid}>
        <ToolCard
          icon="construct"
          title={t.tools.tackleMatcher}
          subtitle={t.tools.tackleMatcherSub}
          onPress={() => router.push("/tools/tackle-matcher")}
        />
        <ToolCard
          icon="color-wand"
          title={t.tools.lureSelector}
          subtitle={t.tools.lureSelectorSub}
          onPress={() => router.push("/tools/lure-selector")}
        />
        <ToolCard
          icon="fish"
          title={t.tools.hookMatcher}
          subtitle={t.tools.hookMatcherSub}
          onPress={() => router.push("/tools/hook-matcher")}
        />
        <ToolCard
          icon="locate"
          title={t.tools.readMySpot}
          subtitle={t.tools.readMySpotSub}
          onPress={() => router.push("/tools/read-my-spot")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
});
