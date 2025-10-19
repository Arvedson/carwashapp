import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { EmptyStateSize, EmptyStateVariant } from "./EmptyState.types";

export const createEmptyStateStyles = (
  theme: Theme,
  size: EmptyStateSize,
  variant: EmptyStateVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      padding: spacing.lg,
      iconSize: 48,
      titleSize: typography.fontSize.lg,
      descriptionSize: typography.fontSize.md,
    },
    medium: {
      padding: spacing.xl,
      iconSize: 64,
      titleSize: typography.fontSize.xl,
      descriptionSize: typography.fontSize.lg,
    },
    large: {
      padding: spacing.xxl,
      iconSize: 80,
      titleSize: typography.fontSize.xxl,
      descriptionSize: typography.fontSize.xl,
    },
  };

  const variantStyles = {
    default: {
      backgroundColor: colors.surface,
      iconColor: colors.text.disabled,
      titleColor: colors.text.primary,
      descriptionColor: colors.text.secondary,
    },
    primary: {
      backgroundColor: colors.primary,
      iconColor: colors.text.inverse,
      titleColor: colors.text.inverse,
      descriptionColor: colors.text.inverse,
    },
    secondary: {
      backgroundColor: colors.surfaceVariant,
      iconColor: colors.text.secondary,
      titleColor: colors.text.primary,
      descriptionColor: colors.text.secondary,
    },
    minimal: {
      backgroundColor: "transparent",
      iconColor: colors.text.disabled,
      titleColor: colors.text.primary,
      descriptionColor: colors.text.secondary,
    },
  };

  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  return StyleSheet.create({
    container: {
      backgroundColor: currentVariant.backgroundColor,
      borderRadius: borders.radius.medium,
      padding: currentSize.padding,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 200,
    },
    content: {
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      fontSize: currentSize.iconSize,
      color: currentVariant.iconColor,
      marginBottom: spacing.lg,
    },
    title: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.semibold,
      color: currentVariant.titleColor,
      textAlign: "center",
      marginBottom: spacing.md,
    },
    description: {
      fontSize: currentSize.descriptionSize,
      color: currentVariant.descriptionColor,
      textAlign: "center",
      lineHeight: currentSize.descriptionSize * 1.4,
      marginBottom: spacing.xl,
    },
    action: {
      minWidth: 150,
    },
  });
};
