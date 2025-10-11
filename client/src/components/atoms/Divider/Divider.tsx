import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createDividerStyles } from "./Divider.styles";
import { DividerAtomProps } from "./Divider.types";

export const Divider: React.FC<DividerAtomProps> = ({
  variant = "solid",
  orientation = "horizontal",
  size = "thin",
  color,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createDividerStyles(theme, variant, orientation, size, color);

  return <View style={[styles.divider, style]} {...props} />;
};

export default Divider;



