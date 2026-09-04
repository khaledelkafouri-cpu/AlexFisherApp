import { Stack, ThemeProvider, type Theme } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { LanguageProvider } from "@/context/LanguageContext";
import { colors } from "@/constants/theme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// AlexFisher doesn't have a dark palette defined yet (the website's globals.css
// is light-only), so the native theme is fixed to the brand colors rather than
// following the system light/dark scheme. Revisit if/when a dark palette is
// designed for the site.
const alexFisherTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.ocean,
    background: colors.paper,
    card: colors.paper,
    text: colors.ink,
    border: colors.line,
    notification: colors.coral,
  },
  fonts: {
    regular: { fontFamily: "System", fontWeight: "400" },
    medium: { fontFamily: "System", fontWeight: "500" },
    bold: { fontFamily: "System", fontWeight: "700" },
    heavy: { fontFamily: "System", fontWeight: "800" },
  },
};

// Prevent the splash screen from auto-hiding before the app is ready.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={alexFisherTheme}>
      <LanguageProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.paper },
            headerTintColor: colors.ink,
            headerTitleStyle: { fontWeight: "700" },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="tools/tackle-matcher" options={{ title: "Tackle Matcher" }} />
          <Stack.Screen name="tools/lure-selector" options={{ title: "Lure & Jig Selector" }} />
          <Stack.Screen name="tools/hook-matcher" options={{ title: "Hook Matcher" }} />
          <Stack.Screen name="tools/read-my-spot" options={{ title: "Read My Fishing Spot" }} />
        </Stack>
      </LanguageProvider>
    </ThemeProvider>
  );
}
