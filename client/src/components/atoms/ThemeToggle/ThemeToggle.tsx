import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createThemeToggleStyles } from "./ThemeToggle.styles";
import { ThemeToggleProps } from "./ThemeToggle.types";
import { Text } from "../Text";

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
      <Text variant="body" size="lg" style={styles.icon}>
        {getIcon()}
      </Text>
    </TouchableOpacity>
  );
};
