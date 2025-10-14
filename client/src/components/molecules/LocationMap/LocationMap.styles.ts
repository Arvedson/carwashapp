import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationMapStyles = (
  theme: Theme,
  size: "small" | "medium" | "large"
) => {
  const { colors, borders, typography, components } = theme;

  // Usar tokens de componentes
  const sizeStyles = components.map.sizes[size];

  return StyleSheet.create({
    container: {
      height: sizeStyles.height,
      backgroundColor: colors.mapBackground,
      borderRadius: sizeStyles.borderRadius,
      borderWidth: borders.width.thin,
      borderColor: colors.mapBorder,
      overflow: "hidden",
    },
    map: {
      flex: 1,
      borderRadius: sizeStyles.borderRadius,
    },
    loadingOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.mapOverlay,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizeStyles.borderRadius,
    },
    loadingText: {
      color: colors.text.inverse,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.medium,
    },
  });
};
