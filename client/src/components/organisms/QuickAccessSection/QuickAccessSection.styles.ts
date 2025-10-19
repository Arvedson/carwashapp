import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createQuickAccessSectionStyles = (theme: Theme) => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.md, // Following app pattern
      marginVertical: spacing.md,
    },
    title: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    content: {
      gap: spacing.sm,
    },
  });
};
