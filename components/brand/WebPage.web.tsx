import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";
import { siteUrl } from "@/constants/site";

// Web build of the app (e.g. the Vercel deploy of this project): react-native-webview
// doesn't run on web, so a plain DOM <iframe> stands in for it here. Native
// builds use WebPage.tsx (react-native-webview) instead — Metro/Expo picks
// the right file per platform automatically via the .web.tsx suffix.
const iframeStyle: React.CSSProperties = {
  flex: 1,
  border: "none",
  width: "100%",
  height: "100%",
};

export function WebPage({ path }: { path: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.root}>
      <iframe src={siteUrl(path)} style={iframeStyle} onLoad={() => setLoading(false)} title="AlexFisher" />
      {loading ? (
        <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]} pointerEvents="none">
          <ActivityIndicator size="large" color={colors.ocean} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  loadingOverlay: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.paper,
  },
});
