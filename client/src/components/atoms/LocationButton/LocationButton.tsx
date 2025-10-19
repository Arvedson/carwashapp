import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { LocationButtonProps } from "./LocationButton.types";
import { createLocationButtonStyles } from "./LocationButton.styles";

const LocationButton: React.FC<LocationButtonProps> = ({
  onPress,
  isLoading = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createLocationButtonStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={isLoading}
        activeOpacity={0.7}
      >
        <Text style={isLoading ? styles.loadingIcon : styles.icon}>
          {isLoading ? "🔄" : "📍"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationButton;
