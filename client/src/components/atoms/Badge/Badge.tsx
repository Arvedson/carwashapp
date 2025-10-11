import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createBadgeStyles } from "./Badge.styles";
import { BadgeAtomProps } from "./Badge.types";

export const Badge: React.FC<BadgeAtomProps> = ({
  children,
  variant = "primary",
  size = "medium",
  shape = "rounded",
  color,
  backgroundColor,
  style,
  textStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createBadgeStyles(
    theme,
    variant,
    size,
    shape,
    color,
    backgroundColor
  );

  return (
    <View style={[styles.badge, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default Badge;



