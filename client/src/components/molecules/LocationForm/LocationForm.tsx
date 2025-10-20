import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { TextInput } from "@/components/atoms/TextInput";
import { LocationDisplay } from "@/components/atoms/LocationDisplay";
import {
  LocationTypeChip,
  LocationType,
} from "@/components/atoms/LocationTypeChip";
import { Button } from "@/components/atoms/Button";
import { LocationFormProps } from "./LocationForm.types";
import { createLocationFormStyles } from "./LocationForm.styles";

export const LocationForm: React.FC<LocationFormProps> = ({
  selectedLocation,
  formData,
  onFormDataChange,
  onTypeSelect,
  isLoading = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createLocationFormStyles(theme);

  const handleNameChange = (name: string) => {
    onFormDataChange({ name });
  };

  return (
    <View style={[styles.container, style]}>
      {/* Location Display Section */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text variant="heading" size="md" weight="semibold">
            Ubicación seleccionada
          </Text>
        </View>
        <View style={styles.locationDisplayContainer}>
          <LocationDisplay location={selectedLocation} isLoading={isLoading} />
        </View>
      </View>

      {/* Name Input Section */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text variant="heading" size="md" weight="semibold">
            Nombre de la ubicación
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ej: Casa, Trabajo, Universidad..."
            value={formData.name}
            onChangeText={handleNameChange}
            maxLength={50}
          />
        </View>
      </View>

      {/* Type Selection Section */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text variant="heading" size="md" weight="semibold">
            Tipo de ubicación
          </Text>
        </View>
        <View style={styles.typeSelectorContainer}>
          {(["home", "work", "other"] as LocationType[]).map((type) => (
            <LocationTypeChip
              key={type}
              type={type}
              isSelected={formData.type === type}
              onPress={onTypeSelect}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
