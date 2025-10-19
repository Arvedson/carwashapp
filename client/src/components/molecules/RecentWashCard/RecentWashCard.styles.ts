import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createRecentWashCardStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders, shadows } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: borders.radius.lg, // Using theme border radius
      padding: spacing.md,
      marginVertical: spacing.sm,
      borderWidth: borders.width.thin, // Using theme border width
      borderColor: colors.border,
      ...shadows.sm, // Using theme shadows
    },
    title: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
    washInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    washDetails: {
      flex: 1,
    },
    washDate: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      marginBottom: spacing.xs,
    },
    washPrice: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.primary,
    },
    repeatButton: {
      backgroundColor: colors.primary,
      borderRadius: borders.radius.sm,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      alignSelf: "flex-start",
    },
    emptyState: {
      alignItems: "center",
      paddingVertical: spacing.lg,
    },
    emptyText: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      textAlign: "center",
    },
  });
};
