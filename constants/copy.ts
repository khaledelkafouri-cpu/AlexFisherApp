// Ported from the AlexFisher website (app/page.tsx `copy`), trimmed to what
// the app shell needs right now. Add more keys here as each screen gets
// built out with real content.
export type Language = "en" | "ar";

export type CopyShape = {
  nav: {
    conditions: string;
    fishingHub: string;
    learning: string;
    community: string;
    shop: string;
  };
  eyebrow: string;
  titleA: string;
  titleB: string;
  subtitle: string;
  activities: { fishing: string; surfing: string; kayaking: string };
  score: string;
  good: string;
  caution: string;
  difficult: string;
  window: string;
  metrics: {
    wind: string;
    waves: string;
    swell: string;
    tide: string;
    seaTemp: string;
    current: string;
  };
  rising: string;
  falling: string;
  tools: {
    title: string;
    subtitle: string;
    tackleMatcher: string;
    tackleMatcherSub: string;
    lureSelector: string;
    lureSelectorSub: string;
    hookMatcher: string;
    hookMatcherSub: string;
    readMySpot: string;
    readMySpotSub: string;
  };
  community: string;
  communitySub: string;
  comingSoon: string;
  safety: string;
};

export const copy: Record<Language, CopyShape> = {
  en: {
    nav: {
      conditions: "Conditions",
      fishingHub: "Fishing Hub",
      learning: "Learning",
      community: "Community",
      shop: "Shop",
    },
    eyebrow: "LIVE MARINE INTELLIGENCE",
    titleA: "Know the sea.",
    titleB: "Own the day.",
    subtitle:
      "One clear forecast for fishing, surfing and kayaking — interpreted for the way you move on the water.",
    activities: { fishing: "Fishing", surfing: "Surfing", kayaking: "Kayaking" },
    score: "activity score",
    good: "Good conditions",
    caution: "Use caution",
    difficult: "Difficult conditions",
    window: "Best window",
    metrics: {
      wind: "Wind",
      waves: "Waves",
      swell: "Swell",
      tide: "Tide",
      seaTemp: "Sea temp",
      current: "Current",
    },
    rising: "Rising",
    falling: "Falling",
    tools: {
      title: "Fishing tools",
      subtitle: "Everything you need to plan the perfect session.",
      tackleMatcher: "Tackle Matcher",
      tackleMatcherSub: "Match rod, reel and line to your target.",
      lureSelector: "Lure & Jig Selector",
      lureSelectorSub: "Pick the right lure for conditions and species.",
      hookMatcher: "Hook Matcher",
      hookMatcherSub: "Find the right hook size and style.",
      readMySpot: "Read My Fishing Spot",
      readMySpotSub: "Understand what a spot is telling you.",
    },
    community: "The sea is better together.",
    communitySub:
      "Local reports, honest answers and people who love the water as much as you do.",
    comingSoon: "Coming soon",
    safety:
      "Forecast guidance only. Always check local conditions and official safety advice before entering the water.",
  },
  ar: {
    nav: {
      conditions: "حالة البحر",
      fishingHub: "مركز الصيد",
      learning: "تعلم",
      community: "المجتمع",
      shop: "المتجر",
    },
    eyebrow: "بيانات بحرية مباشرة",
    titleA: "اعرف البحر.",
    titleB: "واختار يومك.",
    subtitle: "توقعات واضحة للصيد والسيرف والكاياك — متفسرة حسب نشاطك على البحر.",
    activities: { fishing: "صيد", surfing: "سيرف", kayaking: "كاياك" },
    score: "تقييم النشاط",
    good: "الظروف جيدة",
    caution: "توخَّ الحذر",
    difficult: "الظروف صعبة",
    window: "أفضل وقت",
    metrics: {
      wind: "الرياح",
      waves: "الأمواج",
      swell: "السويل",
      tide: "المد والجزر",
      seaTemp: "حرارة البحر",
      current: "التيار",
    },
    rising: "مد صاعد",
    falling: "جزر",
    tools: {
      title: "أدوات الصيد",
      subtitle: "كل ما تحتاجه لتخطيط رحلة صيد مثالية.",
      tackleMatcher: "مطابقة العدة",
      tackleMatcherSub: "اختر القصبة والبكرة والخيط المناسب لهدفك.",
      lureSelector: "اختيار الطعم والجيج",
      lureSelectorSub: "اختر الطعم المناسب حسب الظروف والنوع.",
      hookMatcher: "مطابقة الصنارة",
      hookMatcherSub: "اعثر على مقاس ونوع الصنارة المناسب.",
      readMySpot: "اقرأ مكان الصيد",
      readMySpotSub: "افهم ما يخبرك به المكان.",
    },
    community: "البحر أحلى مع بعض.",
    communitySub: "تقارير محلية، إجابات حقيقية، وناس بتحب البحر زيك.",
    comingSoon: "قريباً",
    safety:
      "التوقعات للإرشاد فقط. تحقق دائماً من الظروف المحلية وتعليمات السلامة الرسمية قبل النزول إلى المياه.",
  },
};
