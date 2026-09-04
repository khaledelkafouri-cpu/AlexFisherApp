import React from "react";
import { WebPage } from "@/components/brand/WebPage";
import { sitePaths } from "@/constants/site";

export default function ShopScreen() {
  return <WebPage path={sitePaths.shop} />;
}
