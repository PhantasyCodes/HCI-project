const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const { transformer, resolver, logger } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

config.logger = {
  updateLogs: () => {}, // Disable Metro logs
};

module.exports = config;
