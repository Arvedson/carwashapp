import { StyleSheet } from "react-native";
import { Theme, shadowPresets } from "@/themes";
import { ServiceTimeVariant, ServiceTimeSize } from "./ServiceTime.types";

export const createServiceTimeStyles = (
  theme: Theme,
  variant: ServiceTimeVariant,
  size: ServiceTimeSize,
  error: boolean,
  disabled: boolean
) => {
  const { colors, spacing, borders, typography, shadows, opacity } = theme;
  const componentSize = theme.components.serviceTime.sizes[size];

  // Mapeo de tamaños (similar a DatePicker)
  const sizeMap = {
    small: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.sm,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
    },
    medium: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    large: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
  };

  const sizeStyles = sizeMap[size];

  // Mapeo de variantes (similar a DatePicker)
  const variantMap = {
    default: {
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin,
      borderColor: error ? colors.error : colors.border,
      borderRadius: borders.radius.md,
    },
    outlined: {
      backgroundColor: "transparent",
      borderWidth: borders.width.thin,
      borderColor: error ? colors.error : colors.border,
      borderRadius: borders.radius.md,
    },
    filled: {
      backgroundColor: error
        ? colors.error +
          Math.round(opacity.light * 255)
            .toString(16)
            .padStart(2, "0")
        : colors.surfaceVariant,
      borderWidth: 0,
      borderRadius: borders.radius.md,
    },
  };

  const variantStyles = variantMap[variant];

  return StyleSheet.create({
    container: {
      marginBottom: spacing.md,
    },
    label: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: sizeStyles.inputHeight,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      paddingVertical: sizeStyles.paddingVertical,
      ...variantStyles,
      ...(disabled && {
        backgroundColor: colors.disabled,
        opacity: 0.6,
      }),
    },
    inputText: {
      flex: 1,
      fontSize: sizeStyles.fontSize,
      color: colors.text.primary,
      fontWeight: typography.fontWeight.regular,
    },
    placeholderText: {
      flex: 1,
      fontSize: sizeStyles.fontSize,
      color: colors.text.secondary,
      fontWeight: typography.fontWeight.regular,
    },
    inputIcon: {
      marginLeft: spacing.sm,
    },
    errorText: {
      fontSize: typography.fontSize.xs,
      color: colors.error,
      marginTop: spacing.xs,
    },
    timeListContainer: {
      marginTop: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: borders.radius.lg,
      borderWidth: borders.width.thin,
      borderColor: colors.border,
      ...shadowPresets.card,
      overflow: "hidden",
    },
    timeList: {
      flex: 1,
    },
    timeSlot: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: colors.border,
    },
    timeSlotSelected: {
      backgroundColor: colors.primary + "10",
    },
    timeSlotDisabled: {
      backgroundColor: colors.disabled,
      opacity: 0.5,
    },
    timeSlotText: {
      fontSize: typography.fontSize.md,
      color: colors.text.primary,
      fontWeight: typography.fontWeight.regular,
    },
    timeSlotTextSelected: {
      color: colors.primary,
      fontWeight: typography.fontWeight.medium,
    },
    timeSlotTextDisabled: {
      color: colors.text.disabled,
    },
    actionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderTopWidth: borders.width.thin,
      borderTopColor: colors.border,
      backgroundColor: colors.surfaceVariant,
    },
    actionButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.sm,
      backgroundColor: "transparent",
    },
    actionButtonPrimary: {
      backgroundColor: colors.primary,
    },
    actionButtonText: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      fontWeight: typography.fontWeight.medium,
    },
    actionButtonTextPrimary: {
      color: colors.text.inverse,
    },
  });
};
