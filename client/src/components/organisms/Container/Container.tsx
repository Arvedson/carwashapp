import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createContainerStyles } from "./Container.styles";
import { ContainerProps, ContainerVariant } from "./Container.types";

export const Container: React.FC<ContainerProps> = ({
  variant = "base",
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createContainerStyles(theme);

  return (
    <View style={[styles[variant], style]} {...props}>
      {children}
    </View>
  );
};
