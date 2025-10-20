import { useState, useCallback } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import { Location as LocationType, FavoriteLocation } from "@/types";
import { LocationFormData } from "@/components/molecules/LocationForm";
import { LocationType as LocationTypeEnum } from "@/components/atoms/LocationTypeChip";

export interface UseLocationManagementReturn {
  // State
  favoriteLocations: FavoriteLocation[];
  isModalVisible: boolean;
  isLoading: boolean;
  selectedLocation: LocationType | null;

  // Actions
  openAddLocationModal: () => void;
  closeAddLocationModal: () => void;
  addFavoriteLocation: (locationData: LocationFormData) => void;
  removeFavoriteLocation: (locationId: string) => void;
  selectLocation: (location: FavoriteLocation) => void;
  getCurrentLocation: () => Promise<LocationType | null>;

  // Modal handlers
  handleLocationSelect: (location: LocationType) => void;
  handleCurrentLocationPress: () => Promise<void>;
}

export const useLocationManagement = (): UseLocationManagementReturn => {
  const [favoriteLocations, setFavoriteLocations] = useState<
    FavoriteLocation[]
  >([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null
  );

  const openAddLocationModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeAddLocationModal = useCallback(() => {
    setIsModalVisible(false);
    setSelectedLocation(null);
  }, []);

  const addFavoriteLocation = useCallback(
    (locationData: LocationFormData) => {
      const newLocation: FavoriteLocation = {
        id: `location_${Date.now()}`,
        name: locationData.name,
        icon: getLocationIcon(locationData.type),
        address: locationData.location.address || "Ubicación seleccionada",
        location: locationData.location,
        type: locationData.type,
      };

      setFavoriteLocations((prev) => [...prev, newLocation]);
      closeAddLocationModal();

      Alert.alert(
        "Ubicación guardada",
        `"${newLocation.name}" se ha agregado a tus ubicaciones favoritas.`,
        [{ text: "OK" }]
      );
    },
    [closeAddLocationModal]
  );

  const removeFavoriteLocation = useCallback((locationId: string) => {
    setFavoriteLocations((prev) => prev.filter((loc) => loc.id !== locationId));
  }, []);

  const selectLocation = useCallback((location: FavoriteLocation) => {
    setSelectedLocation({
      ...location.location,
      latitudeDelta: location.location.latitudeDelta || 0.01,
      longitudeDelta: location.location.longitudeDelta || 0.01,
    });
  }, []);

  const getCurrentLocation =
    useCallback(async (): Promise<LocationType | null> => {
      try {
        setIsLoading(true);

        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permisos de Ubicación",
            "Se necesitan permisos de ubicación para obtener tu posición actual.",
            [{ text: "OK" }]
          );
          return null;
        }

        const location = await Location.getCurrentPositionAsync({});
        const locationData: LocationType = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        // Try to get address using reverse geocoding
        try {
          const reverseGeocode = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });

          if (reverseGeocode.length > 0) {
            const address = reverseGeocode[0];
            if (address) {
              locationData.address = [
                address.street || "",
                address.city || "",
                address.region || "",
                address.country || "",
              ]
                .filter(Boolean)
                .join(", ");
              locationData.city = address.city || undefined;
              locationData.state = address.region || undefined;
            }
          }
        } catch (geocodeError) {
          console.warn("Reverse geocoding failed:", geocodeError);
        }

        return locationData;
      } catch (error) {
        console.error("Error getting current location:", error);
        Alert.alert("Error", "No se pudo obtener la ubicación actual");
        return null;
      } finally {
        setIsLoading(false);
      }
    }, []);

  const handleLocationSelect = useCallback((location: LocationType) => {
    setSelectedLocation(location);
  }, []);

  const handleCurrentLocationPress = useCallback(async () => {
    const currentLocation = await getCurrentLocation();
    if (currentLocation) {
      setSelectedLocation(currentLocation);
    }
  }, [getCurrentLocation]);

  return {
    // State
    favoriteLocations,
    isModalVisible,
    isLoading,
    selectedLocation,

    // Actions
    openAddLocationModal,
    closeAddLocationModal,
    addFavoriteLocation,
    removeFavoriteLocation,
    selectLocation,
    getCurrentLocation,

    // Modal handlers
    handleLocationSelect,
    handleCurrentLocationPress,
  };
};

// Helper function to get icon based on location type
const getLocationIcon = (type: LocationTypeEnum): string => {
  switch (type) {
    case "home":
      return "🏡";
    case "work":
      return "🏢";
    case "other":
    default:
      return "📍";
  }
};
