import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ThemeToggleSize } from "./ThemeToggle.types";

export const createThemeToggleStyles = (
  theme: Theme,
  size: ThemeToggleSize
) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: borders.radius.md,
      backgroundColor: colors.surface,
      // Tamaños
      ...(size === "small" && {
        padding: spacing.sm,
        minHeight: theme.components.themeToggle.sizes.small.minHeight,
        minWidth: theme.components.themeToggle.sizes.small.minHeight,
      }),
      ...(size === "medium" && {
        padding: spacing.md,
        minHeight: theme.components.themeToggle.sizes.medium.minHeight,
        minWidth: theme.components.themeToggle.sizes.medium.minHeight,
      }),
      ...(size === "large" && {
        padding: spacing.lg,
        minHeight: theme.components.themeToggle.sizes.large.minHeight,
        minWidth: theme.components.themeToggle.sizes.large.minHeight,
      }),
    },
    icon: {
      // Tamaños de icono usando tokens
      ...(size === "small" && {
        fontSize: typography.fontSize.md,
      }),
      ...(size === "medium" && {
        fontSize: typography.fontSize.lg,
      }),
      ...(size === "large" && {
        fontSize: typography.fontSize.xl,
      }),
    },
  });
};
