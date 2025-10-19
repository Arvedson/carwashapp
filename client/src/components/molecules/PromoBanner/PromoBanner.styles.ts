import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createPromoBannerStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders, shadows } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    banner: {
      backgroundColor: colors.primary,
      borderRadius: borders.radius.lg, // Using theme border radius
      padding: spacing.lg,
      flexDirection: "row",
      alignItems: "center",
      ...shadows.sm, // Using theme shadows
    },
    bannerContent: {
      flex: 1,
    },
    bannerTitle: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.inverse,
      marginBottom: spacing.xs,
    },
    bannerSubtitle: {
      fontSize: typography.fontSize.sm,
      color: colors.text.inverse,
      opacity: 0.9,
    },
    bannerIcon: {
      fontSize: 32,
      marginLeft: spacing.md,
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
