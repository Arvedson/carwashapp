import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ThemeToggleSize } from "./ThemeToggle.types";

export const createThemeToggleStyles = (
  theme: Theme,
  size: ThemeToggleSize
) => {
  const { colors, borders, components } = theme;

  // Usar tokens de componentes
  const sizeStyles = components.themeToggle.sizes[size];

  // Mapeo de padding basado en el tamaño
  const paddingMap = {
    small: 8,
    medium: 12,
    large: 16,
  };

  // Mapeo de iconSize basado en el tamaño
  const iconSizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  };

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: borders.radius.md,
      backgroundColor: colors.surface,
      padding: paddingMap[size],
      minHeight: sizeStyles.minHeight,
      minWidth: sizeStyles.minHeight, // Usar minHeight para mantener forma cuadrada
      borderWidth: borders.width.thin,
      borderColor: colors.border,
    },
    icon: {
      fontSize: iconSizeMap[size],
    },
  });
};
