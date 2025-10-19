import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { LocationDisplayProps } from "./LocationDisplay.types";
import { createLocationDisplayStyles } from "./LocationDisplay.styles";

const LocationDisplay: React.FC<LocationDisplayProps> = ({
  location,
  isLoading = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createLocationDisplayStyles(theme);

  const getLocationText = () => {
    if (isLoading) return "Obteniendo ubicación...";
    if (!location) return "Ubicación no disponible";
    if (location.address) return location.address;
    if (location.city && location.state) {
      return `${location.city}, ${location.state}`;
    }
    return "Ubicación actual";
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.icon}>📍</Text>
      <Text style={isLoading ? styles.loadingText : styles.text}>
        {getLocationText()}
      </Text>
    </View>
  );
};

export default LocationDisplay;
