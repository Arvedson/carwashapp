import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ThemeToggleSectionStyles } from "./ThemeToggleSection.types";

export const createThemeToggleSectionStyles = (
  theme: Theme
): ThemeToggleSectionStyles => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      padding: spacing.lg,
      borderRadius: borders.radius.lg,
      margin: spacing.md,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    description: {
      fontSize: typography.fontSize.sm,
      marginBottom: spacing.md,
      color: colors.text.secondary,
      textAlign: "center",
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
    },
  });
};
