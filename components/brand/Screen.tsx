import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/theme";

// Shared page shell: brand background, safe-area aware, optionally scrollable.
export function Screen({
  children,
  scroll = true,
  style,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
}) {
  const insets = useSafeAreaInsets();

  if (!scroll) {
    return (
      <View style={[styles.root, { paddingTop: insets.top }, style]}>{children}</View>
    );
  }

  return (
    <ScrollView
      style={[styles.root, style]}
      contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom + 32 }}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper,
  },
});
