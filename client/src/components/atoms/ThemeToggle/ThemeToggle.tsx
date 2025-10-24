import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createThemeToggleStyles } from "./ThemeToggle.styles";
import { ThemeToggleProps } from "./ThemeToggle.types";

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = "medium",
  isDark,
  onToggle,
  style,
  ...props
}) => {
  const { theme, isDark: contextIsDark, toggleTheme } = useTheme();
  const styles = createThemeToggleStyles(theme, size);

  const darkMode = isDark !== undefined ? isDark : contextIsDark;
  const handleToggle = onToggle || toggleTheme;

  const getIcon = () => {
    return darkMode ? "🌙" : "☀️";
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handleToggle}
      {...props}
    >
      <Text style={styles.icon}>{getIcon()}</Text>
    </TouchableOpacity>
  );
};
