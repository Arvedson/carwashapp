import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { StatusBadgeProps } from "./StatusBadge.types";
import { createStatusBadgeStyles, getStatusConfig } from "./StatusBadge.styles";

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "medium",
  variant,
  text,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  // Get status configuration
  const statusConfig = getStatusConfig(status);
  const finalVariant = variant || statusConfig.variant;
  const finalText = text || statusConfig.text;

  const styles = createStatusBadgeStyles(theme, size, finalVariant);

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{finalText}</Text>
    </View>
  );
};

export default StatusBadge;
