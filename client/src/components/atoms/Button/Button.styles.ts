import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ButtonVariant, ButtonSize } from "./Button.types";

export const createButtonStyles = (
  theme: Theme,
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean
) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    button: {
      flex: 1, // Ocupa toda la altura y ancho disponible del contenedor
      width: "100%", // Asegura que ocupe todo el ancho disponible
      borderRadius: borders.radius.md,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      // Tamaños
      ...(size === "small" && {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        minHeight: theme.components.button.sizes.small.minHeight,
      }),
      ...(size === "medium" && {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        minHeight: theme.components.button.sizes.medium.minHeight,
      }),
      ...(size === "large" && {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg,
        minHeight: theme.components.button.sizes.large.minHeight,
      }),
      // Variantes
      ...(variant === "primary" && {
        backgroundColor: colors.primary,
      }),
      ...(variant === "secondary" && {
        backgroundColor: colors.secondary,
      }),
      ...(variant === "error" && {
        backgroundColor: colors.error,
      }),
      ...(variant === "outline" && {
        backgroundColor: "transparent",
        borderWidth: borders.width.thin,
        borderColor: colors.primary,
      }),
      ...(variant === "ghost" && {
        backgroundColor: "transparent",
      }),
      // Estados
      ...(disabled && {
        backgroundColor: colors.disabled,
        opacity: 0.6,
      }),
    },
    text: {
      fontWeight: typography.fontWeight.semibold,
      textAlign: "center",
      // Tamaños de texto usando tokens
      ...(size === "small" && {
        fontSize: typography.fontSize.sm, // 14
      }),
      ...(size === "medium" && {
        fontSize: typography.fontSize.md, // 16
      }),
      ...(size === "large" && {
        fontSize: typography.fontSize.lg, // 18
      }),
      // Colores de texto
      ...(variant === "primary" && {
        color: colors.text.inverse,
      }),
      ...(variant === "secondary" && {
        color: colors.text.inverse,
      }),
      ...(variant === "error" && {
        color: colors.text.inverse,
      }),
      ...(variant === "outline" && {
        color: colors.primary,
      }),
      ...(variant === "ghost" && {
        color: colors.primary,
      }),
      // Estado deshabilitado
      ...(disabled && {
        color: colors.text.secondary,
      }),
    },
  });
};
