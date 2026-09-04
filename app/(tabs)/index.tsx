import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/brand/Screen";
import { MetricCard } from "@/components/brand/MetricCard";
import { LanguageToggle } from "@/components/brand/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { colors, fonts, radii, spacing } from "@/constants/theme";

type ActivityKey = "fishing" | "surfing" | "kayaking";

// Placeholder numbers shaped like the website's `fallback` conditions object
// (app/page.tsx). Swap for a real marine-conditions API call in a follow-up
// pass — the UI below is already wired for it.
const mockConditions = {
  wind: "12 kt",
  windSub: "Gust 18 kt · NW",
  waves: "0.8 m",
  wavesSub: "Period 6.4s",
  swell: "0.6 m",
  swellSub: "Period 8.2s · NW",
  tideSub: "High 01:20 · Low 07:18",
  seaTemp: "26°C",
  seaTempSub: "Air 27°C",
  current: "0.4 kt",
  currentSub: "Heading ENE",
};

export default function ConditionsScreen() {
  const { t } = useLanguage();
  const [activity, setActivity] = useState<ActivityKey>("fishing");

  return (
    <Screen>
      <View style={styles.topbar}>
        <View style={styles.brand}>
          <Image source={require("@/assets/brand/logo.png")} style={styles.brandMark} />
          <View>
            <Text style={styles.brandName}>ALEXFISHER</Text>
            <Text style={styles.brandSub}>SEA CONDITIONS</Text>
          </View>
        </View>
        <LanguageToggle />
      </View>

      <View style={styles.hero}>
        <View style={styles.eyebrowRow}>
          <View style={styles.eyebrowDash} />
          <Text style={styles.eyebrow}>{t.eyebrow}</Text>
        </View>
        <Text style={styles.title}>
          {t.titleA} <Text style={styles.titleAccent}>{t.titleB}</Text>
        </Text>
        <Text style={styles.subtitle}>{t.subtitle}</Text>
      </View>

      <View style={styles.activityTabs}>
        {(Object.keys(t.activities) as ActivityKey[]).map((key) => (
          <Text
            key={key}
            onPress={() => setActivity(key)}
            style={[styles.activityTab, activity === key && styles.activityTabActive]}
          >
            {t.activities[key]}
          </Text>
        ))}
      </View>

      <View style={styles.scoreCard}>
        <View style={styles.scoreHead}>
          <Text style={styles.scoreHeadLabel}>{t.score.toUpperCase()}</Text>
          <Text style={styles.scoreHeadBadge}>SAMPLE</Text>
        </View>
        <View style={styles.scoreRing}>
          <Text style={styles.scoreValue}>78</Text>
          <Text style={styles.scoreOutOf}>/100</Text>
        </View>
        <Text style={styles.scoreLabel}>{t.good}</Text>
        <Text style={styles.scoreWindow}>{t.window}: 06:00 – 09:00</Text>
      </View>

      <View style={styles.metricsGrid}>
        <MetricCard icon="flag" label={t.metrics.wind} value={mockConditions.wind} sub={mockConditions.windSub} emphasis="wind" />
        <MetricCard icon="water" label={t.metrics.waves} value={mockConditions.waves} sub={mockConditions.wavesSub} emphasis="wave" />
        <MetricCard icon="pulse" label={t.metrics.swell} value={mockConditions.swell} sub={mockConditions.swellSub} />
        <MetricCard icon="trending-up" label={t.metrics.tide} value={t.rising} sub={mockConditions.tideSub} />
        <MetricCard icon="thermometer" label={t.metrics.seaTemp} value={mockConditions.seaTemp} sub={mockConditions.seaTempSub} />
        <MetricCard icon="navigate" label={t.metrics.current} value={mockConditions.current} sub={mockConditions.currentSub} />
      </View>

      <View style={styles.safetyNote}>
        <Ionicons name="information-circle-outline" size={16} color={colors.muted} />
        <Text style={styles.safetyText}>{t.safety}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  brand: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  brandMark: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.deep },
  brandName: { fontSize: 13, fontWeight: "800", letterSpacing: 1.5, color: colors.ink },
  brandSub: { fontSize: 8, letterSpacing: 2, color: "#668087", marginTop: 2 },
  hero: { paddingHorizontal: spacing.lg, paddingBottom: spacing.md },
  eyebrowRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm, marginBottom: spacing.sm },
  eyebrowDash: { width: 22, height: 2, backgroundColor: colors.coral },
  eyebrow: { color: colors.ocean, fontSize: 10, fontWeight: "800", letterSpacing: 2 },
  title: { fontFamily: fonts.serif, fontSize: 34, lineHeight: 38, color: colors.ink, marginBottom: spacing.sm },
  titleAccent: { color: colors.ocean, fontWeight: "400" },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 22 },
  activityTabs: {
    flexDirection: "row",
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: 4,
    borderRadius: radii.md,
    backgroundColor: "#dcebe8",
    gap: 3,
  },
  activityTab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: radii.sm,
    fontSize: 13,
    fontWeight: "600",
    color: "#5f767b",
    overflow: "hidden",
  },
  activityTabActive: { backgroundColor: colors.white, color: colors.ocean },
  scoreCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.lg,
    borderRadius: radii.xl,
    backgroundColor: colors.deep,
    alignItems: "center",
  },
  scoreHead: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: spacing.md },
  scoreHeadLabel: { color: "#b9d0d1", fontSize: 10, fontWeight: "700", letterSpacing: 1 },
  scoreHeadBadge: { color: colors.cyan, fontSize: 10, fontWeight: "700" },
  scoreRing: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 8,
    borderColor: colors.cyan,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: spacing.sm,
  },
  scoreValue: { fontFamily: fonts.serif, fontSize: 42, color: colors.white },
  scoreOutOf: { color: "#8da8ad", fontSize: 12, marginLeft: 2 },
  scoreLabel: { fontFamily: fonts.serif, fontSize: 18, color: colors.white, marginBottom: 4 },
  scoreWindow: { color: colors.cyan, fontSize: 13 },
  metricsGrid: { paddingHorizontal: spacing.lg, gap: spacing.sm, marginBottom: spacing.lg },
  safetyNote: {
    flexDirection: "row",
    gap: spacing.sm,
    marginHorizontal: spacing.lg,
    padding: spacing.md,
    borderRadius: radii.md,
    backgroundColor: colors.sand,
    alignItems: "flex-start",
  },
  safetyText: { flex: 1, color: colors.muted, fontSize: 11, lineHeight: 16 },
});
