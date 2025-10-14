import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { CardVariant, CardSize } from "./Card.types";
import { borderPresets } from "@/themes/borders";

export const createCardStyles = (
  theme: Theme,
  variant: CardVariant,
  size: CardSize,
  padding: boolean
) => {
  const { colors, spacing, borders, shadows } = theme;

  return StyleSheet.create({
    card: {
      // Usar presets de bordes para consistencia
      borderRadius: borderPresets.card.radius,
      borderWidth: borderPresets.card.width,
      borderColor: colors.border,
      backgroundColor: colors.surface,

      // Padding interno basado en size
      ...(padding && {
        ...(size === "small" && {
          padding: spacing.sm,
        }),
        ...(size === "medium" && {
          padding: spacing.md,
        }),
        ...(size === "large" && {
          padding: spacing.lg,
        }),
      }),

      // Variantes
      ...(variant === "default" && {
        // Usar preset base
        borderRadius: borderPresets.card.radius,
        borderWidth: borderPresets.card.width,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        shadowColor: colors.text.primary,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }),
      ...(variant === "elevated" && {
        // Usar preset base con sombra más pronunciada
        borderRadius: borderPresets.card.radius,
        borderWidth: borderPresets.card.width,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        shadowColor: colors.text.primary,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
      }),
      ...(variant === "outlined" && {
        // Usar preset outlined
        borderRadius: borderPresets.cardOutlined.radius,
        borderWidth: borderPresets.cardOutlined.width,
        borderColor: colors.border,
        backgroundColor: "transparent",
        shadowColor: "transparent",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }),
      ...(variant === "filled" && {
        // Usar preset base sin sombra
        borderRadius: borderPresets.card.radius,
        borderWidth: borderPresets.card.width,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        shadowColor: "transparent",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }),
    },
  });
};
