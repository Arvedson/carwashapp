import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createIconStyles } from "./Icon.styles";
import { IconAtomProps } from "./Icon.types";

// Mapeo de iconos a emojis/símbolos (en producción usarías una librería como react-native-vector-icons)
const iconMap: Record<string, string> = {
  sun: "☀️",
  moon: "🌙",
  eye: "👁️",
  "eye-off": "🙈",
  check: "✓",
  x: "✕",
  plus: "+",
  minus: "−",
  "arrow-left": "←",
  "arrow-right": "→",
  "arrow-up": "↑",
  "arrow-down": "↓",
  menu: "☰",
  search: "🔍",
  user: "👤",
  settings: "⚙️",
  home: "🏠",
  car: "🚗",
  star: "⭐",
  heart: "❤️",
  bell: "🔔",
  camera: "📷",
  phone: "📞",
  mail: "✉️",
  lock: "🔒",
  unlock: "🔓",
  edit: "✏️",
  trash: "🗑️",
  save: "💾",
  download: "⬇️",
  upload: "⬆️",
  refresh: "🔄",
  play: "▶️",
  pause: "⏸️",
  stop: "⏹️",
  "chevron-left": "‹",
  "chevron-right": "›",
  "chevron-up": "⌃",
  "chevron-down": "⌄",
  info: "ℹ️",
  warning: "⚠️",
  error: "❌",
  success: "✅",
};

export const Icon: React.FC<IconAtomProps> = ({
  name,
  variant = "filled",
  size = "md",
  color,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createIconStyles(theme, variant, size, color);

  return (
    <View style={[styles.icon, style]} {...props}>
      <Text style={{ fontSize: styles.icon.width * 0.6, textAlign: "center" }}>
        {iconMap[name] || "?"}
      </Text>
    </View>
  );
};

export default Icon;



