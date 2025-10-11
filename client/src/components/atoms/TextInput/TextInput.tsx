import React from "react";
import { TextInput as RNTextInput, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createTextInputStyles } from "./TextInput.styles";
import { TextInputAtomProps } from "./TextInput.types";
import { Text } from "../Text";

export const TextInput: React.FC<TextInputAtomProps> = ({
  variant = "default",
  size = "medium",
  error = false,
  label,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createTextInputStyles(theme, variant, size, error);

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
      )}
      <RNTextInput
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.text.secondary}
        {...props}
      />
      {error && (
        <Text variant="caption" style={styles.errorText}>
          Este campo es requerido
        </Text>
      )}
    </View>
  );
};
