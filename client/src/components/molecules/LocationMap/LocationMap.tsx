import React, { useState, useRef, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import { useTheme } from "@/contexts/ThemeContext";
import { createLocationMapStyles } from "./LocationMap.styles";
import { LocationMapProps } from "./LocationMap.types";
import { DEFAULT_MAP_REGION, MAP_CONFIG } from "@/constants/maps";

export const LocationMap: React.FC<LocationMapProps> = ({
  size = "medium",
  initialLatitude = DEFAULT_MAP_REGION.latitude,
  initialLongitude = DEFAULT_MAP_REGION.longitude,
  initialZoom = DEFAULT_MAP_REGION.latitudeDelta,
  showsUserLocation = MAP_CONFIG.showsUserLocation,
  followsUserLocation = MAP_CONFIG.followsUserLocation,
  onMapReady,
  onRegionChange,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createLocationMapStyles(theme, size);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);

  const initialRegion: Region = {
    latitude: initialLatitude,
    longitude: initialLongitude,
    latitudeDelta: initialZoom,
    longitudeDelta: initialZoom,
  };

  useEffect(() => {
    // Solo solicitar ubicación una vez al montar el componente
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permisos de Ubicación",
          "Se necesitan permisos de ubicación para mostrar tu posición en el mapa.",
          [{ text: "OK" }]
        );
        return;
      }

      // Get current location
      const location = await Location.getCurrentPositionAsync({});
      const region: Region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: DEFAULT_MAP_REGION.latitudeDelta,
        longitudeDelta: DEFAULT_MAP_REGION.longitudeDelta,
      };
      setCurrentLocation(region);
    } catch (error) {
      console.error("Error getting location:", error);
      Alert.alert("Error", "No se pudo obtener la ubicación actual");
    }
  };

  const handleMapReady = () => {
    setLoading(false);
    onMapReady?.();
  };

  const handleRegionChange = (region: Region) => {
    // Solo llamar onRegionChange si se proporciona y no es la región inicial
    if (onRegionChange && currentLocation) {
      const isSignificantChange =
        Math.abs(region.latitude - currentLocation.latitude) > 0.001 ||
        Math.abs(region.longitude - currentLocation.longitude) > 0.001;

      if (isSignificantChange) {
        onRegionChange(region);
      }
    }
  };

  return (
    <View style={[styles.container, style]} {...props}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={currentLocation || initialRegion}
        showsUserLocation={showsUserLocation}
        followsUserLocation={followsUserLocation}
        onMapReady={handleMapReady}
        onRegionChange={handleRegionChange}
        mapType={MAP_CONFIG.mapType}
        showsMyLocationButton={MAP_CONFIG.showsMyLocationButton}
        showsCompass={MAP_CONFIG.showsCompass}
        showsScale={MAP_CONFIG.showsScale}
        showsBuildings={MAP_CONFIG.showsBuildings}
        showsTraffic={MAP_CONFIG.showsTraffic}
        showsIndoors={MAP_CONFIG.showsIndoors}
        loadingEnabled={MAP_CONFIG.loadingEnabled}
        loadingIndicatorColor={theme.colors.primary}
        loadingBackgroundColor={theme.colors.mapBackground}
      />

      {loading && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Cargando ubicación...</Text>
        </View>
      )}
    </View>
  );
};
