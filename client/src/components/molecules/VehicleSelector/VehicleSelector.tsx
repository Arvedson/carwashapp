import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { VehicleSelectorProps } from "./VehicleSelector.types";
import { createVehicleSelectorStyles } from "./VehicleSelector.styles";

const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  vehicles,
  selectedVehicle,
  onSelect,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createVehicleSelectorStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {vehicles.map((vehicle) => {
          const isSelected = selectedVehicle?.id === vehicle.id;

          return (
            <TouchableOpacity
              key={vehicle.id}
              style={[
                styles.vehicleItem,
                isSelected && styles.selectedVehicleItem,
              ]}
              onPress={() => onSelect(vehicle)}
              activeOpacity={0.7}
            >
              <Text style={styles.vehicleIcon}>{vehicle.icon}</Text>
              <Text
                style={[
                  styles.vehicleName,
                  isSelected && styles.selectedVehicleName,
                ]}
              >
                {vehicle.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VehicleSelector;
