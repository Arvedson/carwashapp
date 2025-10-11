import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ThemeDemoStyles } from "./ThemeDemo.types";

export const createThemeDemoStyles = (theme: Theme): ThemeDemoStyles => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    card: {
      margin: spacing.md,
    },
    sectionTitle: {
      fontSize: typography.fontSize.lg, // 18
      fontWeight: typography.fontWeight.semibold, // "600"
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    sectionDescription: {
      fontSize: typography.fontSize.sm, // 14
      marginBottom: spacing.md,
      color: colors.text.secondary,
      lineHeight: typography.lineHeight.normal * typography.fontSize.sm, // 1.4 * 14 = 19.6 ≈ 20
    },
    sectionRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.sm,
    },
  });
};
