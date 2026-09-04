import React from "react";
import { WebPage } from "@/components/brand/WebPage";
import { sitePaths } from "@/constants/site";

export default function LearningScreen() {
  return <WebPage path={sitePaths.learning} />;
}
