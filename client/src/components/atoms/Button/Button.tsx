import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createButtonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  loading = false,
  disabled = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createButtonStyles(theme, variant, size, disabled);

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled || loading}
      {...props}
    >
      <Text style={styles.text}>{loading ? "Cargando..." : children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
