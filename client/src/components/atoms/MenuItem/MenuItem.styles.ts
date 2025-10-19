import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { MenuItemSize, MenuItemVariant } from "./MenuItem.types";

export const createMenuItemStyles = (
  theme: Theme,
  size: MenuItemSize,
  variant: MenuItemVariant
) => {
  const { colors, typography, spacing, borders } = theme;

  const sizeStyles = {
    small: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      iconSize: 16,
      titleSize: typography.fontSize.md,
      subtitleSize: typography.fontSize.sm,
    },
    medium: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      iconSize: 20,
      titleSize: typography.fontSize.lg,
      subtitleSize: typography.fontSize.md,
    },
    large: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.md,
      iconSize: 24,
      titleSize: typography.fontSize.xl,
      subtitleSize: typography.fontSize.lg,
    },
  };

  const variantStyles = {
    default: {
      backgroundColor: "transparent",
    },
    primary: {
      backgroundColor: colors.primary,
    },
    danger: {
      backgroundColor: colors.error,
    },
    ghost: {
      backgroundColor: "transparent",
    },
  };

  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: currentSize.paddingVertical,
      paddingHorizontal: currentSize.paddingHorizontal,
      backgroundColor: currentVariant.backgroundColor,
      borderRadius: borders.radius.md,
    },
    content: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      fontSize: currentSize.iconSize,
      marginRight: spacing.md,
      color: variant === "primary" ? colors.text.inverse : colors.text.primary,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.medium,
      color: variant === "primary" ? colors.text.inverse : colors.text.primary,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: currentSize.subtitleSize,
      color:
        variant === "primary" ? colors.text.inverse : colors.text.secondary,
    },
    chevron: {
      fontSize: 16,
      color: variant === "primary" ? colors.text.inverse : colors.text.disabled,
      marginLeft: spacing.sm,
    },
    badge: {
      backgroundColor: colors.primary,
      borderRadius: borders.radius.sm,
      paddingHorizontal: spacing.xs,
      paddingVertical: 2,
      marginLeft: spacing.sm,
      minWidth: 20,
      alignItems: "center",
    },
  });
};
