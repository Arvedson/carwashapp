import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { AddLocationButtonProps } from "./AddLocationButton.types";
import { createAddLocationButtonStyles } from "./AddLocationButton.styles";

export const AddLocationButton: React.FC<AddLocationButtonProps> = ({
  onPress,
  isLoading = false,
  disabled = false,
  text = "Agregar ubicación",
  style,
}) => {
  const { theme } = useTheme();
  const styles = createAddLocationButtonStyles(theme, disabled);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={disabled || isLoading}
        activeOpacity={0.7}
      >
        <Ionicons
          name="add-circle-outline"
          size={theme.components.icon.sizes.md}
          color={styles.icon.color}
        />
        <Text style={isLoading ? styles.loadingText : styles.text}>
          {isLoading ? "Agregando..." : text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
