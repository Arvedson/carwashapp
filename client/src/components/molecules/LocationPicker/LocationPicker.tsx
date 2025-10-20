import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { LocationMap } from "@/components/molecules/LocationMap";
import { CurrentLocationButton } from "@/components/atoms/CurrentLocationButton";
import { Button } from "@/components/atoms/Button";
import { LocationDisplay } from "@/components/atoms/LocationDisplay";
import { LocationPickerProps } from "./LocationPicker.types";
import { createLocationPickerStyles } from "./LocationPicker.styles";
import { useTheme } from "@/contexts/ThemeContext";
import { Location } from "@/types";

export const LocationPicker: React.FC<LocationPickerProps> = ({
  selectedLocation,
  onLocationSelect,
  onCurrentLocationPress,
  isLoading = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createLocationPickerStyles(theme);
  const [mapRegion, setMapRegion] = useState<Location | null>(
    selectedLocation || null
  );

  const handleMapRegionChange = useCallback(
    (region: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    }) => {
      const location: Location = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      };
      setMapRegion(location);
    },
    []
  );

  const handleSelectLocation = useCallback(() => {
    if (mapRegion) {
      onLocationSelect(mapRegion);
    }
  }, [mapRegion, onLocationSelect]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.mapContainer}>
        <LocationMap
          size="large"
          initialLatitude={mapRegion?.latitude}
          initialLongitude={mapRegion?.longitude}
          onRegionChange={handleMapRegionChange}
        />
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.currentLocationButtonContainer}>
          <CurrentLocationButton
            size="medium"
            text="Mi ubicación"
            onPress={onCurrentLocationPress}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            size="medium"
            onPress={handleSelectLocation}
            disabled={!mapRegion || isLoading}
            loading={isLoading}
          >
            Seleccionar una ubicación
          </Button>
        </View>
      </View>

      {selectedLocation && (
        <LocationDisplay location={selectedLocation} isLoading={isLoading} />
      )}
    </View>
  );
};
