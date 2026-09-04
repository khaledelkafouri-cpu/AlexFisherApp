import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function ShopScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.nav.shop} title={t.nav.shop} />
      <ComingSoon
        icon="storefront"
        badge={t.comingSoon}
        title="Tackle shop"
        description="Browse and buy the gear recommended by the tools in Fishing Hub, right from the app."
        bullets={[
          "Gear matched to your Tackle Matcher results",
          "Local and online store links",
          "Saved wishlists synced with your account",
        ]}
      />
    </Screen>
  );
}
