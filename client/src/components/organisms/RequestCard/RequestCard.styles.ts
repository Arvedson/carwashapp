import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createRequestCardStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders, shadows } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: borders.radius.lg, // Using theme border radius
      padding: spacing.lg,
      marginHorizontal: spacing.md, // Following app pattern
      marginVertical: spacing.md,
      ...shadows.sm, // Using theme shadows
    },
    title: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.lg,
    },
    section: {
      marginBottom: spacing.lg,
    },
    sectionTitle: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
  });
};
