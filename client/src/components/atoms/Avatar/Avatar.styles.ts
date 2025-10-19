import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { AvatarSize, AvatarVariant } from "./Avatar.types";

export const createAvatarStyles = (
  theme: Theme,
  size: AvatarSize,
  variant: AvatarVariant,
  backgroundColor?: string,
  textColor?: string
) => {
  const { colors, borders, typography, components } = theme;

  // Usar tokens de componentes con fallback
  const sizeStyles = components.avatar?.sizes?.[size] || {
    width: 40,
    height: 40,
  };

  // Calcular fontSize basado en el tamaño del avatar
  const fontSizeMap = {
    xs: typography.fontSize.xs,
    sm: typography.fontSize.sm,
    md: typography.fontSize.md,
    lg: typography.fontSize.lg,
    xl: typography.fontSize.xl,
    xxl: typography.fontSize.xxl,
  };

  const fontSize = fontSizeMap[size] || typography.fontSize.md;

  // Mapeo de variantes
  const variantMap = {
    circle: {
      borderRadius: (sizeStyles.width || 40) / 2, // Círculo perfecto
    },
    rounded: {
      borderRadius: borders.radius.lg,
    },
    square: {
      borderRadius: borders.radius.sm,
    },
  };

  const variantStyles = variantMap[variant] || variantMap.circle;

  return StyleSheet.create({
    avatar: {
      width: sizeStyles.width,
      height: sizeStyles.height,
      backgroundColor: backgroundColor || colors.primary,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",

      // Forma
      ...variantStyles,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    text: {
      fontSize: fontSize,
      fontWeight: typography.fontWeight.semibold,
      color: textColor || colors.surface,
      textAlign: "center",
    },
    placeholder: {
      width: "100%",
      height: "100%",
      backgroundColor: colors.disabled,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
