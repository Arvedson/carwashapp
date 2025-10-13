import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useTheme } from "@/contexts/ThemeContext";
import { createCurrentLocationButtonStyles } from "./CurrentLocationButton.styles";
import { CurrentLocationButtonProps } from "./CurrentLocationButton.types";

export const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = ({
  size = "medium",
  loading = false,
  disabled = false,
  text = "Mi Ubicación",
  style,
  onPress,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createCurrentLocationButtonStyles(
    theme,
    size,
    disabled || loading
  );

  const handlePress = async () => {
    if (onPress) {
      onPress();
      return;
    }

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permisos de Ubicación",
          "Se necesitan permisos de ubicación para obtener tu posición actual.",
          [{ text: "OK" }]
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      Alert.alert(
        "Ubicación Actual",
        `Latitud: ${location.coords.latitude.toFixed(
          6
        )}\nLongitud: ${location.coords.longitude.toFixed(6)}`,
        [{ text: "OK" }]
      );
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener la ubicación actual");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled || loading}
      onPress={handlePress}
      {...props}
    >
      <Ionicons
        name="location"
        size={styles.icon.width}
        color={styles.icon.tintColor}
      />
      <Text style={styles.text}>{loading ? "Obteniendo..." : text}</Text>
    </TouchableOpacity>
  );
};
