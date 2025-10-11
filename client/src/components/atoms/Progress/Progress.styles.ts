import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ProgressVariant, ProgressSize, ProgressColor } from "./Progress.types";

export const createProgressStyles = (
  theme: Theme,
  variant: ProgressVariant,
  size: ProgressSize,
  color: ProgressColor,
  backgroundColor?: string
) => {
  const { colors, borders, typography, components } = theme;

  // Usar tokens de componentes
  const linearStyles = components.progress.linear.sizes[size];
  const circularStyles = components.progress.circular.sizes[size];

  // Calcular fontSize basado en el tamaño
  const fontSizeMap = {
    small: typography.fontSize.xs,
    medium: typography.fontSize.sm,
    large: typography.fontSize.md,
  };

  const fontSize = fontSizeMap[size];

  // Mapeo de colores
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success || "#10B981",
    warning: colors.warning || "#F59E0B",
    error: colors.error,
    info: colors.info || "#3B82F6",
  };

  const progressColor = colorMap[color];

  return StyleSheet.create({
    // Linear Progress
    linearContainer: {
      width: "100%",
      height: linearStyles.height,
      backgroundColor: backgroundColor || colors.disabled,
      borderRadius: borders.radius.full,
      overflow: "hidden",
    },
    linearProgress: {
      height: "100%",
      backgroundColor: progressColor,
      borderRadius: borders.radius.full,
    },
    linearPercentage: {
      position: "absolute",
      top: -fontSize - 4,
      right: 0,
      fontSize: fontSize,
      fontWeight: "600",
      color: colors.text.primary,
    },

    // Circular Progress
    circularContainer: {
      width: circularStyles.size || 60,
      height: circularStyles.size || 60,
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },
    circularBackground: {
      position: "absolute",
      width: circularStyles.size || 60,
      height: circularStyles.size || 60,
      borderRadius: (circularStyles.size || 60) / 2,
      borderWidth: circularStyles.strokeWidth,
      borderColor: backgroundColor || colors.disabled,
    },
    circularProgress: {
      position: "absolute",
      width: circularStyles.size || 60,
      height: circularStyles.size || 60,
      borderRadius: (circularStyles.size || 60) / 2,
      borderWidth: circularStyles.strokeWidth,
      borderColor: progressColor,
      borderTopColor: "transparent",
      borderRightColor: "transparent",
    },
    circularPercentage: {
      fontSize: fontSize,
      fontWeight: "600",
      color: colors.text.primary,
    },
  });
};
