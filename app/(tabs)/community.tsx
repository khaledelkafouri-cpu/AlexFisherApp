import React from "react";
import { Screen } from "@/components/brand/Screen";
import { PageHeader } from "@/components/brand/PageHeader";
import { ComingSoon } from "@/components/brand/ComingSoon";
import { useLanguage } from "@/context/LanguageContext";

export default function CommunityScreen() {
  const { t } = useLanguage();

  return (
    <Screen>
      <PageHeader eyebrow={t.nav.community} title={t.community} subtitle={t.communitySub} />
      <ComingSoon
        icon="people"
        badge={t.comingSoon}
        title="Local reports & Q&A"
        description="The community board from the website — questions, catch reports and comments — wired up for the app."
        bullets={[
          "Post and browse local fishing reports",
          "Ask questions, get answers from nearby anglers",
          "Sign in with the same account as the website",
        ]}
      />
    </Screen>
  );
}
