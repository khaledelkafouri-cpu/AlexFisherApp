import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLanguage } from "@/context/LanguageContext";
import { colors, radii, spacing } from "@/constants/theme";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Pressable onPress={toggleLanguage} style={styles.button}>
      <Ionicons name="language" size={14} color={colors.ink} />
      <Text style={styles.label}>{language === "en" ? "AR" : "EN"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: 34,
    paddingHorizontal: spacing.sm,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.ink,
  },
});
