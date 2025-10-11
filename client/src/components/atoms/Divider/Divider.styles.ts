import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import {
  DividerVariant,
  DividerOrientation,
  DividerSize,
} from "./Divider.types";

export const createDividerStyles = (
  theme: Theme,
  variant: DividerVariant,
  orientation: DividerOrientation,
  size: DividerSize,
  color?: string
) => {
  const { colors, borders } = theme;

  // Mapeo de tamaños
  const sizeMap = {
    thin: 1,
    medium: 2,
    thick: 4,
  };

  const dividerSize = sizeMap[size];

  return StyleSheet.create({
    divider: {
      backgroundColor: color || colors.border,

      // Orientación
      ...(orientation === "horizontal" && {
        height: dividerSize,
        width: "100%",
      }),
      ...(orientation === "vertical" && {
        width: dividerSize,
        height: "100%",
      }),

      // Variantes
      ...(variant === "solid" &&
        {
          // Línea sólida - no necesita cambios adicionales
        }),
      ...(variant === "dashed" && {
        // En React Native, las líneas punteadas se simulan con borderStyle
        borderStyle: "dashed",
        borderWidth: 0,
        borderTopWidth: orientation === "horizontal" ? dividerSize : 0,
        borderLeftWidth: orientation === "vertical" ? dividerSize : 0,
        backgroundColor: "transparent",
      }),
      ...(variant === "dotted" && {
        // En React Native, las líneas de puntos se simulan con borderStyle
        borderStyle: "dotted",
        borderWidth: 0,
        borderTopWidth: orientation === "horizontal" ? dividerSize : 0,
        borderLeftWidth: orientation === "vertical" ? dividerSize : 0,
        backgroundColor: "transparent",
      }),
    },
  });
};



