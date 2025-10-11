import React from "react";
import { Text as RNText } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createTextStyles } from "./Text.styles";
import { TextAtomProps } from "./Text.types";

export const Text: React.FC<TextAtomProps> = ({
  variant = "body",
  size = "md",
  weight = "regular",
  color,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createTextStyles(theme, variant, size, weight, color);

  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
};
