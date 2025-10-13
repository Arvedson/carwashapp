import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createLocationSectionContainerStyles } from "./LocationSectionContainer.styles";
import { LocationSectionContainerProps } from "./LocationSectionContainer.types";
import { LocationHeaderText } from "@/components/atoms/LocationHeaderText";
import { CurrentLocationButton } from "@/components/atoms/CurrentLocationButton";
import { LocationMap } from "@/components/molecules/LocationMap";

export const LocationSectionContainer: React.FC<LocationSectionContainerProps> = ({
  mapSize = "medium",
  buttonSize = "medium",
  headerText = "Ubicación",
  buttonText = "Mi Ubicación",
  showLocationButton = true,
  onLocationPress,
  onMapRegionChange,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createLocationSectionContainerStyles(theme);

  const handleLocationPress = () => {
    onLocationPress?.();
  };

  const handleMapRegionChange = (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => {
    onMapRegionChange?.(region);
  };

  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.header}>
        <LocationHeaderText>{headerText}</LocationHeaderText>
      </View>
      
      <View style={styles.mapContainer}>
        <LocationMap
          size={mapSize}
          onRegionChange={handleMapRegionChange}
        />
      </View>
      
      {showLocationButton && (
        <View style={styles.buttonContainer}>
          <CurrentLocationButton
            size={buttonSize}
            text={buttonText}
            onPress={handleLocationPress}
          />
        </View>
      )}
    </View>
  );
};
