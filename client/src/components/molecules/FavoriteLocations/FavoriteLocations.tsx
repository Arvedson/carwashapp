import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { AddLocationButton } from "@/components/atoms/AddLocationButton";
import { FavoriteLocationsProps } from "./FavoriteLocations.types";
import { createFavoriteLocationsStyles } from "./FavoriteLocations.styles";

const FavoriteLocations: React.FC<FavoriteLocationsProps> = ({
  locations,
  onSelect,
  onAddLocation,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createFavoriteLocationsStyles(theme);

  if (locations.length === 0) {
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.title}>Tus ubicaciones favoritas</Text>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No tienes ubicaciones guardadas</Text>
          {onAddLocation && (
            <View style={styles.addButtonContainer}>
              <AddLocationButton
                onPress={onAddLocation}
                text="Agregar ubicación"
              />
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Tus ubicaciones favoritas</Text>

      <View style={styles.locationsRow}>
        {locations.map((location) => (
          <TouchableOpacity
            key={location.id}
            style={styles.locationChip}
            onPress={() => onSelect(location)}
            activeOpacity={0.7}
          >
            <Text style={styles.locationIcon}>{location.icon}</Text>
            <Text style={styles.locationName}>{location.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FavoriteLocations;
