import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createCardStyles } from "./Card.styles";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  variant = "default",
  size = "medium",
  padding = true,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createCardStyles(theme, variant, size, padding);

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};
