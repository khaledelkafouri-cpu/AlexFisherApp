import React, { useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView, type WebViewNavigation } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/theme";
import { SITE_URL, siteUrl } from "@/constants/site";

// Renders a live page from the AlexFisher website inside the native app
// shell. This is what makes each tab/tool screen "exactly the same" as the
// website — it IS the website, not a rebuilt copy of it.
export function WebPage({ path }: { path: string }) {
  const [loading, setLoading] = useState(true);
  const webviewRef = useRef<WebView>(null);

  return (
    <SafeAreaView style={styles.root} edges={["top"]}>
      <WebView
        ref={webviewRef}
        source={{ uri: siteUrl(path) }}
        style={styles.webview}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={(nav: WebViewNavigation) => {
          // Keep external links (e.g. a shop product on another domain) from
          // hijacking the in-app browser entirely if that's ever added; for
          // now every route on the site is same-origin so this is a no-op
          // guard for later.
          void nav;
        }}
        startInLoadingState={false}
        allowsBackForwardNavigationGestures
        decelerationRate="normal"
        originWhitelist={[`${SITE_URL}/*`]}
      />
      {loading ? (
        <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]} pointerEvents="none">
          <ActivityIndicator size="large" color={colors.ocean} />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  webview: { flex: 1, backgroundColor: colors.paper },
  loadingOverlay: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.paper,
  },
});
