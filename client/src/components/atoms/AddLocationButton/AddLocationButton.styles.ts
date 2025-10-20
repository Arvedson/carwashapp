import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { AddLocationButtonStyles } from "./AddLocationButton.types";

export const createAddLocationButtonStyles = (
  theme: Theme,
  disabled: boolean = false
): AddLocationButtonStyles => {
  const { colors, spacing, borders, typography, shadows } = theme;

  return StyleSheet.create({
    container: {
      // Container wrapper for consistent spacing
      marginVertical: spacing.xs,
    },
    button: {
      // Base button styles following project architecture
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      minHeight: theme.components.button.sizes.medium.minHeight, // 44px for consistency
      borderRadius: borders.radius.md,
      backgroundColor: colors.primary,
      // Shadow for depth and consistency with other buttons
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      // Disabled state
      ...(disabled && {
        backgroundColor: colors.disabled,
        opacity: 0.6,
      }),
    },
    icon: {
      // Icon styles for consistency
      fontSize: theme.components.icon.sizes.md, // 20px
      color: colors.text.inverse,
      marginRight: spacing.xs,
      // Disabled state
      ...(disabled && {
        color: colors.text.secondary,
      }),
    },
    text: {
      // Text styles following typography system
      fontSize: typography.fontSize.md, // 16px
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
      textAlign: "center",
      // Disabled state
      ...(disabled && {
        color: colors.text.secondary,
      }),
    },
    loadingText: {
      // Loading text styles (same as text but with different opacity)
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
      textAlign: "center",
      opacity: 0.8,
    },
  });
};
