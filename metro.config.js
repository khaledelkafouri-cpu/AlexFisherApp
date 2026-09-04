// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// This project lives on an exFAT external drive, which makes macOS create
// AppleDouble sidecar files (e.g. "._community.tsx") for every real file.
// Metro would otherwise try to parse those as source — block them here so
// they can't break the bundler even if Finder/Spotlight recreates them.
config.resolver.blockList = [/(^|\/)\._[^/]*$/];

module.exports = config;
