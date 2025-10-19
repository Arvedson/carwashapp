import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createSearchButtonStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders, shadows } = theme;

  return StyleSheet.create({
    container: {
      marginTop: spacing.lg,
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: borders.radius.md, // Using theme border radius
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      ...shadows.sm, // Using theme shadows
    },
    buttonText: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
      textAlign: "center",
    },
    loadingText: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.inverse,
      textAlign: "center",
    },
    icon: {
      fontSize: 18,
      marginRight: spacing.sm,
      color: colors.text.inverse,
    },
    loadingIcon: {
      fontSize: 16,
      marginRight: spacing.sm,
      color: colors.text.inverse,
    },
  });
};
