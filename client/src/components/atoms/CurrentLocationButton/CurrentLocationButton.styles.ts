import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createCurrentLocationButtonStyles = (
  theme: Theme,
  size: "small" | "medium" | "large",
  disabled: boolean
) => {
  const { colors, spacing, borders, typography, components } = theme;

  // Usar tokens de componentes
  const sizeStyles = components.locationButton.sizes[size];

  return StyleSheet.create({
    button: {
      flex: 1, // Ocupa toda la altura y ancho disponible del contenedor
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minHeight: sizeStyles.minHeight,
      width: "100%", // Asegura que ocupe todo el ancho disponible
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      backgroundColor: disabled ? colors.disabled : colors.primary,
      borderRadius: borders.radius.md,
      opacity: disabled ? 0.6 : 1,
    },
    text: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
      marginLeft: spacing.sm,
    },
    icon: {
      width: sizeStyles.iconSize,
      height: sizeStyles.iconSize,
      tintColor: colors.text.inverse,
    },
  });
};
