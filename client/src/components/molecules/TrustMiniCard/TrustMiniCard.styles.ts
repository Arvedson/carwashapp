import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createTrustMiniCardStyles = (theme: Theme) => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    featuresRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: spacing.sm,
    },
    featureItem: {
      alignItems: "center",
      flex: 1,
      minWidth: 80,
      paddingVertical: spacing.sm,
    },
    featureIcon: {
      fontSize: 24,
      marginBottom: spacing.xs,
    },
    featureTitle: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.xs,
    },
    featureDescription: {
      fontSize: typography.fontSize.xs,
      color: colors.text.secondary,
      textAlign: "center",
    },
  });
};
