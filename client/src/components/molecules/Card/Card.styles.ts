import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { CardVariant, CardSize } from "./Card.types";

export const createCardStyles = (
  theme: Theme,
  variant: CardVariant,
  size: CardSize,
  padding: boolean
) => {
  const { colors, spacing, borders, shadows } = theme;

  return StyleSheet.create({
    card: {
      borderRadius: borders.radius.lg,
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
        backgroundColor: colors.surface,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }),
      ...(variant === "elevated" && {
        backgroundColor: colors.surface,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
      }),
      ...(variant === "outlined" && {
        backgroundColor: "transparent",
        borderWidth: borders.width.thin,
        borderColor: colors.border,
      }),
      ...(variant === "filled" && {
        backgroundColor: colors.surface,
      }),
    },
  });
};
