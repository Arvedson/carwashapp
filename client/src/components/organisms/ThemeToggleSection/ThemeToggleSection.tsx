import React from "react";
import { View } from "react-native";
import { Text, ThemeToggle } from "@/components/atoms";
import { Card } from "@/components/molecules";
import { useTheme } from "@/contexts/ThemeContext";
import { createThemeToggleSectionStyles } from "./ThemeToggleSection.styles";
import { ThemeToggleSectionProps } from "./ThemeToggleSection.types";

export const ThemeToggleSection: React.FC<ThemeToggleSectionProps> = () => {
  const { theme, themeMode, toggleTheme, isDark } = useTheme();
  const styles = createThemeToggleSectionStyles(theme);

  return (
    <Card variant="default" size="medium" style={styles.container}>
      <Text variant="heading" style={styles.title}>
        🎨 Theme Toggle
      </Text>

      <Text variant="body" style={styles.description}>
        Tema actual: {isDark ? "🌙 Dark" : "☀️ Light"} ({themeMode})
      </Text>

      <View style={styles.buttonContainer}>
        <ThemeToggle size="medium" isDark={isDark} onToggle={toggleTheme} />
      </View>
    </Card>
  );
};
