import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { createLocationHeaderTextStyles } from "./LocationHeaderText.styles";
import { LocationHeaderTextProps } from "./LocationHeaderText.types";
import { Text } from "../Text";

export const LocationHeaderText: React.FC<LocationHeaderTextProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createLocationHeaderTextStyles(theme);

  return (
    <Text
      variant="heading"
      size="lg"
      weight="semibold"
      style={[styles.text, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
