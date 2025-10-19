import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { SearchButtonProps } from "./SearchButton.types";
import { createSearchButtonStyles } from "./SearchButton.styles";

const SearchButton: React.FC<SearchButtonProps> = ({
  onPress,
  isLoading = false,
  disabled = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createSearchButtonStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.button, (disabled || isLoading) && { opacity: 0.6 }]}
        onPress={onPress}
        disabled={disabled || isLoading}
        activeOpacity={0.8}
      >
        <Text style={isLoading ? styles.loadingIcon : styles.icon}>
          {isLoading ? "🔄" : "🔍"}
        </Text>
        <Text style={isLoading ? styles.loadingText : styles.buttonText}>
          {isLoading ? "Buscando..." : "Buscar lavadores cercanos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
