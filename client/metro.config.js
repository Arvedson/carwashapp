const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Configuración para resolver assets
config.resolver.assetExts.push("png", "jpg", "jpeg", "gif", "svg", "webp");

// Configuración para resolver el asset registry
config.resolver.platforms = ["ios", "android", "native", "web"];

module.exports = config;
