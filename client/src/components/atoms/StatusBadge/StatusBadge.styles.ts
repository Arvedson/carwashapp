import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import {
  StatusBadgeProps,
  StatusBadgeSize,
  StatusBadgeVariant,
  StatusType,
} from "./StatusBadge.types";

export const createStatusBadgeStyles = (
  theme: Theme,
  size: StatusBadgeSize,
  variant: StatusBadgeVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      paddingHorizontal: spacing.xs,
      paddingVertical: 2,
      borderRadius: borders.radius.sm,
    },
    medium: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: borders.radius.sm,
    },
    large: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.md,
    },
  };

  const variantStyles = {
    success: {
      backgroundColor: colors.success,
    },
    warning: {
      backgroundColor: colors.warning,
    },
    error: {
      backgroundColor: colors.error,
    },
    info: {
      backgroundColor: colors.info,
    },
    neutral: {
      backgroundColor: colors.text.secondary,
    },
  };

  const fontSizeMap = {
    small: typography.fontSize.xs,
    medium: typography.fontSize.sm,
    large: typography.fontSize.md,
  };

  return StyleSheet.create({
    container: {
      ...sizeStyles[size],
      ...variantStyles[variant],
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",
    },
    text: {
      fontSize: fontSizeMap[size],
      fontWeight: typography.fontWeight.medium,
      color: colors.text.inverse,
      textAlign: "center",
    },
  });
};

export const getStatusConfig = (status: StatusType) => {
  const statusMap = {
    confirmed: {
      variant: "success" as StatusBadgeVariant,
      text: "Confirmada",
    },
    pending: {
      variant: "warning" as StatusBadgeVariant,
      text: "Pendiente",
    },
    cancelled: {
      variant: "error" as StatusBadgeVariant,
      text: "Cancelada",
    },
    completed: {
      variant: "success" as StatusBadgeVariant,
      text: "Completada",
    },
    in_progress: {
      variant: "info" as StatusBadgeVariant,
      text: "En Progreso",
    },
  };

  return statusMap[status] || statusMap.pending;
};
