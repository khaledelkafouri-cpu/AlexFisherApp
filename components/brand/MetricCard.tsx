import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radii, spacing } from "@/constants/theme";

export function MetricCard({
  icon,
  label,
  value,
  sub,
  emphasis,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  value: string;
  sub?: string;
  emphasis?: "wind" | "wave";
}) {
  return (
    <View
      style={[
        styles.card,
        emphasis === "wind" && styles.wind,
        emphasis === "wave" && styles.wave,
      ]}
    >
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={17} color={emphasis ? undefined : colors.ocean} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueRow}>
          <Text style={styles.value}>{value}</Text>
          {sub ? <Text style={styles.sub}>{sub}</Text> : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 58,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.md,
    backgroundColor: "#fbfdfc",
  },
  wind: {
    borderColor: "#f3ab99",
    backgroundColor: "#fff4ef",
  },
  wave: {
    borderColor: "#76d4d0",
    backgroundColor: "#e4faf7",
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: radii.sm,
    backgroundColor: colors.foam,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
    minWidth: 0,
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    color: colors.muted,
    marginBottom: 2,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: spacing.xs,
  },
  value: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.ink,
  },
  sub: {
    fontSize: 11,
    color: colors.muted,
  },
});
