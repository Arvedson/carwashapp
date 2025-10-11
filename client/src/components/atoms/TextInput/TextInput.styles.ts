import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { TextInputVariant, TextInputSize } from "./TextInput.types";

export const createTextInputStyles = (
  theme: Theme,
  variant: TextInputVariant,
  size: TextInputSize,
  error: boolean
) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      marginBottom: spacing.lg,
    },
    label: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    input: {
      // Tamaños
      ...(size === "small" && {
        padding: spacing.sm,
        fontSize: typography.fontSize.sm,
        minHeight: theme.components.textInput.sizes.small.minHeight,
      }),
      ...(size === "medium" && {
        padding: spacing.md,
        fontSize: typography.fontSize.md,
        minHeight: theme.components.textInput.sizes.medium.minHeight,
      }),
      ...(size === "large" && {
        padding: spacing.lg,
        fontSize: typography.fontSize.lg,
        minHeight: theme.components.textInput.sizes.large.minHeight,
      }),

      // Variantes
      ...(variant === "default" && {
        borderWidth: borders.width.thin,
        borderColor: error ? colors.error : colors.border,
        borderRadius: borders.radius.md,
        backgroundColor: colors.surface,
        color: colors.text.primary,
      }),
      ...(variant === "outlined" && {
        borderWidth: borders.width.thin,
        borderColor: error ? colors.error : colors.border,
        borderRadius: borders.radius.md,
        backgroundColor: "transparent",
        color: colors.text.primary,
      }),
      ...(variant === "filled" && {
        borderWidth: 0,
        borderRadius: borders.radius.md,
        backgroundColor: colors.background,
        color: colors.text.primary,
      }),
      ...(variant === "underlined" && {
        borderWidth: 0,
        borderBottomWidth: borders.width.thin,
        borderBottomColor: error ? colors.error : colors.border,
        backgroundColor: "transparent",
        color: colors.text.primary,
        borderRadius: 0,
      }),

      // Estado de error
      ...(error && {
        borderColor: colors.error,
      }),
    },
    errorText: {
      fontSize: typography.fontSize.xs,
      color: colors.error,
      marginTop: spacing.xs,
    },
  });
};
