import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { TextVariant, TextSize, TextWeight } from "./Text.types";

export const createTextStyles = (
  theme: Theme,
  variant: TextVariant,
  size: TextSize,
  weight: TextWeight,
  color?: string
) => {
  const { colors, typography } = theme;

  return StyleSheet.create({
    text: {
      // Tamaño basado en variant y size
      ...(variant === "heading" && {
        fontSize: typography.fontSize.xxl, // 24
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.tight * typography.fontSize.xxl,
      }),
      ...(variant === "subheading" && {
        fontSize: typography.fontSize.xl, // 20
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.tight * typography.fontSize.xl,
      }),
      ...(variant === "body" && {
        fontSize: typography.fontSize.md, // 16
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.normal * typography.fontSize.md,
      }),
      ...(variant === "label" && {
        fontSize: typography.fontSize.sm, // 14
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.normal * typography.fontSize.sm,
      }),
      ...(variant === "caption" && {
        fontSize: typography.fontSize.xs, // 12
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.normal * typography.fontSize.xs,
      }),

      // Override con size específico si se proporciona
      ...(size === "xs" && { fontSize: typography.fontSize.xs }),
      ...(size === "sm" && { fontSize: typography.fontSize.sm }),
      ...(size === "md" && { fontSize: typography.fontSize.md }),
      ...(size === "lg" && { fontSize: typography.fontSize.lg }),
      ...(size === "xl" && { fontSize: typography.fontSize.xl }),
      ...(size === "xxl" && { fontSize: typography.fontSize.xxl }),

      // Override con weight específico si se proporciona
      ...(weight === "light" && { fontWeight: typography.fontWeight.light }),
      ...(weight === "regular" && {
        fontWeight: typography.fontWeight.regular,
      }),
      ...(weight === "medium" && { fontWeight: typography.fontWeight.medium }),
      ...(weight === "semibold" && {
        fontWeight: typography.fontWeight.semibold,
      }),
      ...(weight === "bold" && { fontWeight: typography.fontWeight.bold }),

      // Color
      color: color || colors.text.primary,
    },
  });
};
