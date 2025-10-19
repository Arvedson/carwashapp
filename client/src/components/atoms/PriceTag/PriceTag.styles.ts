import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { PriceTagSize, PriceTagVariant } from "./PriceTag.types";

export const createPriceTagStyles = (
  theme: Theme,
  size: PriceTagSize,
  variant: PriceTagVariant
) => {
  const { colors, typography, spacing } = theme;

  const sizeStyles = {
    small: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
    },
    medium: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
    },
    large: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
    },
    xl: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
    },
  };

  const variantStyles = {
    default: {
      color: colors.text.primary,
    },
    primary: {
      color: colors.primary,
    },
    success: {
      color: colors.success,
    },
    warning: {
      color: colors.warning,
    },
    error: {
      color: colors.error,
    },
  };

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "baseline",
    },
    text: {
      ...sizeStyles[size],
      ...variantStyles[variant],
    },
    currency: {
      ...sizeStyles[size],
      ...variantStyles[variant],
      marginRight: spacing.xs,
    },
  });
};
