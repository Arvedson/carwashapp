import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { BadgeVariant, BadgeSize, BadgeShape } from "./Badge.types";

export const createBadgeStyles = (
  theme: Theme,
  variant: BadgeVariant,
  size: BadgeSize,
  shape: BadgeShape,
  color?: string,
  backgroundColor?: string
) => {
  const { colors, spacing, borders, typography, components } = theme;

  // Usar tokens de componentes
  const componentSize = components.badge.sizes[size];

  // Mapeo de tamaños con tokens
  const sizeMap = {
    small: {
      paddingHorizontal: spacing.xs,
      paddingVertical: spacing.xs / 2,
      fontSize: typography.fontSize.xs,
      minHeight: componentSize.minHeight,
    },
    medium: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      fontSize: typography.fontSize.sm,
      minHeight: componentSize.minHeight,
    },
    large: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontSize: typography.fontSize.md,
      minHeight: componentSize.minHeight,
    },
  };

  const sizeStyles = sizeMap[size];

  // Mapeo de formas
  const shapeMap = {
    rounded: {
      borderRadius: borders.radius.sm,
    },
    pill: {
      borderRadius: borders.radius.full, // Usar token para forma de píldora
    },
    square: {
      borderRadius: borders.radius.sm,
    },
  };

  const shapeStyles = shapeMap[shape];

  // Mapeo de variantes
  const variantMap = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.surface,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.surface,
    },
    success: {
      backgroundColor: colors.success || "#10B981",
      color: colors.surface,
    },
    warning: {
      backgroundColor: colors.warning || "#F59E0B",
      color: colors.surface,
    },
    error: {
      backgroundColor: colors.error,
      color: colors.surface,
    },
    info: {
      backgroundColor: colors.info || "#3B82F6",
      color: colors.surface,
    },
    neutral: {
      backgroundColor: colors.disabled,
      color: colors.text.secondary,
    },
  };

  const variantStyles = variantMap[variant];

  return StyleSheet.create({
    badge: {
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start", // Para que no ocupe todo el ancho
      flexDirection: "row",

      // Tamaño
      paddingHorizontal: sizeStyles.paddingHorizontal,
      paddingVertical: sizeStyles.paddingVertical,
      minHeight: sizeStyles.minHeight,

      // Forma
      ...shapeStyles,

      // Color de fondo (personalizado o por variante)
      backgroundColor: backgroundColor || variantStyles.backgroundColor,
    },
    text: {
      fontSize: sizeStyles.fontSize,
      fontWeight: typography.fontWeight.medium,
      textAlign: "center",

      // Color de texto (personalizado o por variante)
      color: color || variantStyles.color,
    },
  });
};
