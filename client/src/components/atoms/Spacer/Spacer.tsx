import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createSpacerStyles } from "./Spacer.styles";
import { SpacerAtomProps } from "./Spacer.types";

export const Spacer: React.FC<SpacerAtomProps> = ({
  size = "md",
  direction = "vertical",
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createSpacerStyles(theme, size, direction);

  return <View style={[styles.spacer, style]} {...props} />;
};

export default Spacer;



