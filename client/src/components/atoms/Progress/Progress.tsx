import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createProgressStyles } from "./Progress.styles";
import { ProgressAtomProps } from "./Progress.types";

export const Progress: React.FC<ProgressAtomProps> = ({
  value,
  variant = "linear",
  size = "medium",
  color = "primary",
  backgroundColor,
  showPercentage = false,
  animated = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createProgressStyles(
    theme,
    variant,
    size,
    color,
    backgroundColor
  );

  // Asegurar que el valor esté entre 0 y 100
  const clampedValue = Math.max(0, Math.min(100, value));
  const percentage = Math.round(clampedValue);

  const renderLinearProgress = () => (
    <View style={[styles.linearContainer, style]} {...props}>
      <View
        style={[
          styles.linearProgress,
          {
            width: `${clampedValue}%`,
          },
        ]}
      />
      {showPercentage && (
        <Text style={styles.linearPercentage}>{percentage}%</Text>
      )}
    </View>
  );

  const renderCircularProgress = () => {
    const circularStyles = theme.components.progress.circular.sizes[size];

    // Calcular el ángulo de rotación (0-360 grados)
    const rotation = (clampedValue / 100) * 360;

    return (
      <View style={[styles.circularContainer, style]} {...props}>
        <View style={styles.circularBackground} />
        <View
          style={[
            styles.circularProgress,
            {
              transform: [{ rotate: `${rotation}deg` }],
            },
          ]}
        />
        {showPercentage && (
          <Text style={styles.circularPercentage}>{percentage}%</Text>
        )}
      </View>
    );
  };

  return variant === "linear"
    ? renderLinearProgress()
    : renderCircularProgress();
};

export default Progress;
