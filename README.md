# AlexFisher — Mobile App

A standalone native app for iOS and Android, built with
[Expo](https://expo.dev) (React Native + TypeScript + Expo Router). This is a
**separate project** from the [AlexFisher website](../AlexFisher) — it shares
branding and feature scope, but is its own codebase you can build and submit
to the App Store and Google Play independently of the site.

## What's built so far ("build the app first" pass)

- Full navigation: 5 bottom tabs matching the website's nav — **Conditions**,
  **Fishing Hub**, **Learning**, **Community**, **Shop** — plus 4 tool screens
  (Tackle Matcher, Lure Selector, Hook Matcher, Read My Fishing Spot) reachable
  from Fishing Hub.
- Brand system ported from the website (`app/globals.css` → `constants/theme.ts`):
  same colors, same serif/sans type pairing, same card/pill/metric styling
  language.
- App identity: name "AlexFisher", icon and splash screen from the sunfish
  logo, bundle ID `com.alexfisher.app` for both platforms.
- Bilingual scaffold (English/Arabic) ported from the site's copy —
  `constants/copy.ts` + `context/LanguageContext.tsx` — with a toggle on the
  Conditions screen. (Full RTL layout mirroring isn't wired up yet, see below.)
- The Conditions screen renders a real dashboard layout — activity tabs,
  score ring, metrics grid — using placeholder numbers shaped exactly like the
  website's data (see comment in `app/(tabs)/index.tsx`), ready to swap for a
  live API call.
- The four tool screens and Learning/Community/Shop are structured
  placeholders (title, description, what's coming) rather than empty screens.

## What's not built yet (next passes)

This was step one — "build the app first." Real feature work still to do,
roughly in order of value:
1. **Live conditions data** — wire the Conditions screen to a real marine
   weather API (wind/wave/swell/tide), replacing the mock numbers.
2. **Location picker** — port the country → city → spot picker from the
   website (`app/page.tsx`) so users can choose where they're heading.
3. **Tackle Matcher / Lure Selector / Hook Matcher** — the actual multi-step
   wizards from the website, not just the placeholder screens.
4. **Read My Fishing Spot** — GPS-based version using `expo-location`.
5. **Community** — connect to the same backend/account system as the website
   (this needs the SIWC/D1 hosting question resolved first — see the website's
   own README).
6. **Full RTL** — `I18nManager.forceRTL()` + reload for true Arabic layout
   mirroring, beyond the current text-only language switch.
7. **Charts** — hourly/weekly wind, wave, tide charts (a React Native chart
   library, e.g. `react-native-gifted-charts` or `victory-native`).

## Running it

```bash
npm install       # first time only
npm run ios       # opens iOS Simulator (needs full Xcode installed)
npm run android   # opens Android emulator (needs Android Studio installed)
npm run web       # runs in a regular browser tab — fastest way to preview UI
```

You can also scan the QR code from `npx expo start` with the **Expo Go** app
on a real iPhone/Android phone to preview instantly, no simulator or native
build tools required.

## Publishing to the App Store / Google Play

This project uses [EAS Build](https://docs.expo.dev/build/introduction/),
Expo's cloud build service — it can produce a signed `.ipa`/`.aab` **without**
needing Xcode or Android Studio installed locally, which matters since neither
is currently installed on this machine. Rough flow once you're ready:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios       # or android, or both
eas submit --platform ios      # after you have an Apple Developer account
```

Requirements: an Apple Developer account ($99/yr) for iOS, a Google Play
Console account ($25 one-time) for Android. Ask for help with either
submission flow when you're ready — store listing copy, screenshots, and
privacy policy text can all be prepared ahead of time too.

## A note on the exFAT drive

This project lives on the same external SSD as the website, which is
formatted exFAT. macOS creates hidden `._*` "AppleDouble" sidecar files
next to every real file on that filesystem — harmless, but they can
occasionally confuse tools that glob source files. `.gitignore`,
`tsconfig.json`, and `metro.config.js` are all configured to ignore them; if
something ever complains about a `._something.tsx` file, it's safe to delete.
