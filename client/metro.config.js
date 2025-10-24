const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Configurar el directorio de trabajo para Metro
config.projectRoot = __dirname;
config.watchFolders = [__dirname];

// Configuración para web
config.resolver.platforms = ["ios", "android", "native", "web"];

// Configuración específica para resolver import.meta
config.resolver.alias = {
  ...config.resolver.alias,
  "react-native$": "react-native-web",
};

// Configuración para manejar módulos ES
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Configuración para web
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs"];

module.exports = config;
