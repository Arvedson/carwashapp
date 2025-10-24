import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { LocationTypeChipProps, LocationType } from "./LocationTypeChip.types";
import { createLocationTypeChipStyles } from "./LocationTypeChip.styles";

const LOCATION_TYPE_CONFIG = {
  home: {
    icon: "🏡",
    label: "Casa",
  },
  work: {
    icon: "🏢",
    label: "Trabajo",
  },
  other: {
    icon: "📍",
    label: "Otro",
  },
} as const;

export const LocationTypeChip: React.FC<LocationTypeChipProps> = ({
  type,
  isSelected = false,
  onPress,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createLocationTypeChipStyles(theme, isSelected);
  const config = LOCATION_TYPE_CONFIG[type];

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.chip, isSelected && styles.selectedChip]}
        onPress={() => onPress(type)}
        activeOpacity={0.7}
      >
        <Text style={[styles.icon, isSelected && styles.selectedText]}>
          {config.icon}
        </Text>
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {config.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};














