import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { IconVariant, IconSize } from "./Icon.types";

export const createIconStyles = (
  theme: Theme,
  variant: IconVariant,
  size: IconSize,
  color?: string
) => {
  const { colors, components } = theme;

  // Usar tokens de componentes
  const iconSize = components.icon.sizes[size];

  return StyleSheet.create({
    icon: {
      width: iconSize,
      height: iconSize,
      // Color por defecto o personalizado
      tintColor: color || colors.text.primary,

      // Variantes de estilo
      ...(variant === "outline" && {
        opacity: 0.8,
      }),
      ...(variant === "filled" && {
        opacity: 1,
      }),
      ...(variant === "duotone" && {
        opacity: 0.9,
      }),
    },
  });
};
