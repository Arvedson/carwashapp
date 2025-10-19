import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import { TabIconProps } from "./TabIcon.types";
import { createTabIconStyles } from "./TabIcon.styles";

const TabIcon: React.FC<TabIconProps> = ({
  name,
  size = 24,
  color,
  isActive = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createTabIconStyles(theme);

  // Use theme colors if no color is provided
  const iconColor =
    color || (isActive ? theme.colors.primary : theme.colors.text.secondary);

  return (
    <View style={[styles.container, style]}>
      <Ionicons name={name} size={size} color={iconColor} style={styles.icon} />
    </View>
  );
};

export default TabIcon;
